// App.js

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './styles'; // Import styles from styles.js
import Search from './components/search';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState('anasayfa'); // State added

  const images = [
    require('./image/bbkm.png'),
    require('./image/yasamak.png'),
    require('./image/yln.png'),
    require('./image/fare.png'),
  ];

  const otherImages = [
    { image: require('./image/calikusu.png'), name: 'Çalıkuşu', summary: 'Çalıkuşu özeti' },
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
              <TouchableOpacity key={index} style={styles.otherImageContainer}>
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
    pageContent = (
      <View style={styles.leftPanel}>
        <Text>Roman Sayfası</Text>
        {/* Roman content can go here */}
      </View>
    );
  } else if (currentPage === 'hikaye') {
    pageContent = (
      <View style={styles.leftPanel}>
        <Text>Hikaye Sayfası</Text>
        {/* Hikaye content can go here */}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Search />
      <Navbar handlePageChange={handlePageChange} /> {/* Pass handlePageChange as a prop */}

      <View style={styles.mainContainer}>
        {pageContent} {/* Insert dynamic page content here */}
        
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
        <Text style={styles.footerText}>Tüm hakları saklıdır. © 2024</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
