import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import Search from './components/search';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const data = [
    { id: 1, title: 'Kitap 1' },
    { id: 2, title: 'Kitap 2' },
    { id: 3, title: 'Kitap 3' },
    { id: 4, title: 'Kitap 4' },
  ];

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

  return (
    <View style={styles.container}>
      <Search />
      <Navbar />

      <View style={styles.mainContainer}>
        <ScrollView style={styles.leftPanel}>
          <View style={styles.imageContainer}>
            <ScrollView horizontal>
              {images.map((image, index) => (
                <TouchableOpacity key={index} onPress={handleImagePress}>
                  <Image
                    source={image}
                    style={styles.image}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.otherImagesContainer}>
            <Text style={styles.mostRead}>En Çok Okunanlar</Text>
            <ScrollView horizontal>
              {otherImages.map((item, index) => (
                <TouchableOpacity key={index} style={styles.otherImageContainer}>
                  <Image
                    source={item.image}
                    style={styles.otherImage}
                    resizeMode="cover" 
                  />
                  <Text style={styles.subText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          
          <ScrollView style={styles.additionalImagesContainer}>
            {additionalImages.map((item, index) => (
              <View key={index} style={styles.additionalImageContainer}>
                <Image
                  source={item.image}
                  style={styles.additionalImage}
                  resizeMode="cover"
                />
                <Text style={styles.additionalText}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </ScrollView>
        
        <Sidebar />
      </View>

      <View style={styles.footer}>
        <View style={styles.footerLinks}>
          <Text style={styles.footerLink}>Anasayfa</Text>
          <Text style={styles.footerLink}>Roman</Text>
          <Text style={styles.footerLink}>Hikaye</Text>
        </View>
        <Text style={styles.footerText}>Tüm hakları saklıdır. © 2024</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  mainContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  leftPanel: {
    flex: 1,
    marginRight: 10,
  },
  imageContainer: {
  },
  image: {
    width: 220,
    height: 230,
    marginRight: 25,
    resizeMode: 'contain',
  },
  otherImagesContainer: {
    marginLeft: 8,
    marginTop: 30,
    marginRight: 10,
  },
  otherImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 8, 
  },
  otherImage: {
    width: 85,
    height: 110,
    resizeMode: 'cover',
  },
  subText: {
    fontSize: 10,
    fontWeight: 'normal',
    color: 'black',
    fontStyle: 'italic',
    marginTop: 5,
  },
  additionalImagesContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 8,
    marginRight: 10,
  },
  additionalImageContainer: {
    alignItems: 'left',
    marginBottom: 20,
    marginRight: 8,
  },
  additionalImage: {
    width: 70,
    height: 100,
    resizeMode: 'cover',
  },
  additionalText: {
    fontSize: 10,
    fontWeight: 'normal',
    color: 'black',
    fontStyle: 'italic',
    marginTop: 5,
  },
  mostRead: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footer: {
    backgroundColor: '#ff6a00',
    paddingVertical: 5, // Küçük boyut
    paddingHorizontal: 10, // Küçük boyut
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  footerLinks: {
    flexDirection: 'row',
    marginBottom: 5, // Küçük boşluk
  },
  footerLink: {
    marginRight: 10, // Daha az boşluk
    color: 'white',
    fontWeight: 'bold',
  },
  footerText: {
    color: 'white',
  },
});
