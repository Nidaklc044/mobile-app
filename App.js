// App.js

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
    // otherImages tanımı buraya gelecek
    { image: require('./image/calikusu.png'), name: 'Çalıkuşu', summary: 'alıkuşu Kitabı Konusu genel olarak, Feride ve Kamran arasında yaşanan aşk Konusu değinmektedir. Kısaca Çalıkuşu Kitabı Feride, Kamran karşısında hırçınlaşmış ve ondan nefret ettiğini dile getirmiş olsa da yaşadığı ömrü boyunca onu hep sevdiği Konusu vurgulanmıştır. Çalıkuşu Kitabı ihanet, gurur ve kıskançlık temaları romanda derinlemesine işlenmektedir. Çalıkuşu Kitabı, bu noktadan sonra Anadolu’nun çeşitli yerlerinde öğretmenlik yapmaya başlaması ile devam eder. Feride son derece idealist bir kızdır. Ancak güzelliği her zaman onun başına bela olmaktadır. Hakkında birçok farklı dedikodu çıkmaktadır. Zeyniler Köyü içerisinde yaşarken tanıştığı Doktor Hayrullah Bey ile Kuşadası’nda ikinci defa karşılaşır. Hayrullah Bey son derece babacan bir yapıya sahiptir. Feride’yi de kızı gibi korumaktadır. Ancak halkın çıkarttığı dedikodular ve ortaya attıkları onun “Çalıkuşu” Feride ile kağıt üzerinde evlenmesine sebep olur. Fakat aralarında her zaman bir baba ve kızı ilişkisi bulunmaktadır. Bu durumda hiçbir zaman bozulmamaktadır.' },
    { image: require('./image/suc.png'), name: 'Suç ve Ceza', summary: 'Suç ve Ceza özeti' },
    { image: require('./image/donusum.png'), name: 'Dönüşüm', summary: 'Dönüşüm özeti' },
    { image: require('./image/livaneli.png'), name: 'Serenad', summary: 'Serenad özeti' },
    { image: require('./image/anna.png'), name: 'Anna Karenina', summary: 'Anna Karenina özeti' },
    { image: require('./image/bk.png'), name: 'Bilinmeyen Kavga', summary: 'Bilinmeyen Kavga özeti' },
    { image: require('./image/saat.png'), name: 'Saatleri Ayarlama \nEnstitüsü', summary: 'Saatleri A. Enstitüsü özeti' },
    { image: require('./image/gece.png'), name: 'Olağanüstü \nBir Gece', summary: 'Olağanüstü Bir Gece özeti' },
  ];
  

  const additionalImages = [
    { image: require('./image/mufettislermufettisi.png'), name: ' Müfettişler Müfettişi', summary: 'Image 4 özeti' },
    { image: require('./image/bilinmeyenbirkm.png'), name: 'Bilinmeyen Bir \nKadının Mektubu', summary: 'Image 1 özeti' },
    { image: require('./image/dünya.png'), name: 'Dünyanın \nMerkezine Yolculuk', summary: 'Image 2 özeti' },
    { image: require('./image/icimizdekibiz.png'), name: 'İçimizdeki Biz', summary: 'Image 3 özeti' },
    { image: require('./image/kosktekiesrar.png'), name: 'Köşkteki Esrar', summary: 'Image 4 özeti' },
  
  ];

  const handleImagePress = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOzetPress = (item) => {
    setSelectedOzet(item);
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
              <Text style={styles.additionalText}>{item.name}</Text>
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
