// styles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    marginRight: 9, // Daha az boşluk
    color: 'white',
    fontWeight: 'bold',
  },
  footerText: {
    color: 'white',
    backgroundColor:'blue',
  },
});
