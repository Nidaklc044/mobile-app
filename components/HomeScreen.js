// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Roman"
        onPress={() => navigation.navigate('Roman')}
      />
      <Button
        title="Go to Hikaye"
        onPress={() => navigation.navigate('Hikaye')}
      />
    </View>
  );
}

export default HomeScreen;
