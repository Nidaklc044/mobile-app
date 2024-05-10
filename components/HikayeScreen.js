// HikayeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function HikayeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hikaye Screen</Text>
      {/* Hikaye sayfasına özgü içerikler buraya eklenebilir */}
    </View>
  );
}

export default HikayeScreen;
