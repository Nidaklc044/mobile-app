import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './styles';
import OzetDetay from './OzetDetay';

const RomanPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedOzet, setSelectedOzet] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showOzet, setShowOzet] = useState(false);

  const images = [
    require('./image/dokuzuncu.png'),
    require('./image/bülbül.png'),
    require('./image/da.png'),
    require('./image/sf.png'),
  ];

  const otherImages = [
    { image: require('./image/yürekçökünt.png'), name: '  Yürek Çöküntüsü', summary: 'Ana karakter olan Friedrich’in kendisinden çok daha genç olan eşi Christine ile olan ilişkisininin merkezine alındığı bu kitapta Friedrich zengin, saygın bir avukattır ve Christine ile evliliği, onun yaşamındaki mutluluğun en büyük kaynağıdır. Christine, genç, güzel ve canlı bir kadındır, sosyal çevresi geniştir ve eğlenmeyi sever. Hikaye, Friedrich’in Christine ile birlikte katıldığı bir balo ile başlar. Friedrich, eşinin gençlik enerjisine ve çevresindeki insanlarla olan doğal etkileşimine hayran kalmıştır, fakat aynı zamanda onu kıskanmaktadır. Balo sırasında, Christine’nin bir genç adamla samimi bir şekilde dans ettiğini gören Friedrich, bu durumdan rahatsızlık duyarEve döndüklerinde, Friedrich’in kıskançlık hisleri daha da alevlenir. Christine’nin neşesini ve sosyal etkileşimlerini bir tehdit olarak görmeye başlar. Zamanla Friedrich, Christine’nin sadakatinden şüphe etmeye ve onu sürekli gözetlemeye başlar. Bu takıntılı davranışlar, onun ruh sağlığını derinden etkiler.' },
    { image: require('./image/Rüzgarı.png'), name: 'Rüzgarı Dizginleyen Çocuk', summary: 'Bryan Mealer tarafından yazılan “Rüzgarı Dizginleyen Çocuk”, Malawili bir genç olan William Kamkwamba’nın gerçek hayat hikayesini anlatır. Kitap, Afrika’nın Malawi ülkesindeki bir köyde yaşayan William’ın yaşam mücadelesini, buluşçuluk ruhunu ve yaratıcılığını konu alır.    ' },
    { image: require('./image/Meşrutiyet Kıraathanesi.png'), name: 'Meşrutiyet Kıraathanesi', summary: 'Rıfat Ilgaz’ın “Meşrutiyet Kıraathanesi” kitabı, Türk edebiyatının önemli eserlerinden biridir ve yazarın özgün üslubuyla dikkat çeker. Bu eserde, Meşrutiyet döneminin sosyal ve kültürel atmosferi içerisinde, bir kıraathanenin etrafında şekillenen hayatları ve karakterleri konu alır. Ilgaz, kıraathaneyi toplumun farklı kesimlerinden insanların bir araya geldiği, sosyal ve politik tartışmaların yapıldığı bir mekân olarak tasvir eder. Eser, dönemin toplumsal yapısını, insan ilişkilerini, siyasi çalkantıları ve kültürel değişimleri bir kıraathane perspektifinden ele alarak anlatır. Kitap, genellikle kısa hikayelerden oluşur ve her biri, kıraathanede sıkça rastlanan tiplemeleri, karakterleri ve onların hayat hikayelerini merkeze alarak anlatır. Yazar, bu karakterler aracılığıyla dönemin siyasi ve sosyal meselelerini, insanların günlük yaşam mücadelelerini, umutlarını, hayal kırıklıklarını ve mizah anlayışını işler. Ilgaz’ın sade ve akıcı dili, karakterlerin derinliği ve hikayelerin samimiyeti, okuyucuyu o dönemin atmosferine taşır.' },
    { image: require('./image/Taş Meclisi.png'), name: 'Taş Meclisi', summary: 'Diana, çocukluğunda yaşadığı korkunç bir olayın ardından yalnız bir hayat yaşamaya karar verir. 30 yaşını doldurduktan sonra anne olabilmek için evlat edinmeye başvuruyor.Evlat edindiği Lucian geçmişi bilinmeyen bir çocuktur. Anne-oğul birbirlerine alışmaya çalışırken bir trafik kazası geçirirler. Diana ise bu kazanın aslında cinayet olma ihtimalini değerlendiriyor. Taş Meclisi, “psikoloji”, “parapsikoloji”, “şamanizm” ve “telepati” ile ilgili ilginç ayrıntılar yer alır. Diane Thiberge, çocuk sahibi olmak isteyen genç ve bekar bir kadındır, ancak çocukluğunda cinsel organına yapılan saldırının ardından evlat edinmeye başvurur. Çocuk sahibi olmak için Vietnam’daki Ra-Nong Yetimhanesini seçer. Burada “Lucien” adında bir çocuğu evlat edinir. Bu çocuk sessizdir ve çok tuhaf davranışlar sergilemeye başlar. Lucien bir akşam annesi Sybille Thiberge’nin evinden dönerken çok ilginç ve beklenmedik bir kaza geçirir. Kazadan sonra üvey oğlu Lucien’in durumunun çok kötü olduğu anlaşılır. Lucien komadadır ve durumu o kadar ciddidir ki hayata dönmesi imkansızdır. Diane oğlunu görmek için hastane odasına gittiğinde oğlunu bekleyen bir adam görür. Tam çığlık atmak üzereyken garip bir güven duygusuyla bu adamdan hiçbir zarar gelemeyeceğini anlar. Adam çocuğuna “Akupunktur” uygular. Kadına kendisini Berlinli anestezi uzmanı olarak tanıtan bu adam aslında bir “akupunktur uzmanı”dır. Lucien’e iğneler batırır ve bir şekilde onu kısmen iyileştirmeyi başarır. Aniden odadan kaçan bu adamın gizemini çözmeye çalışan Diane için bu adamı araştırmak hayatında bir dönüm noktası olacaktır. Lucien’in telepatik güçlere sahip “Şaman” soyundan gelen bir çocuk olduğunu ve bu çocuğun dünyadaki tek “şaman” olduğunu öğrenmek Diane için nefes kesici ve tehlikeli bir maceranın kapılarını açar.' },
    { image: require('./image/Üç Silahşörler.png'), name: 'Üç Silahşörler', summary: 'Nisan 1625’te Meung kasabasındaki Şen Miller Hanı yakınlarında kavga çıkar. Kavganın nedeni, Gaskonyalı olduğu belli olan Dartanyan adında tuhaf görünüşlü bir gençtir. Bu genç, şövalye olmayı hayal eden ancak başarısız olan babasının kendisine verdiği tavsiye mektubu ve uzun bir kılıçla, uyuz bir atın sırtında Paris’e doğru yola çıkarak şehre gelir. Genç ve komik görünümüyle alay eden kasaba halkıyla kavga eder. Hancı ve adamları ona sopalarla saldırınca bayılır. Hancı ve Kardinal’in adamları, cebinde Kral’ın Muhafız Komutanı Treville’e yazılan mektubu bulur ve alır.  Genç adam uyanınca hanı terk eder. Paris’e varır ve babasının arkadaşı Mösyö de Treville’in karargâhını bulur. Ona başına gelenleri anlatır. Karargâhın avlusunda mektubu çalan adamı görür ve peşine düşer ama adamı yakalamak için koşarken iki kişiye vurur ve ardından üçüncü kişiyle mendil yüzünden tartışır. Her biri, haberi olmadan diğerini düelloya davet eder. Bu kişiler ünlü silahşörler Athos, Porthos ve Aramis’tir. Dartanyan, düello için her birine ayrı saatler verir. Athos, Aramis ve Porthos’u tanık olarak düello mekanına götürür. Düello başlamak üzereyken Kardinal’in adamları ortaya çıktığında, üç silahşörler savunma pozisyonu alır ve Dartanyan, Kardinal’in adamlarıyla birlikte onlarla savaşır. Kardinalin adamlarını birlikte mağlup eden Dartanyan, Üç Silahşörler ile arkadaş olur ve onlara katılır. Kardinal’in Kral ile Kraliçe’nin arasını bozmaya çalıştığını öğrenen Mösyö de Treville, onları kraliçenin mücevherlerini Buckingham Dükü’nden almaları için Londra’ya gönderir. Birmingham Dükü Kraliçe’ye aşıktır ve Kraliçe onunla gizlice buluşurken Kraliçe ona Kral’ın elmas hediyesini vermiştir. Olayı casusları sayesinde öğrenen Kardinal, krala bir balo vermesini ve kraliçeye elmas kolyeyi takmasını söyler. Dük’e verdiği için baloda kolyeyi takamayan kraliçeyi çok zor durumda bırakmayı planlar. Yolda karşılaştıkları maceralar sonucunda Üç Silahşörler Londra’ya gidemezler ancak Dartanyan, beraberindeki hizmetçisiyle birlikte Londra’ya ulaşır. Dük’ün mücevherlerini alıp Paris’e dönmeyi başarır. Balo gecesinde Kraliçe elmasları taktığında Kardinal’in oyunu mahvolur. Kralın emriyle Dartanyan ve Üç Silahşörler La Rochelle Kuşatmasına katılır. Bu seferde Birmingham Dükü’nü Miladi adlı bir kadının suikastından korumaya çalışırlar. Miladi yakalanıp esir alınır ancak babası gelip kızını kurtarır ve dükü öldürür. Dartanyan ve Üç Silahşörler, kraliçenin ortadan kaybolan hizmetkarı Madame Bonasiö’yü (Bonacieux) arar. D’artanyan’ın sevgilisi Bonasiyö’nün bir manastırda tutulduğunu öğrenirler ancak tesadüfen aynı manastırda bulunan Miladi onu öldürür. Sonunda Miladi’yi yakalayıp mahkemeye çıkarırlar. Kadının aslında hırsız olduğu ve geçmişte bir kontla evli olduğu ortaya çıkar. Kont onun hırsız olduğunu öğrenince asılmasını emretti ama kadın bir yolunu bulup kaçar. Kont adını Athos olarak değiştirir. Kadın idam edilir. Paris’e döndüklerinde kardinalin kişisel hizmetkarı Rochefort, Dartanyan’ı tutuklar. Miladi’nin idamıyla ilgili sorgulanır. Ancak yargılama sonunda teğmenliğe terfi eder. Savaş biter. La Rochelle şehri geri alındı. Silahşörlerin her biri kendi yoluna gider. Aramis ve hizmetkarı rahip olur. Porthos zengin sevgilisiyle evlenir. Bir süre Dartanyan’ın yanında şövalyeliğini sürdüren Athos, küçük bir miras alır ve hizmetkarıyla birlikte Paris’ten ayrılır.' },
    { image: require('./image/Aylak Adam.png'), name: 'Aylak Adam', summary: 'C. olarak anılan karakter,  Yusuf Atılgan’ın ünlü eseri Aylak Adam’ın merkezindedir. Küçük yaşta annesini kaybetmiş olan C., teyzesi tarafından büyütülmüş ve kayıp annesinin sevgisini aramıştır. Fiziksel ihtiyaçlarını karşılamak için kadınlarla ilişkiye girmiş ve aile mirasıyla geçinerek zamanını kahvehanelerde, restoranlarda ve kitap okuyarak geçirmiştir. Bir gün ressam arkadaşı Sadık’ın atölyesine giden C., ona model olmuştur. Ancak C., zor bir karaktere sahiptir ve resimdeki bir detaydan rahatsız olmuş, bu yüzden atölyeye gitmeyi bırakmıştır. Hayatında değişiklik yapmaya karar veren C., bir süre yazmaya başlamış ancak kısa sürede bu fikrinden vazgeçmiştir. Bahar aylarında pastanede gördüğü bir kıza aşık olan C., onun peşinden gitmiş ve Güler adında bir kızla ilişkiye başlamıştır. Ancak ikili, hayata farklı bakış açılarına sahip oldukları için ilişkilerini sonlandırmıştır. C., bir gün aylaklık yapar fakat Ayşe adında bir kızla karşılaşır ve ona karşı ilgi duymaya başlamıştır. Ancak iş arkadaşıyla birlikte iken gören C. Ayşe’yi aşırı kıskançlık nedeniyle terk etmiş ve kıza haksız yere yargıda bulunmuştur. Daha sonra sokaklarda dolaşırken bir kızla tanışmış ve etkilenmiştir, ancak aradığı şeyi bulamamış ve onu tekrar aramamıştır.Yaz aylarını İstanbul’da bir pansiyonda geçiren C., eski sevgilisi Ayşe’yle yeniden karşılaşmış ve ilişkilerine devam etmiştir. Başlangıçta ilişkileri güzel giderken, bir gece C.’nin ailesi hakkında konuşmasıyla Ayşe korkmuş ve onu terk etmiştir. C., yaşamında tatmin olmadığını hissetmiştir. Sonbahar aylarında evine dönen C., sol şakağında bir ağrı hisseder ve içki içerek bu sorunu unutmaya çalışır. Bir akşam pastaneden çıktığında eski arkadaşı Sadık’la karşılaşır ve birlikte içmeye başlarlar. Sohbet sırasında C.’nin baş ağrısı artar ve kendini sokağa atar. Eve gitmek üzere hazırlandığında bir tatlıcıya rastlayan C., orada oturur ve hayatının aşkını bulacağına inanır. Bir kızın dükkanın içine bakması, onun da kendisini fark ettiğini düşündürür ve onu takip etmeye karar verir. Ancak bir taksiciye çarptığı için saldırıya uğrar ve kızı kaçırır. Bundan sonra kimseye bu konuda bahsetmemeye karar verir çünkü kimse onu anlamayacaktır.' },
    { image: require('./image/Karamazov Kardeşler.png'), name: 'Karamazov Kardeşler', summary: 'Fyodor Pavlovich Karamazov, Skotoprigonyevsk kasabasından iki kez evlenmiş bir “eski aptal”dır ve Karamazov ailesinin patriği olarak üç yasal oğlu – Dmitri, Ivan ve Alexei’yi içerir. Fyodor ayrıca, “Çürük Lizaveta” olarak takma adıyla bilinen, temizlenmemiş bir dolaşıcı olan “Kutsal Aptal” ile kısa bir ilişkiden dolayı aşçısının ve “uşağı” Smerdyakov’un muhtemel babasıdır. Evlilik ve babalık Fyodor’un duyusal arzularını bastırmamıştır. Evinde sık sık orgiler düzenler, çoğu zaman sarhoş olur ve üç çocuğunu da unutur, onları hizmetçisi Grigory Vasilievich’in bakımına bırakır.' },
    { image: require('./image/Hayvan Çifliği.png'), name: 'Hayvan Çiftliği', summary: 'İngiltere’deki bir çiftlikte Bay Jones’ın hayvanlardan sorumlu olmasına rağmen çiftliği iyi yönetemez hale gelir ve çiftlikteki hayvanlar bu durumdan oldukça şikayetçidir. Koca Reis adındaki domuz bir rüya gördüğünü ve insanların yönetimi olmadan daha iyi bir şekilde yaşayacaklarını söyleyerek daha adaletli, daha eşit, daha iyi şartlarda yaşamlarının devam ettireceğini dile getir ve bunun üzerine fikrini söyledikten üç gün sonra ölür. Bay Jones’ta yem saatlerini artık tamamen unuttuğu için çiftlikteki hayvanlar tarafından düzensiz bir isyan başlatarak düzensiz ve plansız devrim çabuk biter. Bunun üzerine çiftlikte domuzlar yönetimi ele alır ve kendi dünyalarını yaratmaya başlar. Napeleon ve Snowball adlı domuzlar lider bir hale gelir.  Napeleon iri yarı, iyi konuşamayan fakat otorite sahibi; Snowball ise etkili konuşan ve zeki bir domuzdur. Koca Reis’in rüyası ve fikrine istinaden yedi emir ismiyle emir çıkarırlar ve tüm hayvanlarda bunu kabul eder. Ancak iki lider domuz birbirini çekememesi üzerine tek lider olmak için birbirleri için plan yapmaya başlarlar. Snowball elektrik üretimi için yel değirmeni yapılmasını teklif eder, fakat Napoleon’un köpekleri tarafından çiftlikten sürülür. Ancak yel değirmeni yapma çalışması devam eder.  Napeleon başta savunmadığı  yel değirmeni yapmak düşüncesinin kendisine ait olduğunu Snowball’u çiftlikten göndermek için böyle söylediğini iddia ederek hayvanları inandırmaya başlar. Bu durum çiftliği devrimden uzaklaştırarak, domuzlar kilo almasına neden olur. Yataklarında yatmaya devam ederken diğer hayvanlara vaat edilen çok yem, az çalışma saati fikri ise tam tersine dönerek diğer hayvanlar çok çalışıp az yem yemeye ve açlıktan ölmeye başlamışlardır. Buna benzer bir çok olay ve yasa ,kararlar ve yasaklar ilan edilirken bir gün çiftliğe yabancı hayvanlar saldırır. Yel değirmenine zarar verirler. Çiftlikteki bütün hayvanlar yaralanır ve hatta bazıları ölür. Bir tüfek sesi duyuluyor, yaralı bir hayvan yanındaki bir domuza: “Neden tüfek atılıyor” diye sorar. Domuz, “Zaferimizi kutlamak için. “der. Yaralı hayvan, “Hangi zafer” diye sorar şaşkınlık içerisinde ,Domuz, ” düşmanı topraklarımızdan kovduk” der. Yaralı hayvan emek vererek iki yılda yaptıkları değirmeni yok ettiklerini söyler , domuz ise yine yapabileceklerini söyler ve kendine madalya takıp zafer kutlaması yapıp diğer hayvanları da buna inandırır.Çiftlik ilkelerinin yazılı olduğu duvarda , yasalar değişmiştir. Domuzları el üstünde tutan ilkelere karşı, çiftlikteki hayvanlar  “Bütün hayvanlar eşittir.” ilkesini hatırlayıp, “Bu nasıl eşitlik?” diye kendi kendilerine söylenmeye başlar. Duvardaki yazılar yine değişir ve “Bütün hayvanlar eşittir, fakat bazı hayvanlar ötekilerden daha fazla eşittir.”' },
  ];

  const additionalImages = [
    { image: require('./image/Fareler Ve İnsanlar.png'), name: 'Fareler ve İnsanlar', summary: 'George ve Lennie, Amerika’ da yaşayan, çiftliklerde yaşayan toprak işçileridir. bu kişiler kendilerini diğer toprak işçilerinden farklı görürler. Çünkü işçiler kazandıkları parayı ya kumar oynayarak ya da genelevde harcamaktadır. Onların hayalleri vardır. Ve bu hayaller için biriktirdikleri para ile bir çiftlik satın alacaklarının hayalini kurmaktalar. Bu çiftlikte çeşitli hayvanlar besleyecekler ve tarımla uğraşmayı planlarlar. Şimdiye kadar gittikleri bütün çiftliklerde Lennie yüzünden kovulmuşlardır. Lennie uzun boylu, iri, güçlü bir insandır ama kafası fazla çalışmaz ve tek başına hareket etmeyen, devamlı birilerine muhtaç olan bir karakterdir. Bunun yanında sevdiği şeylere dokunma hastalığı vardır. George ve Lennie, arkadaşlarının tavsiyesi üzerine başka bir çiftlikte çalışmak için yola çıkarlar. Yol da Lennie bir fare bulur ve onu eliyle okşamaya başlar. Okşarken de fareyi sıkıca okşadığı için öldürür. George, farenin kendisine faydası olmadığını ve onu atması gerektiğini söyler. Ama Lennie ona zara vermediğini sadece okşadığını söyler. Sonra onu zorla yolda bırakır. Lennie’ nin bu davranışı ileri zamanlarda ikisine de zarar verecektir.' },
    { image: require('./image/Gurur ve Önyargı.png'), name: 'Gurur ve Önyargı', summary: '“Benim gururumu çiğnemeseydi onun kibrini kolaylıkla hoş görebilirdim!”  Varlıklı bir beyefendi olan Charles Bingley’nin Netherfield Park malikânesine yerleşmesi, civar hanelerde büyük bir heyecana neden olur. Evlenmemiş beş genç kızı olan Bay ve Bayan Bennet da aynı heyecan ve içlerinde yeşeren bir umutla, Charles Bingley şerefine bir balo verirler. Bay Bingley, evin en büyük ve en güzel kızı Jane’e gönlünü kaptırmıştır. Ancak baloda biri daha vardır ki görünürdeki kibri ve mesafeli duruşuyla dikkatleri çeker. Bu kişi, Bingley’nin yakın arkadaşı Bay Darcy’den başkası değildir. Baloda Bay Darcy’nin, ailenin en canlı ve cüretkâr kızı Elizabeth’le tanışıklığı, genç kız hakkında yaptığı nahoş bir yorum ve onunla dansa kalkmayı reddedişiyle başlamıştır.' },
    { image: require('./image/dünya.png'), name: 'Dünyanın Merkezine Yolculuk', summary: 'Dünyanın Merkezine Yolculuk özeti' },
    { image: require('./image/yedinci gü.png'), name: 'Yedinci Gün', summary: 'Ömer, kendini genç ve güçlü hisseden kırk üç yaşında bir adamdır. Bir bankada genel müdür olarak çalışıyor. Rezzan adında akraba olmayan bir eşi, Işık adında bir oğlu ve Sevgi adında bir kızı vardır. Ömer, kızının âşıklarını bilmesine rağmen bu duruma sessiz kalır. Annesi çocuklarına ilgi göstermediği için bu durumlardan habersizdir. Rezzan sabahları kahvaltıya inmiyor. Kahvaltıyı hep Fatma adında bir hizmetçi hazırlar. O gün her şeyden habersiz işe giden Ömer, iş yerinde talihsiz bir olay yaşayacaktır. İşe geldiğinde müsteşar onu arar ve belgelerle ilgili sorular sorar. Ömer bir an kendisine yapılan delice hakareti kabul edemez ve müsteşara yumruk atar. Yumruk yedikten sonra panikler ve ani bir karar verir. Bu kararla Ankara’dan İstanbul’a tek yön bilet alır. Hatta bu olayla Ömer’in yıllardır biriktirdiği yorgunluğun yerini cesaret alır. Ailesinden ayrılan Ömer, işten kovulmanın stresiyle uçağa atlar ve İstanbul’a gider.' },
    { image: require('./image/kayıp sembol.png'), name: 'Kayıp Sembol', summary: 'Roman, Robert Langdon’ın yakın arkadaşı Peter Solomon tarafından bir konferans vermek üzere ABD Capitol’üne çağrılmasıyla başlıyor. Ancak Robert Langdon Capitol’e gittiğinde oyuna geldiğini fark ediyor. Arkadaşı Peter’ın binanın koridorunun ortasında bulunan kopmuş eli ile Robert’ın, Peter’ı kurtarmak için Masonlar tarafından saklandığı söylenen Antik Gizemleri ortaya çıkarması bekleniyor. Ancak Robert neler olup bittiğini anlamaya çalışırken, CIA devreye girer ve Robert, CIA direktörü Inoue Sato’nun da Capitol’e gelmesiyle durumun ciddiyetini anlamaya başlar.Robert, Sato ve Trent Anderson, Capitol Güvenlik Şefi; Peter’ın elini incelediklerinde üzerinde birçok dövme ve kod bulurlar. Bu semboller ve kodlar onları Peter’ın Capitol’ün altında bulunan ofisine götürür. Burada Robert, Sato ve Anderson, Masonik Piramit olarak bilinen ve Kadim Gizemlere giden yolu işaretleyen bir piramit bulurlar. Bu sırada Robert’tan şüphelenen Sato, bu piramidin kapak taşının Robert’ın çantasında olduğu haberini alır. Sato daha sonra Anderson’a Robert’ı tutuklamasını emreder. Robert, çantasında bulunan kapak taşından habersiz olduğunu açıklamaya çalışırken, Capitol Binası’nın Mimarı ve Peter’ın yakın bir mason arkadaşı olan Warren Bellamy, Sato ve Anderson’a saldırır, onları bayıltır ve Robert’ı orada bulunan bir kütüphaneye götürür.' },
  ];

// Resim containerlarını seç
const imageContainers = document.querySelectorAll('.image-container');

// Her bir container için işlem yap
imageContainers.forEach(container => {
  // Resmin adını al
  const imageName = container.querySelector('img').getAttribute('src');
  
  // Resmin özetini al
  const summary = imageSummaries[imageName];
  
  // Özet elementini oluştur
  const summaryElement = document.createElement('div');
  summaryElement.classList.add('summary');
  summaryElement.textContent = summary;
  
  // Container'a özeti ekle
  container.appendChild(summaryElement);
});
  const handleImagePress = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handleOzetPress = (item) => {
    setSelectedOzet(item.summary);
    setSelectedImage(item.image);
    setShowOzet(true); // Özet gösterildiğinde set etmek için
  };

  const handleBack = () => {
    setShowOzet(false); // Geri butonuna basıldığında özeti gizlemek için
  };

  if (showOzet) {
    return (
      <OzetDetay ozet={selectedOzet} image={selectedImage} handleBack={handleBack} />
    );
  }

  
  return (
    <ScrollView style={styles.leftPanel}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={images[currentImageIndex]} style={styles.image} />
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.otherImagesContainer}>
        <Text style={styles.mostRead}>En Çok Okunan Hikayeler</Text>
        <ScrollView horizontal>
          {otherImages.map((item, index) => (
            <TouchableOpacity key={index} style={styles.otherImageContainer} onPress={() => handleOzetPress(item)}>
              <Image source={item.image} style={styles.otherImage} resizeMode="cover" />
              <Text style={styles.subText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <ScrollView style={styles.additionalImagesContainer}>
        {additionalImages.map((item, index) => (
          <View key={index} style={styles.additionalImageContainer}>
            <Image source={item.image} style={styles.additionalImage} resizeMode="cover" />
            <Text style={styles.additionalText}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default RomanPage;
