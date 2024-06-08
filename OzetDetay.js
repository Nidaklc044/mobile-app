// OzetDetay.js

import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

const OzetDetay = ({ ozet, image, handleBack }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backText}>Geri</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <Image source={image} style={styles.image} resizeMode="cover" />
          <Text style={styles.title}>{ozet.name}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.summary}>{ozet.summary}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OzetDetay;
