// OzetDetay.js

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const OzetDetay = ({ ozet }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{ozet.name}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.summary}>{ozet.summary}</Text>
      </View>
    </View>
  );
};

export default OzetDetay;
