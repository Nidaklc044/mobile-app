import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './styles';
import OzetDetay from './OzetDetay';

const HikayePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedOzet, setSelectedOzet] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showOzet, setShowOzet] = useState(false);

  const images = [
    require('./image/r.png'),
    require('./image/ht.png'),
    require('./image/ka.png'),
    require('./image/ç.png'),
  ];
  
  const otherImages = [
    { image: require('./image/ay ışığı.png'), name: 'Ay Işığı Sokağı', summary: 'Anlatıcı, bir Fransız limanına inen genç bir Alman. Gemi geç bir saatte yanaştığı için Almanya’ya giden treni kaçırır. Bu yüzden kendisine yabancı olan bir şehirde bir gece geçirmek zorundadır. Geceleri küçük şehrin sokaklarında yürürken, o şarkı bir kadını duyar Weber ‘in Der Freischütz. Bir Fransız şehrinde anadilini duymak gencin ilgisini çeker ve kaynağı bulmak için sesi takip eder. Sonunda aradığını bulur: Ses, bara benzer küçük bir genelevden gelir. İçeri girmeye çalıştığında, aniden içeriye bakan garip bir adam görür. Adam onu ​​görür görmez kaçar. Anlatıcı içeri girer ve masalardan birine oturur. Gece yarısı ve bardaki tek misafir o. Etli, bitkin bir fahişe yanına gelir ve Alman aksanıyla alkol sipariş eder. Genç adam, barın boğucu ortamından ve umursamaz, yorgun fahişeden rahatsızdır – ayrılmaya karar verir. Ama bir anda fahişe canlanır ve kapıya bakarak kahkahalara boğulur – kaçan adam yine oradadır. Fahişe, adamı küçük düşürür ve anlatıcıya sokularak onu kıskandırmaya çalışır. Anlatıcı adam için üzülür ve fahişenin acımasızlığına dayanamaz ve bu nedenle ayrılmaya karar verir. Ay ışığında labirent gibi sokaklarda yürürken ve otelini bulmaya çalışırken aniden bir adamın yardım teklif ettiğini duyar – bu bardaki adamdır. Anlatıcının oteline birlikte yürürken, garip adam hızla konuşmaya başlar. Fahişenin karısı olduğunu ve bencilliği nedeniyle onu terk ettiğini ve tüm servetini onun peşinden koşarak harcadığını söylüyor. Adam, anlatıcıdan karısına geri dönmesi için onunla konuşmasını ister. Anlatıcı şaşırır ve hiçbir isteğine cevap vermez. Hayatta o gün aldığı bıçaktan bahsediyor. Ertesi gün, anlatıcı barı bulmaya çalışır, ancak sokaklar gün ışığında ona oldukça yabancı gelir. Ama ay ışığında otelinden gece trenine giderken birden barın girdiği sokağı fark eder. Adam yine barın önündedir. Adam anlatıcıyı gördüğünde, ona işaret eder. Bu durum anlatıcıyı endişelendiriyor ve gece trenini kaçırmak üzere olduğu için bardan ve ara sokaktan cıvıl cıvıl çıkar. Son anda, adam elinde gümüşi bir şeyle kararlı bir şekilde bara girerken anlatıcı tereddüt ed' },
    { image: require('./image/kerem ile aslı.png'), name: 'Kerem ile Aslı', summary: 'Bir zamanlar yaşlı bir İsfahan Sultanı, miras bırakacak evladı olmadığı için üzülür. Padişahın Rahip diye hitap ettikleri bir yardımcısı vardır. Rahibin padişah için diktirdiği bir elma ağacı vardır ve padişah yılında herkesi kıskandıracak yakışıklı bir oğlu doğar. Bu çocuğa yiğitliği nedeniyle Kerem denir. Rahibin bir de Aslı adında güzeller güzeli bir kızı vardır. Bu iki genç çocukluklarını birlikte geçirirler. Kerem’in Sofu adında bir arkadaşı vardır. Kerem, bir gün Sofu ile gezerken Aslı ile karşılaşır. Kerem’in dili tutulmuştur ve bir daha konuşamaz. Bir süre sonra Aslı ortadan kaybolur. Kerem, Aslı’yı bulmak için yola çıkar. Yolda karşısına çıkan herkese Aslı’yı sorar. Yolda tanıştığı kızları Aslı’ya benzetir. Bir gün Sofu, Kerem’e gelir. Kerem’e Aslı’nın başkasıyla evleneceğini söyler. Kerem bunu duyar duymaz Aslı’nın evine gider.Aslı ve Kerem o gece evlenir. Rahip, düğün sırasında Kerem’e büyü yapar ve düğünden sonra Kerem ve Aslı yorgun argın evlerine dönerler. Kerem paltoyu çıkarmak için düğmelerini açar ama düğmeler tekrar iliklenir. Daha sonra Kerem birkaç kez cübbeyi çıkarmaya çalışır ama çıkaramaz. Artık daraldığı için yorgunluktan bir ‘oh’ çeken Kerem, ağzından çıkan ateşle yanmaya başlar. Aslı, Kerem’i söndürmesi için ona su verir ama bu sefer ateş daha da güçlenir. Birkaç dakika içinde Kerem yanmaktan küle dönüşür. Aslı kederinden çığlıklar atarken Kerem’in küllerine değen saçları tutuşur ve o da yanarak ölür.' },
    { image: require('./image/Tarla Kuşunun Sesi.png'), name: 'Tarla Kuşunun Sesi*', summary: 'Molla Murat, dağlarda büyümüş, okuma yazma bilmeyen bir gençtir. Molla Murat Bursa’ya gider. Etrafında binlerce takipçi toplanır. Kısa sürede ünü İstanbul’a kadar ulaşır. Abdülhamit bile onu bilir. Abdülhamit kuruntulu bir padişah olduğu için onu araştırır ve bir şey çıkmaz. Molla Murat daha sonra padişahın kendisini soruşturduğunu inkâr eder. Molla Murat, Saliha’ya âşık olur. Saliha da ona âşıktır. Evlenirler ama çocukları olmaz. Bey’in kızı göçebe hayatına alışmakta zorlanır. Molla Murat, çocukları olmadığı için göçebe kızı Gülhanım ile evlenir ve yeni gelin Gülhanım’ı bütün aile sever. Göçebe bir lider olan Murat, büyümek ve bir beylik kurmak istemektedir. Bunun için de kaynağın bulunduğu bir bölgeyi devletten satın alır. Bu bölgede Çamaltı adında bir değirmen kurar. Değirmen kurulduğunda işletmesi açılır ve yanındaki çalışan sayısı giderek artar. Daha sonra himayesine aldığı Babo’yu işlerin başına koyar.' },
    { image: require('./image/Dede Korkut Hikayeleri.png'), name: 'Dede Korkut Hikayeleri', summary: 'Türk edebiyatının ilk ürünlerinden biri olan Dede Korkut Hikâyeleri, Türk boylarının Kafkaslar ve Azerbaycan bölgelerindeki iskânlarını, yurt kurma çabalarını ve akınlarını konu alır. Oğuz boylarının çeşitli kahramanlık hikâyeleri, akıncıların örf ve adetleri anlatılır.' },
    { image: require('./image/tb.png'), name: 'Oğlumuz – Yarın Diye Bir Şey Yoktur', summary: 'Hikâyenin kahramanı yirmi üç yaşında yatılı bir tıp öğrencisidir. Sık sık Fatih yakınlarında yaşayan uzak bir akrabayı ziyarete giden bu öğrenci, akrabasının on altı ve on yedi yaşındaki kızı İclâl ile ilgilenir. İclâl, iri yeşil gözlü, kahverengi saçlı, çok cana yakın ve sevecen bir kızdır. Bir gün tıp öğrencisi ve İclâl birbirlerine ne kadar şanssız olduklarını anlatırken, İclâl’in annesi söze girer ve bu kadar şanssız olamayacaklarını, ortak bir piyango bileti alıp denemelerini söyler. Bir hafta sonra yılbaşı. İclâl hemen odasına çıkar, bir on lira getirir tıp öğrencisine verir. Hikâyenin kahramanı parayı alır ve cebine koyar. Görevi bu paraya bir on lira daha ekleyip bir piyango bileti almaktır. Ancak cebinde parası yoktur. Bir âşığın resmi gibi olan on liraya uzun uzun bakar. Sonra yarım bilet almayı düşünür. Bunu da yapamaz çünkü borcu var ve paraya ihtiyacı var. Bunun üzerine parayı harcamaya ve biletin amorti olduğunu söyleyerek İclâl’in on lirasını geri vermeye karar verir. Böylece İclâl’den borç almış gibi olur.Elbette bu planı başarıyla gerçekleştirmek için yılbaşına kadar İclâl’e gitmeyecektir. Hatta bir gün bir arkadaşıyla Beyazıt’ta havuz başında otururken İclâl ve annesi yiğidi görürler, neden uzun zamandır gelmediğini sorarlar ve onu akşam için eve davet ederler. İclâl hemen piyango biletinin numarasını sorar. Tıp öğrencisi hemen aklına bir numara kurar: 087956. İclâl hemen bir kâğıda yazar. Akşam radyoda İclâl ile kura sonucunu bekleyen tıp öğrencisinin içine kurt düşer: Ya kura bu rakamı kazanırsa? Rakam da öyle güzel, öyle ahenkli ki… Daha sonra bu rakamla kuranın kazanacağına canı gönülden inanıyor ve numarayı değiştirmek ister. Örneğin; Bu sayının sonuna on üç gelseydi çok iyi olurdu. Numarayı yanlış yazdığını İclâl’e söyler ama İclâl buna kanmaz. Tıp öğrencisi de konuyu bulandırmaz; yoksa İclâl piyango biletini görmek isteyebilir. Vakti gelince radyonun başına otururlar. Spiker rakamları alçak sesle okur ve her numaradan sonra uzun uzun konuşur. Tıp öğrencisinin yüreği burkuluyor çünkü söylediği rakamlar bir bir çıkar. İclâl, hep istediği üç odalı, mutfaklı, doğalgazlı ve bahçeli bir ev hayal eder. Tıp öğrencisi gerçeği biliyor ve İclâl’in yüzüne haykırmak istiyor. Kuranın son rakamı 0’dan farklı bir rakam çıkınca İclâl ve anne babasının hayalleri yıkılır. Tıp öğrencisi ise içten içe bu duruma sevinir. İclâl’e talih, kader, çok çalışma ve hak etme konusunda uzun nasihatler verir. Zamanla sadece İclâl değil, tıpkı hikâyenin kahramanı gibi annesi ve babası da bu teselli ve nasihatlerin bal gibi bir aşk ilanı olduğunu anlayacaktır.' },
    { image: require('./image/us.png'), name: 'Uzun Sürmüş Bir Günün Akşamı', summary: 'Kitapta üç hikâye var. Birinci öykü olan Ada’da Adronikos’un adaya kaçışı anlatılır. Ada adlı öyküde “kaçma” eylemi öne çıkar. Dutlar’da isimsiz bir anlatıcı ile piyano öğretmeni Guila’nın hikâyesi var.' },
    { image: require('./image/mm.png'), name: 'Menekşeli Mektup', summary: 'Hiç ummadığı yerden uzanan bir el onu memleketine geri getirir. Kutlu, burada ülkemiz insanının tükenmez şefkatini ve cömertliğini anlatılır. Kitap, postacının eşine duyduğu sevgi ve İncila Hanıma duyduğu derin hayranlığı konu ediniyor. ' },
    { image: require('./image/mş.png'), name: 'Otlakçı', summary: 'Adını kitaptan alan Otlakçı adlı hikâyede, sigara parasını ödemeyi uygun bulmayan, hatta aptal olduğunu düşünen bir adamın, tiryakilerin tütün tabakasından tütün çaldığı anlatılır.' },
  ];

  const additionalImages = [
    { image: require('./image/mşe.png'), name: 'Mendil Altında', summary: 'Birbirinden güçlü 25 öyküden oluşan ‘Mendil Altında’, insanımızın bireysel ve toplumsal portresini olağanüstü bir derinlikte çizerken, hiç kuşkusuz yaşamın kalıcı güzelliklerini, ölümsüz değerlerini kapsıyor, damıtıyor ve görkemli bir öz halinde okura sunuyor.Her sayfasında ince bir duyarlığın burcu burcu estiği, Türk hikâyeciliğinin anıtlarından biridir ‘Mendil Altında’.' },
    { image: require('./image/ömer.png'), name: 'Ömer Seyfettin Hikayeleri', summary: 'Ömer Seyfettin Hikayelerin’de Annesi, İstanbul’a gitmiş olmasından dolayı, kendisinden bir yaş küçük olan kardeşi Hasan, artık Dadaruh’un yanından hiç ayrılmaz. Dadaruh ve babasının seyisi olan yaşlı adam, en sevdikleri şeyin atlardan oluştuğu bir dostluk ve etkileşim içindedirler. Atları suya götürmek, çıplak sırtlarına binmek gibi etkinlikler onlar için keyifli anlardır. Torbalara arpa koymak, yemliklere ot doldurmak ve gübreleri kaldırmak gibi işler, sadece eğlenceli bir oyun değil, aynı zamanda birlikte geçirdikleri hoş vakitlerdir.  Dadaruh eline kaşağıyı alıp işe başladığında, tıkı… tık… tıkı… tık… tıpkı bir saat gibi ritmik bir hareketle çalışır. Bu manzara karşısında gözleri parlayan küçük çocuk, heyecanla “Ben de yapacağım!” diyerek bu işe katılmak istediğini belirtir. O zaman Dadaruh, küçük çocuğu alır ve onu Tosun’un sırtına koyar. Eline de kaşağıyı verir.İşte gel, dedi Dadaruh. Hayvanın sırtına demiri sürttü, ama bir türlü o güzel tıkırtıyı çıkaramadı. Her sabah ahıra gelen küçük çocuk, tımar işini kendisinin yapmak istediğini söylediğinde Dadaruh izin vermedi. At kadar boyu olmadıkça bu işi yapamayacağını söyledi. Oysa bu, çocuğun en sevdiği şeydi. Kaşağının düzenli tıkırtısı, atların hoşuna gidiyor gibi görünüyor, kulaklarını kıvırıyor, kuyruklarını sallıyorlardı. Tımarın sonuna yaklaşıldığında huysuzlanıyor, Dadaruh tokat atıyordu, sonra diğer atları tımarlamaya başlıyordu. Bir gün yalnız kaldığında annesinin gönderdiği güzel bir  kaşağı buldu. Hemen alıp, Tosun’un yanına koştu, ancak at rahat durmuyordu. “Sanırım acıtıyor,” diye düşündü. Gümüş gibi parlayan kaşağının sivri dişlerine baktı. Biraz köreltmek için duvarın taşlarına sürtmeye başladı. Ancak bu çabası başarısız oldu. Atlar durmuyor, hatta kızıyordu. Öfkesini kaşağıdan çıkarmak istedi. Hemen çeşmeye koştu, kaşağıyı yalağın taşına koyup üzerine ağır bir taş bularak hızla indirmeye başladı. İstanbul’dan gelen güzel  kaşağı, Dadaruh’un kullanmaya kıyamadığı bu araç, kırılıp parçalandı. Sonra parçaları yalağın içine atıldı. Babası, çeşmeye bakarken kırılmış kaşağıyı gördü ve Dadaruh’u yanına çağırdı. Dadaruh şaşkın bir şekilde baktı, çocuk kaşağıyı kardeşi Hasan’ın kırdığını söyledi. Babası, Hasan’ı çağırdı.  “Niye kırdın bunu?” diye sordu. Hasan şaşkın bir şekilde Dadaruh’un elindeki alete baktı, başını sallayarak “Ben kırmadım” dedi. Baba öfkelendi, üzerine yürüdü, “Utanmaz yalancı!” diye haykırdı ve yüzüne bir tokat indirdi. “Götür bunu eve; bir daha buraya sokma. Hep Pervin’le otursun!” diye ekledi.Artık ahırda hep yalnız oynayan Hasan, eve hapsedildi. Annesi geldikten sonra da bağışlanmadı. Annesi, onun iftira atabileceğine inanmıyordu. Ertesi yıl yazın, anne tekrar İstanbul’a gitti. Hasan’a ahır hâlâ yasaktı. Bir gün hastalandı ve doktor “Kuşpalazı” dedi. Babası yatağın başında hiç ayrılmadı. Hizmetçi kardeşi öleceğini söyledi ve çocuk ağlamaya başladı. Gece uyuyamadı, uyuyakaldığında Hasan’ın hayali gözlerinin önüne geldi. “İftiracı! İftiracı!” diye ağladı karşısında. Pervin’i uyandırdı, Hasan’ın yanına gitmek istediğini ve babasına bir şey söylemek istediğini söyledi. Ancak artık Hasan hayatta değildi.”' },
    { image: require('./image/kd.png'), name: 'Kelile ve Dimne ', summary: 'Kelile ve Dimne, hayvan masallarının kolayca sindirilebilir bir biçimde büyük pratik bilgelikleri gizleyen bir formunda kaleme alınmıştır. Altı ay sonra prensler bilgeliğe doğru yol almaya başlar ve sonrasında adaletle hüküm sürerler. İki yüz yıl sonra, Pers şahı kişisel doktoru Burzoe’yi ebedi yaşam sağladığı söylenen belirli bir otu bulması için Hindistan’a gönderir. Burzoe yerine Panchatantra’nın bir kopyasını getirir ve bunun okuyana büyük bir bilgelik verdiğini iddia eder. Şah, kitabı Eski Farsça olarak adlandırılan Pehlavi diline çevirtir ve çok beğenir. Çeviriyi sarayının özel bir odasında korur.  Üç yüz yıl sonra, Pers ve Yakın Doğu’nun Müslüman fetihinden sonra, İslam’a dönen bir Pers olan Ibn al-Mukaffa’, Burzoe’nin Pehlavi versiyonunu bulur ve Arapça’ya o kadar akıcı bir şekilde çevirir ki hala Arapça düz yazı örneği olarak kabul edilir. İki baş karakter olan  Kalila ve Dimna adıyla anılan kitap, başta memurların eğitimi için yazılmıştır. Ancak o kadar eğlencelidir ki tüm sınıflar arasında popüler olmuş, Müslüman dünyasının folkloruna girmiş ve Araplar tarafından İspanya’ya taşınmıştır. Orada 13. yüzyılda Eski İspanyolcaya çevrilmiştir. İtalya’da matbaanın icadından sonra ortaya çıkan ilk kitaplardan biridir. Sonrasında Yunanca’ya ve o versiyondan Latince, Eski Kilise Slavcası, Almanca ve diğer dillere çevrilmiştir. Arapça versiyonu Etiyopya, Süryanice, Farsça, Türkçe, Malayca, Cava dili, Lao dili ve Siam dili gibi dillere çevrilmiştir. 19. yüzyılda Hindustani’ye çevrilerek, 1,700 yıl önce Keşmir’de başlayan döngü tamamlanmıştır.' },
    { image: require('./image//rhk.png'), name: 'Gurbet Hikayeleri ', summary: 'Gurbet Hikayeleri’nde yer alan 14 hikâye, yazarın yurt dışında geçirdiği senelerde kaleme aldıkları (Zincir, Güneş, Akrep, Çıban, Keklik, Hülle) ve İstiklal Mahkemelerinde mahkum olanlar hakkında çıkarılan genel afla ülkesine döndükten sonra gurbete ait hatıralarını değerlendirerek İstanbul’da yazdıkları (Yara, Eskici, Antikacı, Testi, Fener, Gözyaşı, Köpek, Kaçak) olarak iki gruba ayrılabilir. Gurbet Hikayeleri, vatan özlemi, savaş, taşra ve kadın temaları etrafında oluşturulmuş olan hikayelerdir.' },
    { image: require('./image/sfa.png'), name: 'Sait Faik Abasıyanık Hikayelerinden Seçmeler', summary: 'Kitapta yer alan ünlü hikayeleri:  Bohça, Stelyanos Hrisopulos Gemisi, Havuz Başı, Diş ve Diş Ağrısı Nedir Bilmeyen Adam, Ben Ne Yapayım?, Zemberek, Serseri Çocukla Köpek, Kraliçenin Evinde, Dülger Balığının Ölümü, Çamaşır İpleri ve Don Gömlek Hayaletleri, Jimnastik Yapan Adam, Fındık, Uzun Ömer, Bir İlkbahar Hikayesi, Eftalikus’un KahvesiSinağrit Baba, Son Kuşlar, Sivriada Geceleri, Haritada Bir Nokta, Hişt, Hişt!, Açık Hava Oteli.' },
  ];
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
              <View style={styles.additionalTextContainer}>
                <Text style={styles.additionalName}>{item.name}</Text>
                <Text style={styles.additionalSummary}>{item.summary.slice(0, 100)}</Text>
                <TouchableOpacity onPress={() => handleOzetPress(item)}>
                  <Text style={{ color: 'blue', marginTop: 5 }}>Devamını Oku</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
    </ScrollView>
  );
};

export default HikayePage;
