import {
  havaFallback,
  dovizFallback,
  namazFallback,
  type HavaDurumu,
  type DovizKuru,
  type NamazVakti,
} from './servicesData';

// Ücretsiz, anahtarsız API'ler. Sunucuda çekilir ve 30 dk önbellekte tutulur.
const REVALIDATE_SECONDS = 1800;
const TIMEOUT_MS = 5000;
const CANAKKALE = { lat: 40.1553, lon: 26.4142 };
const GRAMS_PER_TROY_OUNCE = 31.1035;

// Hata veya zaman aşımında null döner; çağıran sabit veriye düşer
async function getJson<T>(url: string): Promise<T | null> {
  const request = fetch(url, { next: { revalidate: REVALIDATE_SECONDS } })
    .then(res => (res.ok ? (res.json() as Promise<T>) : null))
    .catch(() => null);
  const timeout = new Promise<null>(resolve => setTimeout(() => resolve(null), TIMEOUT_MS));
  return Promise.race([request, timeout]);
}

const formatNumber = (value: number, digits: number) =>
  value.toLocaleString('tr-TR', { minimumFractionDigits: digits, maximumFractionDigits: digits });

// WMO hava kodları: https://open-meteo.com/en/docs
const weatherInfo = (code: number) => {
  if (code === 0) return { durum: 'Açık', icon: '☀️' };
  if (code <= 2) return { durum: 'Parçalı Bulutlu', icon: '⛅' };
  if (code === 3) return { durum: 'Kapalı', icon: '☁️' };
  if (code <= 48) return { durum: 'Sisli', icon: '🌫️' };
  if (code <= 57) return { durum: 'Çisenti', icon: '🌦️' };
  if (code <= 67 || (code >= 80 && code <= 82)) return { durum: 'Yağmurlu', icon: '🌧️' };
  if (code <= 77 || code === 85 || code === 86) return { durum: 'Karlı', icon: '🌨️' };
  return { durum: 'Gök Gürültülü', icon: '⛈️' };
};

type OpenMeteoResponse = {
  current: { temperature_2m: number; weather_code: number };
  daily: { time: string[]; weather_code: number[]; temperature_2m_max: number[] };
};

async function getHavaDurumu(): Promise<HavaDurumu> {
  const data = await getJson<OpenMeteoResponse>(
    `https://api.open-meteo.com/v1/forecast?latitude=${CANAKKALE.lat}&longitude=${CANAKKALE.lon}` +
      '&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max' +
      '&timezone=Europe%2FIstanbul&forecast_days=5'
  );
  if (!data?.current || !data.daily) return havaFallback;

  return {
    derece: Math.round(data.current.temperature_2m),
    ...weatherInfo(data.current.weather_code),
    tahmin: data.daily.time.slice(1, 5).map((date, i) => ({
      gun: new Date(date).toLocaleDateString('tr-TR', { weekday: 'short', timeZone: 'UTC' }),
      icon: weatherInfo(data.daily.weather_code[i + 1]).icon,
      derece: `${Math.round(data.daily.temperature_2m_max[i + 1])}°`,
    })),
  };
}

type FrankfurterRange = { rates: Record<string, Record<string, number>> };
type CoinGeckoResponse = Partial<Record<'bitcoin' | 'pax-gold', { try: number; try_24h_change: number }>>;

const dovizRow = (base: DovizKuru, value: number, changePct: number, digits: number): DovizKuru => ({
  ...base,
  kur: formatNumber(value, digits),
  degisim: `${changePct >= 0 ? '+' : ''}${formatNumber(changePct, 2)}%`,
  yukselis: changePct >= 0,
});

async function getDovizKurlari(): Promise<DovizKuru[]> {
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const [fx, crypto] = await Promise.all([
    // ECB kurları (EUR bazlı); TRY çaprazları buradan hesaplanır
    getJson<FrankfurterRange>(`https://api.frankfurter.dev/v1/${weekAgo}..?base=EUR&symbols=TRY,USD,GBP`),
    // Gram altın, altına endeksli PAXG (1 ons) fiyatından hesaplanır
    getJson<CoinGeckoResponse>(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,pax-gold&vs_currencies=try&include_24hr_change=true'
    ),
  ]);

  const [usd, eur, gbp, altin, btc] = dovizFallback;
  const rows = [...dovizFallback];

  const days = fx?.rates ? Object.keys(fx.rates).sort() : [];
  if (fx && days.length >= 2) {
    const toTry = (r: Record<string, number>) => ({ USD: r.TRY / r.USD, EUR: r.TRY, GBP: r.TRY / r.GBP });
    const today = toTry(fx.rates[days[days.length - 1]]);
    const prev = toTry(fx.rates[days[days.length - 2]]);
    const pct = (a: number, b: number) => (a / b - 1) * 100;
    rows[0] = dovizRow(usd, today.USD, pct(today.USD, prev.USD), 4);
    rows[1] = dovizRow(eur, today.EUR, pct(today.EUR, prev.EUR), 4);
    rows[2] = dovizRow(gbp, today.GBP, pct(today.GBP, prev.GBP), 4);
  }
  const gold = crypto?.['pax-gold'];
  if (gold) rows[3] = dovizRow(altin, gold.try / GRAMS_PER_TROY_OUNCE, gold.try_24h_change, 2);
  if (crypto?.bitcoin) rows[4] = dovizRow(btc, crypto.bitcoin.try, crypto.bitcoin.try_24h_change, 0);

  return rows;
}

type AladhanResponse = { data?: { timings?: Record<string, string> } };

async function getNamazVakitleri(): Promise<NamazVakti[]> {
  // dd-mm-yyyy, İstanbul saatine göre bugün
  const today = new Date().toLocaleDateString('en-GB', { timeZone: 'Europe/Istanbul' }).replace(/\//g, '-');
  const data = await getJson<AladhanResponse>(
    `https://api.aladhan.com/v1/timings/${today}?latitude=${CANAKKALE.lat}&longitude=${CANAKKALE.lon}` +
      '&method=13&timezonestring=Europe%2FIstanbul' // method 13: Diyanet
  );
  const t = data?.data?.timings;
  if (!t) return namazFallback;

  return [
    { vakit: 'İmsak', saat: t.Fajr },
    { vakit: 'Güneş', saat: t.Sunrise },
    { vakit: 'Öğle', saat: t.Dhuhr },
    { vakit: 'İkindi', saat: t.Asr },
    { vakit: 'Akşam', saat: t.Maghrib },
    { vakit: 'Yatsı', saat: t.Isha },
  ];
}

export async function getLiveData() {
  const [hava, doviz, namaz] = await Promise.all([getHavaDurumu(), getDovizKurlari(), getNamazVakitleri()]);
  return { hava, doviz, namaz };
}

export type LiveData = Awaited<ReturnType<typeof getLiveData>>;
