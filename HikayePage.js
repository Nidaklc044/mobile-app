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
    // Diğer hikayeler buraya eklenecek
  ];

  const additionalImages = [
    { image: require('./image/mşe.png'), name: 'Mendil Altında', summary: 'Birbirinden güçlü 25 öyküden oluşan ‘Mendil Altında’, insanımızın bireysel ve toplumsal portresini olağanüstü bir derinlikte çizerken, hiç kuşkusuz yaşamın kalıcı güzelliklerini, ölümsüz değerlerini kapsıyor, damıtıyor ve görkemli bir öz halinde okura sunuyor.Her sayfasında ince bir duyarlığın burcu burcu estiği, Türk hikâyeciliğinin anıtlarından biridir ‘Mendil Altında’.' },
    // Diğer ek hikayeler buraya eklenecek
  ];

  const handleImagePress = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handleOzetPress = (item) => {
    setSelectedOzet(item.summary);
    setSelectedImage(item.image);
    setShowOzet(true);
  };

  const handleBack = () => {
    setShowOzet(false);
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
