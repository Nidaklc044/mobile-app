// Navbar.js

import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Logo from './logo';

const styles = {
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  nav: {
    flexDirection: 'row',
  },
  link: {
    marginLeft: 10
  },
  hoveredLink: {
    textDecorationLine: 'underline',
  },
  linkText: {
    fontSize: 16,
  }
};

const Navbar = ({ handlePageChange }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.nav}>
        <TouchableOpacity
          style={[styles.link, hoveredLink === 'anasayfa' && styles.hoveredLink]}
          onPress={() => handlePageChange('anasayfa')}
          onPressIn={() => setHoveredLink('anasayfa')}
          onPressOut={() => setHoveredLink(null)}>
          <Text style={styles.linkText}>Anasayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.link, hoveredLink === 'roman' && styles.hoveredLink]}
          onPress={() => handlePageChange('roman')}
          onPressIn={() => setHoveredLink('roman')}
          onPressOut={() => setHoveredLink(null)}>
          <Text style={styles.linkText}>Roman</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.link, hoveredLink === 'hikaye' && styles.hoveredLink]}
          onPress={() => handlePageChange('hikaye')}
          onPressIn={() => setHoveredLink('hikaye')}
          onPressOut={() => setHoveredLink(null)}>
          <Text style={styles.linkText}>Hikaye</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
