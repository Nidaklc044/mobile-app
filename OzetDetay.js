import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const OzetDetay = ({ ozet, image, handleBack }) => {
  const [showFullSummary, setShowFullSummary] = useState(false);

  const toggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  return (
    <View style={styles.leftPanel}>
      <TouchableOpacity onPress={handleBack}>
        <Text style={{ color: 'blue', marginBottom: 10 }}>Geri Dön</Text>
      </TouchableOpacity>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.otherImagesContainer}>
        <Text style={styles.additionalName}>{showFullSummary ? ozet : ozet.slice(0, 100) + '...'}</Text>
        {!showFullSummary && (
          <TouchableOpacity onPress={toggleSummary}>
            <Text style={{ color: 'blue', marginTop: 5 }}>Devamını Oku</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OzetDetay;
