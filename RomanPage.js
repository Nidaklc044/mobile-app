import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text, Modal, Button } from 'react-native';
import { styles } from './styles';

const RomanPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSummary, setCurrentSummary] = useState(''); // Özet için state değişkeni
  const [modalVisible, setModalVisible] = useState(false); // Modal görünürlüğü için state değişkeni

  const images = [
    require('./image/bbkm.png'),
    require('./image/yasamak.png'),
    require('./image/yln.png'),
    require('./image/fare.png'),
  ];

  const otherImages = [
    { image: require('./image/calikusu.png'), name: 'Çalıkuşu', summary: 'Çalıkuşu özeti burada...' },
    { image: require('./image/suc.png'), name: 'Suç ve Ceza', summary: 'Suç ve Ceza özeti burada...' },
    { image: require('./image/donusum.png'), name: 'Dönüşüm', summary: 'Dönüşüm özeti burada...' },
    { image: require('./image/livaneli.png'), name: 'Serenad', summary: 'Serenad özeti burada...' },
    { image: require('./image/anna.png'), name: 'Anna Karenina', summary: 'Anna Karenina özeti burada...' },
    { image: require('./image/bk.png'), name: 'Bilinmeyen Kavga', summary: 'Bilinmeyen Kavga özeti burada...' },
    { image: require('./image/saat.png'), name: 'Saatleri Ayarlama \nEnstitüsü', summary: 'Saatleri A. Enstitüsü özeti burada...' },
    { image: require('./image/gece.png'), name: 'Olağanüstü \nBir Gece', summary: 'Olağanüstü Bir Gece özeti burada...' },
  ];

  const additionalImages = [
    { image: require('./image/mufettislermufettisi.png'), name: ' Müfettişler Müfettişi', summary: 'Müfettişler Müfettişi özeti burada...' },
    { image: require('./image/bilinmeyenbirkm.png'), name: 'Bilinmeyen Bir \nKadının Mektubu', summary: 'Bilinmeyen Bir Kadının Mektubu özeti burada...' },
    { image: require('./image/dünya.png'), name: 'Dünyanın \nMerkezine Yolculuk', summary: 'Dünyanın Merkezine Yolculuk özeti burada...' },
    { image: require('./image/icimizdekibiz.png'), name: 'İçimizdeki Biz', summary: 'İçimizdeki Biz özeti burada...' },
    { image: require('./image/kosktekiesrar.png'), name: 'Köşkteki Esrar', summary: 'Köşkteki Esrar özeti burada...' },
  ];

  const handleImagePress = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handleBookPress = (summary) => {
    setCurrentSummary(summary);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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
        <Text style={styles.mostRead}>En Çok Okunan Romanlar</Text>
        <ScrollView horizontal>
          {otherImages.map((item, index) => (
            <TouchableOpacity key={index} style={styles.otherImageContainer} onPress={() => handleBookPress(item.summary)}>
              <Image source={item.image} style={styles.otherImage} resizeMode="cover" />
              <Text style={styles.subText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <ScrollView style={styles.additionalImagesContainer}>
        {additionalImages.map((item, index) => (
          <TouchableOpacity key={index} style={styles.additionalImageContainer} onPress={() => handleBookPress(item.summary)}>
            <Image source={item.image} style={styles.additionalImage} resizeMode="cover" />
            <Text style={styles.additionalText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.summaryText}>{currentSummary}</Text>
            <Button title="Kapat" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default RomanPage;
