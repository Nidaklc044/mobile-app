import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './styles';
import Search from './components/search';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import HikayePage from './HikayePage';
import RomanPage from './RomanPage';
import OzetDetay from './OzetDetay';

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState('anasayfa');
  const [selectedOzet, setSelectedOzet] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    require('./image/bbkm.png'),
    require('./image/yasamak.png'),
    require('./image/yln.png'),
    require('./image/fare.png'),
  ];

  const otherImages = [
    { image: require('./image/calikusu.png'), name: 'Çalıkuşu', summary: 'Çalıkuşu Kitabı Konusu genel olarak, Feride ve Kamran arasında yaşanan aşk Konusu değinmektedir. Kısaca Çalıkuşu Kitabı Feride, Kamran karşısında hırçınlaşmış ve ondan nefret ettiğini dile getirmiş olsa da yaşadığı ömrü boyunca onu hep sevdiği Konusu vurgulanmıştır. Çalıkuşu Kitabı ihanet, gurur ve kıskançlık temaları romanda derinlemesine işlenmektedir. Çalıkuşu Kitabı, bu noktadan sonra Anadolu’nun çeşitli yerlerinde öğretmenlik yapmaya başlaması ile devam eder. Feride son derece idealist bir kızdır. Ancak güzelliği her zaman onun başına bela olmaktadır. Hakkında birçok farklı dedikodu çıkmaktadır. Zeyniler Köyü içerisinde yaşarken tanıştığı Doktor Hayrullah Bey ile Kuşadası’nda ikinci defa karşılaşır. Hayrullah Bey son derece babacan bir yapıya sahiptir. Feride’yi de kızı gibi korumaktadır. Ancak halkın çıkarttığı dedikodular ve ortaya attıkları onun “Çalıkuşu” Feride ile kağıt üzerinde evlenmesine sebep olur. Fakat aralarında her zaman bir baba ve kızı ilişkisi bulunmaktadır. Bu durumda hiçbir zaman bozulmamaktadır.' },
    { image: require('./image/suc.png'), name: 'Suç ve Ceza', summary: 'Suç ve Ceza, Rus yazar Fyodor Dostoyevski nin 1866 yılında yayımlanan ünlü romanıdır. Roman, St. Petersburg un fakir semtlerinde yaşayan ve yoksulluk içinde kıvranan Raskolnikov adlı genç bir adamın hikayesini anlatır. Raskolnikov, işlediği bir cinayetin ardından suçluluk duyguları ve vicdan azabıyla boğuşur. Roman, Raskolnikov un iç dünyasının derinliklerine inerken ahlaki değerler, suç ve ceza kavramları üzerine düşündürür.' },
    { image: require('./image/donusum.png'), name: 'Dönüşüm', summary: 'Dönüşüm, Franz Kafka tarafından yazılan kısa bir romandır. Roman, Gregor Samsa adlı bir adamın bir sabah uyandığında dev bir böceğe dönüşmesini konu alır. Dönüşüm, toplumun birey üzerindeki baskısı, yabancılaşma ve insanın kimliği üzerine derinlemesine bir analiz sunar.' },
    { image: require('./image/livaneli.png'), name: 'Serenad', summary: 'Serenad, Sabahattin Ali nin 1943 yılında yayımlanan romanıdır. İstanbul da bir otelde başlayan bir serenadın ardından gelişen olayları anlatır. Roman, aşk, tutku ve özgürlük arayışını ele alırken, karmaşık ilişkilerin ve insanın iç dünyasındaki çatışmaların derinliklerine iner.' },
    { image: require('./image/anna.png'), name: 'Anna Karenina', summary: 'Anna Karenina, Rus yazar Lev Tolstoy tarafından yazılan bir romandır. Roman, Anna Karenina adlı bir kadının evlilik dışı bir ilişki yaşaması sonucu yaşadığı trajediyi anlatır. Aynı zamanda, roman toplumun çeşitli kesimlerini, aristokrasiyi ve köylülüğü ele alır.' },
    { image: require('./image/bk.png'), name: 'Bilinmeyen Kavga', summary: 'Bilinmeyen Kavga, yazar Jack London tarafından kaleme alınan bir romandır. Roman, fakir bir balıkçının, toplumun zengin kesimiyle olan mücadelesini anlatır. Adalet, özgürlük ve eşitlik kavramları üzerine derinlemesine bir inceleme sunar.' },
    { image: require('./image/saat.png'), name: 'Saatleri Ayarlama \nEnstitüsü', summary: 'Saatleri Ayarlama Enstitüsü, Ahmet Hamdi Tanpınar tarafından yazılan bir romandır. Roman, İstanbul da yaşayan bir grup entelektüel insanın yaşamlarını, düşüncelerini ve duygularını ele alır. Toplumsal değişim, modernleşme ve kimlik arayışı temaları üzerine odaklanır.' },
    { image: require('./image/gece.png'), name: 'Olağanüstü \nBir Gece', summary: 'Olağanüstü Bir Gece, Stefan Zweig tarafından yazılan bir romandır. Roman, bir tren yolculuğunda karşılaşan iki yabancının yaşadıkları olağanüstü deneyimi anlatır. Karakterlerin iç dünyalarına ve insan ilişkilerine odaklanır.' },
  ];
  
  const additionalImages = [
    { 
      image: require('./image/mufettislermufettisi.png'), 
      name: 'Müfettişler Müfettişi', 
      summary: 'Müfettişler Müfettişi, yazar Orhan Pamuk tarafından kaleme alınan bir romandır. Roman, bir şehirde yaşayan ve bir cinayeti çözmeye çalışan müfettişin hikayesini anlatır. Müfettiş, kendi geçmişiyle ve kentteki sosyal ve politik sorunlarla da mücadele eder. Roman, toplumsal gerçeklikler ve bireyin iç dünyası arasındaki çatışmayı derinlemesine inceler.' 
    },
    { 
      image: require('./image/bilinmeyenbirkm.png'), 
      name: 'Bilinmeyen Bir \nKadının Mektubu', 
      summary: 'Bilinmeyen Bir Kadının Mektubu, Stefan Zweig tarafından yazılan kısa bir romandır. Roman, bir adamın, tanımadığı bir kadından aldığı mektupların etkisi altında kalışını anlatır. Mektuplar aracılığıyla kadının yaşamı ve duyguları ortaya çıkar ve okuyucuyu içine çeken bir hikaye oluşturur.' 
    },
    { 
      image: require('./image/dünya.png'), 
      name: 'Dünyanın \nMerkezine Yolculuk', 
      summary: 'Dünyanın Merkezine Yolculuk, Jules Verne tarafından yazılan bir macera romanıdır. Roman, Profesör Lidenbrock ve yeğeni Axel in, volkanik bir tünel aracılığıyla Dünya nın merkezine doğru gerçekleştirdikleri macerayı anlatır. Bu yolculuk sırasında karşılaştıkları zorluklar ve keşifler, okuyucuyu sürükleyici bir serüvenin içine sokar.' 
    },
    { 
      image: require('./image/icimizdekibiz.png'), 
      name: 'İçimizdeki Biz', 
      summary: 'İçimizdeki Biz, Sait Faik Abasıyanık tarafından kaleme alınan öykü kitabıdır. Kitap, insan ilişkilerini, duyguları ve yaşamın anlamını farklı hikayeler aracılığıyla ele alır. Yazarın sade ve etkileyici üslubuyla yazılmış olan öyküler, okuyucuya derin düşüncelere sevk eder.' 
    },
    { 
      image: require('./image/kosktekiesrar.png'), 
      name: 'Köşkteki Esrar', 
      summary: 'Köşkteki Esrar, Agatha Christie tarafından yazılan bir polisiye romandır. Roman, ünlü dedektif Hercule Poirot un, bir köşkte işlenen bir cinayeti çözmeye çalışmasını konu alır. Olayların gizemi, karakterler arasındaki ilişkiler ve sırlar, okuyucuyu gerilim dolu bir hikayenin içine çeker.' 
    },
  ];

  const handleImagePress = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOzetPress = (item) => {
    setSelectedOzet(item.summary);
    setSelectedImage(item.image);
    setCurrentPage('ozetDetay');
  };

  const handleBack = () => {
    setCurrentPage('anasayfa');
  };

  let pageContent;
  if (currentPage === 'anasayfa') {
    pageContent = (
      <ScrollView style={styles.leftPanel}>
        <View style={styles.imageContainer}>
          <ScrollView horizontal>
            <TouchableOpacity onPress={handleImagePress}>
              <Image source={images[currentImageIndex]} style={styles.image} />
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.otherImagesContainer}>
          <Text style={styles.mostRead}>En Çok Okunanlar</Text>
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
  } else if (currentPage === 'roman') {
    pageContent = <RomanPage />;
  } else if (currentPage === 'hikaye') {
    pageContent = <HikayePage />;
  } else if (currentPage === 'ozetDetay') {
    pageContent = <OzetDetay ozet={selectedOzet} image={selectedImage} handleBack={handleBack} />;
  }

  return (
    <View style={styles.container}>
      <Search />
      <Navbar handlePageChange={handlePageChange} />

      <View style={styles.mainContainer}>
        {pageContent}
        <Sidebar />
      </View>

      <View style={styles.footer}>
        <View style={styles.footerLinks}>
          <TouchableOpacity onPress={() => handlePageChange('anasayfa')} style={styles.footerLink}>
            <Text>Anasayfa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePageChange('roman')} style={styles.footerLink}>
            <Text>Roman</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePageChange('hikaye')} style={styles.footerLink}>
            <Text>Hikaye</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
