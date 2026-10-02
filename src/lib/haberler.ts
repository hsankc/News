// Demo haberler. Gerçek kişi adı kullanılmamıştır.

type HaberKaydi = {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  yayin: string; // YYYY-MM-DDTHH:MM (İstanbul saati)
  icerik: string[];
};

const AYLAR = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

// Saat dilimine bağlı kaymayı önlemek için elle biçimlenir: 2026-10-02T08:15 -> 2 Ekim 2026
const formatHaberTarihi = (yayin: string) => {
  const [yil, ay, gun] = yayin.slice(0, 10).split('-').map(Number);
  return `${gun} ${AYLAR[ay - 1]} ${yil}`;
};

const hazirla = (h: HaberKaydi) => ({ ...h, date: formatHaberTarihi(h.yayin), saat: h.yayin.slice(11, 16) });

export const heroNews = [
  {
    id: 1,
    title: "Boğaz'da Sis Alarmı: Gemi Trafiği Çift Yönlü Askıya Alındı",
    summary: "Sabah saatlerinde etkili olan yoğun sis nedeniyle Çanakkale Boğazı transit gemi geçişlerine çift yönlü kapatıldı. Arabalı vapur seferlerinde de aksamalar yaşanıyor.",
    image: "/bridge.png",
    category: "Gündem",
    yayin: "2026-10-02T08:15",
    icerik: [
      "Çanakkale'de sabahın erken saatlerinde etkili olan yoğun sis, Boğaz'da görüş mesafesini yer yer 200 metrenin altına düşürdü. Kıyı Emniyeti Genel Müdürlüğü'nden yapılan açıklamada, seyir güvenliği nedeniyle Çanakkale Boğazı'nın transit gemi geçişlerine çift yönlü olarak kapatıldığı bildirildi.",
      "Boğaz'ın her iki girişinde demirleyen çok sayıda gemi, sisin dağılmasını bekliyor. Çanakkale–Eceabat ve Çanakkale–Kilitbahir hatlarındaki arabalı vapur seferleri de görüş mesafesine bağlı olarak aralıklarla yapılıyor.",
      "Yetkililer, sisin öğle saatlerine doğru etkisini kaybetmesinin beklendiğini, gemi trafiğinin hava koşulları elverdiğinde kademeli olarak yeniden açılacağını belirtti. 1915 Çanakkale Köprüsü'nü kullanacak sürücülerin de dikkatli olması istendi.",
    ],
  },
  {
    id: 2,
    title: "Troya Müzesi'nde 'Homeros'un İzinde' Sergisi Kapılarını Açtı",
    summary: "Troya Müzesi'nin yeni geçici sergisi, İlyada destanında anlatılan sahneleri antik buluntular ve dijital canlandırmalarla ziyaretçilere sunuyor.",
    image: "/museum.png",
    category: "Kültür Sanat",
    yayin: "2026-10-01T18:30",
    icerik: [
      "Troya Müzesi'nde hazırlanan \"Homeros'un İzinde\" adlı geçici sergi, düzenlenen törenle ziyarete açıldı. Sergide Troya kazılarında gün yüzüne çıkarılan seramikler, silahlar ve takıların yanı sıra İlyada destanındaki sahneleri canlandıran dijital enstalasyonlar yer alıyor.",
      "Müze yetkilileri, serginin özellikle öğrenci gruplarına yönelik rehberli turlarla destekleneceğini belirtti. Ziyaretçiler, artırılmış gerçeklik uygulaması sayesinde antik kentin farklı dönemlerdeki görünümünü de inceleyebilecek.",
      "Sergi, yıl sonuna kadar salıdan pazara 09.00–19.00 saatleri arasında ziyaret edilebilecek.",
    ],
  },
  {
    id: 3,
    title: "Gelibolu Yarımadası Barış Koşusu İçin Kayıtlar Başladı",
    summary: "Tarihi Gelibolu Yarımadası'nda kasım ayında düzenlenecek 10 ve 21 kilometrelik Barış Koşusu için kayıtlar açıldı.",
    image: "/maraton.png",
    category: "Spor",
    yayin: "2026-10-01T11:05",
    icerik: [
      "Gelibolu Yarımadası Tarihi Alanı'nda bu yıl düzenlenecek Barış Koşusu için kayıtlar başladı. Kasım ayının ikinci haftasında yapılacak organizasyonda sporcular 10 ve 21 kilometrelik parkurlarda yarışacak.",
      "Kabatepe'den başlayan parkur, şehitlikler ve anıtlar arasından geçiyor. Organizasyon komitesi, geçen yıl 2 bini aşan katılımın bu yıl daha da artmasını beklediklerini açıkladı.",
      "Kayıtlar ekim ayı sonuna kadar çevrim içi olarak yapılabilecek. Yarışı tamamlayan tüm sporculara Çanakkale Savaşları temalı madalya verilecek.",
    ],
  },
].map(hazirla);

export const latestNews = [
  {
    id: 4,
    title: "Boğaz'da Palamut Bolluğu: Tezgâhlarda Fiyatlar Yarı Yarıya Düştü",
    summary: "Av sezonunun ikinci ayında Boğaz'da palamut bolluğu yaşanıyor. Balık halinde palamutun kilogram fiyatı geçen haftaya göre neredeyse yarıya indi.",
    image: "/marina.png",
    category: "Ekonomi",
    yayin: "2026-10-02T10:42",
    icerik: [
      "Çanakkale Boğazı'nda son günlerde palamut bolluğu yaşanıyor. Sabahın erken saatlerinde denize açılan balıkçı tekneleri, ağlarını dolu dolu çekerek limana dönüyor.",
      "Bolluk tezgâhlara da yansıdı. Balık halinde palamutun kilogram fiyatı geçen haftaya göre neredeyse yarı yarıya düştü. Esnaf, havaların serinlemesiyle birlikte lüfer ve istavritte de bereketli bir dönem beklediklerini söylüyor.",
      "Balıkçılar ise yakıt ve ağ maliyetlerinin arttığını hatırlatarak, fiyatlardaki düşüşün kendi kazançlarını sınırladığını ifade ediyor.",
    ],
  },
  {
    id: 5,
    title: "29 Ekim Hazırlıkları Başladı: Kordon Bayraklarla Süsleniyor",
    summary: "Cumhuriyetin 103. yıl dönümü kutlamaları için Çanakkale'de hazırlıklar başladı. Kordon boyu ve meydanlar bayraklar ve ışıklandırmayla süsleniyor.",
    image: "/night_city.png",
    category: "Gündem",
    yayin: "2026-10-02T09:58",
    icerik: [
      "Cumhuriyetin 103. yıl dönümü kutlamaları için Çanakkale'de hazırlıklar başladı. Belediye ekipleri Kordon boyu, Cumhuriyet Meydanı ve ana caddeleri Türk bayrakları ve ışıklandırmalarla süslemeye başladı.",
      "29 Ekim'de Cumhuriyet Meydanı'nda yapılacak resmî törenin ardından öğrencilerin gösterileri ve fener alayı düzenlenecek. Akşam saatlerinde ise Kordon'da konser ve havai fişek gösterisi yapılması planlanıyor.",
      "Tören provalarının önümüzdeki hafta başlayacağı, bu süreçte bazı cadde ve sokakların kısa süreli olarak trafiğe kapatılabileceği açıklandı.",
    ],
  },
  {
    id: 6,
    title: "ÇOMÜ'de Yeni Akademik Yıl: Öğrencilerin Gündeminde Kira Var",
    summary: "Çanakkale Onsekiz Mart Üniversitesi'nde yeni dönem derslerle başladı. Kente gelen binlerce öğrenci uygun fiyatlı ev ve yurt bulmakta zorlanıyor.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600",
    category: "Eğitim",
    yayin: "2026-10-02T09:20",
    icerik: [
      "Çanakkale Onsekiz Mart Üniversitesi'nde 2026–2027 akademik yılı derslerle başladı. Kampüslerde yoğunluk yaşanırken, kente yeni gelen öğrencilerin en büyük gündemi barınma oldu.",
      "Öğrenciler özellikle merkeze yakın mahallelerde kiraların yükseldiğini, ev arkadaşı bulmak için sosyal medya gruplarının dolup taştığını anlatıyor. Devlet yurtlarında ek kontenjan açıldığı, özel yurtların ise büyük ölçüde dolduğu öğrenildi.",
      "Emlakçılar, talebin ekim ayının ortasına kadar yüksek seyretmesini beklediklerini belirtti. Üniversite yönetimi de öğrencilere yönelik bir barınma danışma masası kurdu.",
    ],
  },
  {
    id: 7,
    title: "Ayvacık'ta Zeytin Hasadı Başladı: Rekolte Beklentisi Yüksek",
    summary: "Kuzey Ege'nin zeytin üssü Ayvacık'ta erken hasat başladı. Üreticiler yağmurların zamanında yağmasıyla rekoltenin geçen yılın üzerinde olmasını bekliyor.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600",
    category: "Ekonomi",
    yayin: "2026-10-01T17:35",
    icerik: [
      "Ayvacık ve Küçükkuyu çevresindeki zeytinliklerde erken hasat başladı. Sabahın erken saatlerinde bahçelere çıkan üreticiler, sofralık ve erken hasat yağlık zeytinleri dalından topluyor.",
      "Üreticiler, yaz sonunda yağan yağmurların taneleri iyi beslediğini, bu yıl rekoltenin geçen sezonun üzerinde olmasını beklediklerini söylüyor. Bölgedeki zeytinyağı fabrikaları da sıkım için hazırlıklarını tamamladı.",
      "Hasadın kasım ayında yoğunlaşması, Ayvacık'ın geleneksel zeytin hasat şenliğinin ise ay sonunda yapılması bekleniyor.",
    ],
  },
  {
    id: 8,
    title: "Bayramiç'te Organik Üreticilere Kooperatif Desteği",
    summary: "Bayramiç'te kurulan üretici kooperatifi, köylerdeki organik sebze ve meyveleri aracısız olarak tüketiciyle buluşturmaya hazırlanıyor.",
    image: "/farm.png",
    category: "Yerel",
    yayin: "2026-10-01T15:10",
    icerik: [
      "Bayramiç'te 40 üreticinin bir araya gelerek kurduğu kooperatif, organik sebze ve meyveleri aracısız şekilde tüketiciye ulaştırmak için çalışmalara başladı. Kooperatif, ilk etapta Çanakkale merkezde haftada iki gün satış noktası açacak.",
      "Üreticiler, aracıların devreden çıkmasıyla hem kendi kazançlarının artacağını hem de tüketicinin daha uygun fiyata ürün alabileceğini belirtiyor. Kooperatif ayrıca çevrim içi sipariş sistemi kurmayı planlıyor.",
      "İlk satışlarda Bayramiç elmasının yanı sıra domates, biber, kabak ve köy yumurtası tezgâhlarda yer alacak.",
    ],
  },
  {
    id: 9,
    title: "Motosiklet Denetimi: Kasksız Sürücülere Ceza Yağdı",
    summary: "Trafik ekiplerinin kent genelinde yaptığı motosiklet denetiminde kask takmayan ve belgesiz sürücülere cezai işlem uygulandı.",
    image: "/police.png",
    category: "Asayiş",
    yayin: "2026-10-01T13:47",
    icerik: [
      "İl Emniyet Müdürlüğü trafik ekipleri, kent merkezinde ve sahil yolunda motosiklet ve motorlu bisikletlere yönelik denetim yaptı. Denetimde 180 motosiklet kontrol edildi.",
      "Kask takmadığı, sürücü belgesi bulunmadığı veya aracında zorunlu trafik sigortası olmadığı tespit edilen 37 sürücüye cezai işlem uygulandı, 6 motosiklet trafikten men edildi.",
      "Yetkililer, özellikle öğrencilerin yoğun olarak kullandığı motosikletlerde kask kullanımının hayati önem taşıdığını hatırlatarak denetimlerin süreceğini açıkladı.",
    ],
  },
  {
    id: 10,
    title: "Saat Kulesi Çevresi Yayalaştırılıyor",
    summary: "Tarihi Saat Kulesi ve çevresindeki çarşı sokakları, başlatılan yayalaştırma projesi kapsamında araç trafiğine kapatılacak.",
    image: "/clocktower.png",
    category: "Yerel",
    yayin: "2026-10-01T10:22",
    icerik: [
      "Çanakkale Belediyesi, kentin simgelerinden Saat Kulesi ve çevresindeki çarşı sokaklarını kapsayan yayalaştırma projesini hayata geçiriyor. Proje kapsamında bölgedeki sokaklar araç trafiğine kapatılacak, zemin doğal taşla yenilenecek.",
      "Esnafın mal kabulü için sabah saatlerinde belirli bir süre araç girişine izin verileceği açıklandı. Bölgeye yeni oturma alanları, aydınlatma ve yönlendirme tabelaları da yerleştirilecek.",
      "Çalışmaların kasım ayında başlaması ve turizm sezonu öncesinde tamamlanması planlanıyor.",
    ],
  },
  {
    id: 11,
    title: "Assos Antik Tiyatrosu'nda Gün Batımı Konseri",
    summary: "Assos Antik Kenti'ndeki tiyatroda gün batımında verilen klasik müzik konseri, yüzlerce müzikseveri ağırladı.",
    image: "/assos.png",
    category: "Kültür Sanat",
    yayin: "2026-09-30T21:05",
    icerik: [
      "Ayvacık'taki Assos Antik Kenti'nin tiyatrosunda sezonun son açık hava konseri gerçekleştirildi. Gün batımıyla başlayan konserde oda orkestrası, Ege Denizi ve Midilli Adası manzarası eşliğinde klasik eserler seslendirdi.",
      "Konseri izlemek için Çanakkale'nin yanı sıra İstanbul ve İzmir'den gelen müzikseverler de antik tiyatroyu doldurdu. Bölgedeki otel ve pansiyonlarda hafta sonu doluluk oranı yüzde 90'a ulaştı.",
      "Organizatörler, antik tiyatrodaki etkinliklerin gelecek yıl bahar aylarında yeniden başlayacağını açıkladı.",
    ],
  },
  {
    id: 12,
    title: "Poyraz Nedeniyle Ada Seferleri İptal Edildi",
    summary: "Kuzey Ege'de etkili olan sert poyraz nedeniyle Gökçeada ve Bozcaada'ya yapılacak feribot seferlerinin bir kısmı iptal edildi.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600",
    category: "Gündem",
    yayin: "2026-09-30T16:40",
    icerik: [
      "Kuzey Ege'de etkili olan ve hızı yer yer saatte 70 kilometreye ulaşan poyraz, deniz ulaşımını olumsuz etkiledi. Kabatepe–Gökçeada ve Geyikli–Bozcaada hatlarında öğleden sonraki feribot seferleri iptal edildi.",
      "Adalara gitmek için iskelelere gelen yolcular, seferlerin yeniden başlamasını beklemek zorunda kaldı. Feribot işletmesi, güncel sefer bilgilerinin internet sitesi ve sosyal medya hesaplarından duyurulacağını bildirdi.",
      "Meteoroloji yetkilileri, rüzgârın yarın sabah saatlerinden itibaren etkisini yitirmesini beklediklerini açıkladı.",
    ],
  },
  {
    id: 13,
    title: "Sahil Bisiklet Yolu Güzelyalı'ya Kadar Uzatıldı",
    summary: "Kordon'dan başlayan sahil bisiklet yolunun ikinci etabı tamamlandı. Parkur artık Güzelyalı'ya kadar kesintisiz devam ediyor.",
    image: "/bike_path.png",
    category: "Yerel",
    yayin: "2026-09-30T14:12",
    icerik: [
      "Çanakkale sahilindeki bisiklet yolunun ikinci etabı tamamlanarak hizmete açıldı. Kordon'dan başlayan parkur, Kepez üzerinden Güzelyalı'ya kadar toplam 18 kilometreye ulaştı.",
      "Yeni etapta bisiklet yolu yaya yolundan ayrıldı; güzergâh boyunca dinlenme noktaları, bisiklet tamir istasyonları ve içme suyu çeşmeleri yerleştirildi. Akıllı bisiklet kiralama istasyonlarının sayısı da 12'ye çıkarıldı.",
      "Hafta sonu parkurda yoğunluk yaşanırken, bisikletliler sahil yolunun güvenli hale gelmesinden memnun olduklarını dile getirdi.",
    ],
  },
  {
    id: 14,
    title: "Biga OSB'ye Yeni Fabrika: 400 Kişiye İstihdam",
    summary: "Biga Organize Sanayi Bölgesi'nde temeli atılan otomotiv yan sanayi tesisi, tam kapasiteye geçtiğinde 400 kişiye iş imkânı sağlayacak.",
    image: "/factory.png",
    category: "Ekonomi",
    yayin: "2026-09-30T11:30",
    icerik: [
      "Biga Organize Sanayi Bölgesi'nde otomotiv yan sanayi alanında faaliyet gösterecek yeni bir fabrikanın temeli atıldı. 40 dönümlük arazi üzerine kurulacak tesisin gelecek yılın sonunda üretime başlaması planlanıyor.",
      "Tesis tam kapasiteye ulaştığında 400 kişiye doğrudan istihdam sağlanacak. Üretimin büyük bölümünün Avrupa ülkelerine ihraç edilmesi hedefleniyor.",
      "Bölgedeki sanayiciler, 1915 Çanakkale Köprüsü ve Kuzey Marmara bağlantısının Biga'yı lojistik açıdan cazip hale getirdiğini, yeni yatırımların gelmeye devam edeceğini belirtiyor.",
    ],
  },
  {
    id: 15,
    title: "Belediye Meclisi'nden Öğrencilere Toplu Taşıma İndirimi",
    summary: "Belediye Meclisi'nin eylül ayı toplantısında öğrencilere yönelik toplu taşıma indirimi oy birliğiyle kabul edildi.",
    image: "/transport.png",
    category: "Politika",
    yayin: "2026-09-30T09:15",
    icerik: [
      "Çanakkale Belediye Meclisi eylül ayı olağan toplantısını gerçekleştirdi. Gündemin ilk maddesi olarak görüşülen öğrenci abonman kartı indirimi, meclis üyelerinin oy birliğiyle kabul edildi.",
      "Karara göre öğrenci kartı sahipleri, belediye otobüslerinde aylık abonmanı yüzde 30 indirimli kullanabilecek. Uygulamanın kasım ayı başında yürürlüğe girmesi bekleniyor.",
      "Toplantıda ayrıca kent içi otopark ücret tarifesi ve bazı mahallelerdeki imar düzenlemeleri görüşülerek komisyonlara havale edildi.",
    ],
  },
  {
    id: 16,
    title: "Kent Konseyi'nden Kıyı Yapılaşmasına Karşı Ortak Bildiri",
    summary: "Kent Konseyi, Boğaz kıyısındaki yeşil alanların korunması için meslek odaları ve sivil toplum kuruluşlarıyla ortak bildiri yayımladı.",
    image: "/park.png",
    category: "Politika",
    yayin: "2026-09-29T19:50",
    icerik: [
      "Çanakkale Kent Konseyi, Boğaz kıyısındaki yeşil alanların korunması ve kıyı yapılaşmasının sınırlandırılması çağrısıyla ortak bir bildiri yayımladı. Bildiriye meslek odaları ile çevre dernekleri de imza verdi.",
      "Bildiride kıyı şeridinin kamusal kullanıma açık kalması, yeni yapılaşmalarda kat sınırlamalarına uyulması ve kent planlamasında halkın görüşüne daha fazla yer verilmesi istendi.",
      "Kent Konseyi, konunun önümüzdeki ay düzenlenecek genel kurulda da ele alınacağını ve tüm siyasi partilerin temsilcilerinin toplantıya davet edileceğini açıkladı.",
    ],
  },
  {
    id: 17,
    title: "Uluslararası Belgesel Ekibi Troya'da Çekim Yaptı",
    summary: "Avrupalı bir yapım şirketinin hazırladığı Troya belgeseli için çekim ekibi, antik kentte ve Truva Atı'nın bulunduğu kordonda çalıştı.",
    image: "/trojan_horse.png",
    category: "Dünya",
    yayin: "2026-09-29T16:05",
    icerik: [
      "Antik Troya kentinin hikâyesini anlatacak uluslararası bir belgesel için çekimler Çanakkale'de sürüyor. Avrupalı bir yapım şirketine ait 25 kişilik ekip, Troya Ören Yeri'nde ve kent merkezindeki Truva Atı çevresinde çekim yaptı.",
      "Belgeselde arkeologların yanı sıra bölgede yaşayan köylüler ve müze çalışanlarıyla yapılan röportajlara da yer verilecek. Yapımın gelecek yıl birçok ülkede televizyon kanallarında ve dijital platformlarda yayınlanması planlanıyor.",
      "Yetkililer, belgeselin Çanakkale'nin dünyada tanıtımına önemli katkı sağlayacağını belirtti.",
    ],
  },
  {
    id: 18,
    title: "Almanya'dan Çanakkale'ye İlk Charter Uçuşu",
    summary: "Almanya'dan kalkan ilk charter uçuşu Çanakkale Havalimanı'na indi. Seferlerin sonbahar boyunca haftada iki kez yapılması planlanıyor.",
    image: "/airport.png",
    category: "Dünya",
    yayin: "2026-09-29T12:40",
    icerik: [
      "Almanya'nın Düsseldorf kentinden kalkan ilk charter uçağı, 170 yolcuyla Çanakkale Havalimanı'na iniş yaptı. Yolcular havalimanında karanfil ve yöresel ikramlarla karşılandı.",
      "Tur operatörü, Troya, Gelibolu Yarımadası ve Assos'u kapsayan kültür turlarına Avrupa'dan yoğun talep geldiğini, seferlerin sonbahar boyunca haftada iki kez yapılacağını açıkladı.",
      "Turizm temsilcileri, direkt uçuşların sezonu uzatarak kent ekonomisine önemli katkı sağlayacağını belirtti.",
    ],
  },
  {
    id: 19,
    title: "Bozcaada'da Bağ Bozumu Sona Erdi: Üreticiler Memnun",
    summary: "Bozcaada'da eylül başında başlayan bağ bozumu tamamlandı. Üreticiler hem rekoltenin hem de üzüm kalitesinin yüksek olduğunu söylüyor.",
    image: "/vineyard.png",
    category: "Yerel",
    yayin: "2026-09-29T10:10",
    icerik: [
      "Bozcaada'da eylül ayı başında başlayan bağ bozumu sona erdi. Adanın yerel üzüm çeşitleri olan Kuntra, Karalahna ve Çavuş'un hasadı tamamlanarak şaraphanelere ulaştırıldı.",
      "Üreticiler, yaz boyunca serin geçen gecelerin üzümlerin aromasını artırdığını, bu yılın kalite açısından son yılların en iyisi olduğunu ifade ediyor.",
      "Bağ bozumu boyunca adaya gelen yerli ve yabancı turistler de hasada katılarak geleneksel üzüm ezme etkinliklerinde yer aldı.",
    ],
  },
  {
    id: 20,
    title: "Dardanelspor Sahasında 3 Puanı Aldı",
    summary: "Dardanelspor, ligin 5. haftasında sahasında konuk ettiği rakibini 2-0 mağlup ederek üst sıralara tutundu.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600",
    category: "Spor",
    yayin: "2026-09-28T22:15",
    icerik: [
      "Dardanelspor, ligin 5. haftasında kendi sahasında konuk ettiği rakibini 2-0 yendi. İlk yarıyı 1-0 önde kapatan Çanakkale temsilcisi, ikinci golü 70. dakikada buldu.",
      "Maçı yaklaşık 3 bin taraftar takip etti. Teknik heyet, takımın oyun disiplininden memnun olduklarını ve hedeflerinin şampiyonluk yarışında yer almak olduğunu söyledi.",
      "Bu sonuçla puanını 10'a yükselten Dardanelspor, gelecek hafta deplasmanda mücadele edecek.",
    ],
  },
  {
    id: 21,
    title: "ÇOMÜ'de Yapay Zekâ Laboratuvarı Öğrencilere Açıldı",
    summary: "Mühendislik Fakültesi bünyesinde kurulan yapay zekâ ve robotik laboratuvarı, yeni dönemle birlikte lisans öğrencilerinin kullanımına açıldı.",
    image: "/ai_lab.png",
    category: "Eğitim",
    yayin: "2026-09-28T15:30",
    icerik: [
      "Çanakkale Onsekiz Mart Üniversitesi Mühendislik Fakültesi'nde kurulan yapay zekâ ve robotik laboratuvarı, yeni akademik yılla birlikte öğrencilerin kullanımına açıldı. Laboratuvarda yüksek performanslı bilgisayarlar, robot kollar ve sensör setleri bulunuyor.",
      "Lisans öğrencileri, haftanın belirli günlerinde akademisyenler eşliğinde laboratuvarda proje geliştirebilecek. İlk dönemde tarım, deniz bilimleri ve sağlık alanlarındaki yapay zekâ uygulamalarına odaklanılacak.",
      "Laboratuvarın yerel girişimlerle de iş birliği yapması ve dönem sonunda öğrenci projelerinin sergileneceği bir etkinlik düzenlenmesi planlanıyor.",
    ],
  },
  {
    id: 22,
    title: "Aynalı Çarşı'da Restorasyon Tamamlandı",
    summary: "Kentin tarihi çarşılarından Aynalı Çarşı'da süren restorasyon çalışmaları tamamlandı. Dükkânlar yeniden kepenk açtı.",
    image: "/bazaar.png",
    category: "Yerel",
    yayin: "2026-09-28T12:05",
    icerik: [
      "Çanakkale'nin 19. yüzyıldan kalma tarihi Aynalı Çarşı'sında yaklaşık bir yıl süren restorasyon çalışmaları tamamlandı. Çalışmalar kapsamında çatı onarıldı, cephe süslemeleri aslına uygun şekilde yenilendi ve elektrik altyapısı baştan yapıldı.",
      "Restorasyon süresince kapalı kalan dükkânlar yeniden kepenk açtı. Çarşıda el yapımı seramikler, Çanakkale testileri, halı ve kilimler satılıyor.",
      "Esnaf, çarşının yenilenmesiyle birlikte özellikle yabancı turistlerin ilgisinin artmasını beklediklerini söylüyor.",
    ],
  },
  {
    id: 23,
    title: "Kaz Dağları'nda Kaybolan İki Yürüyüşçü Sağ Bulundu",
    summary: "Kaz Dağları'nda doğa yürüyüşü sırasında yolunu kaybeden iki kişi, jandarma ve AFAD ekiplerinin 6 saat süren çalışmasıyla bulundu.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600",
    category: "Asayiş",
    yayin: "2026-09-28T09:40",
    icerik: [
      "Bayramiç ilçesi sınırlarındaki Kaz Dağları'nda doğa yürüyüşü yapan iki kişi, havanın kararmasıyla yolunu kaybetti. Yürüyüşçülerden birinin yakınlarına ulaşarak yardım istemesi üzerine jandarma ve AFAD ekipleri bölgeye sevk edildi.",
      "Yaklaşık 6 saat süren arama çalışmalarının ardından iki yürüyüşçü, zirveye yakın bir bölgede üşümüş ancak sağlıklı halde bulundu. Ekiplerce dağdan indirilen yürüyüşçüler kontrol için hastaneye götürüldü.",
      "Yetkililer, sonbaharda dağda havanın hızla değişebildiğini hatırlatarak yürüyüş yapacakların rotalarını yakınlarıyla paylaşmalarını ve yanlarına yeterli ekipman almalarını istedi.",
    ],
  },
  {
    id: 24,
    title: "Bozcaada'da Sonbahar Yelken Kupası Heyecanı",
    summary: "Bozcaada açıklarında düzenlenen Sonbahar Yelken Kupası'nda 40 tekne iki gün boyunca kıyasıya mücadele etti.",
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&q=80&w=600",
    category: "Spor",
    yayin: "2026-09-27T18:20",
    icerik: [
      "Bozcaada açıklarında düzenlenen Sonbahar Yelken Kupası, 40 teknenin katılımıyla gerçekleştirildi. İki gün süren yarışlarda sporcular, adanın kuvvetli rüzgârlarında kıyasıya mücadele etti.",
      "Yarışları sahilden ve kaleden izleyen ada halkı ile turistler renkli görüntülere tanıklık etti. Dereceye giren ekiplere ödülleri, yarışların ardından Bozcaada Kalesi'nde düzenlenen törenle verildi.",
      "Organizasyon komitesi, yarışın gelecek yıl uluslararası takvime alınması için başvuru yapacaklarını açıkladı.",
    ],
  },
].map(hazirla);
