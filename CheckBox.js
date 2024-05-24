// CheckBox.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CheckBox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text>X</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: 'black',
  },
});

export default CheckBox;
