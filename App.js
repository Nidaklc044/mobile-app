// App.js

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './styles';
import Search from './components/search';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import HikayePage from './HikayePage'; // HikayePage bileşenini içe aktar
import RomanPage from './RomanPage'; // RomanPage bileşenini içe aktar
import OzetDetay from './OzetDetay'; // OzetDetay bileşenini içe aktar

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState('anasayfa');
  const [selectedOzet, setSelectedOzet] = useState(null); // Tıklanan özetin detaylarını saklamak için state

  const images = [
    require('./image/bbkm.png'),
    require('./image/yasamak.png'),
    require('./image/yln.png'),
    require('./image/fare.png'),
  ];

  const otherImages = [
    { image: require('./image/calikusu.png'), name: 'Çalıkuşu', summary: 'Çalıkuşu özeti' },
    // Diğer özetler
  ];

  const additionalImages = [
    { image: require('./image/mufettislermufettisi.png'), name: ' Müfettişler Müfettişi', summary: 'Image 4 özeti' },
    // Diğer özetler
  ];

  const handleImagePress = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Özet detayları göstermek için fonksiyon
  const handleOzetPress = (ozet) => {
    setSelectedOzet(ozet); // Tıklanan özetin detaylarını state'e kaydet
    setCurrentPage('ozetDetay'); // Özet detaylarını göstermek için sayfayı değiştir
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
            <View key={index} style={styles.additionalImageContainer} onPress={() => handleOzetPress(item)}>
              <TouchableOpacity onPress={() => handleOzetPress(item)}>
                <Image source={item.image} style={styles.additionalImage} resizeMode="cover" />
                <Text style={styles.additionalText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    );
  } else if (currentPage === 'roman') {
    pageContent = <RomanPage />; // RomanPage bileşenini kullan
  } else if (currentPage === 'hikaye') {
    pageContent = <HikayePage />; // HikayePage bileşenini kullan
  } else if (currentPage === 'ozetDetay') {
    pageContent = <OzetDetay ozet={selectedOzet} />; // Tıklanan özetin detaylarını göstermek için OzetDetay bileşenini kullan
  }

  return (
    <View style={styles.container}>
      <Search />
      <Navbar handlePageChange={handlePageChange} /> {/* handlePageChange fonksiyonunu prop olarak geç */}

      <View style={styles.mainContainer}>
        {pageContent} {/* Dinamik olarak sayfa içeriğini buraya yerleştiriyoruz */}
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
