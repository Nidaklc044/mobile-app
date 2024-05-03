import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const styles = {
    sidePanel: {
        width: 120,
        backgroundColor: 'rgba(100, 149, 237, 0.3)',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#A52A2A',
        borderRadius: 10,
        overflow: 'hidden', // Alt kısmı yuvarlatmak için ekledik
    },
    sidePanelImage: {
        width: 70,
        height: 105,
        marginBottom: 10,
    },
    sidePanelText: {
        color: 'black',
        fontWeight: 'bold',
    },
    bottomCorner: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 10,
        backgroundColor: 'rgba(100, 149, 237, 0.3)',
        borderBottomLeftRadius: 10, // Alt sol köşeyi yuvarlatır
        borderBottomRightRadius: 10, // Alt sağ köşeyi yuvarlatır
    },
};

const Sidebar = () => {
    const data = [
        { image: require('../image/kprens.png'), text: 'Küçük Prens' },
        { image: require('../image/sineklibakkal.png'), text: 'Sinekli Bakkal' },
        { image: require('../image/falaka.png'), text: 'Falaka' },
        { image: require('../image/sekerp.png'), text: 'Şeker Portakalı' },
        { image: require('../image/kysf.png'), text: 'Kuyucaklı Yusuf' },
        { image: require('../image/alice.png'), text: 'Alice Harikalar Diyarı' },
        { image: require('../image/vatan.png'), text: 'Vatan Yahut Silistre' },
        { image: require('../image/dkh.png'), text: 'Delilik Kraliçesi' },
    ];

    return (
        <View style={styles.sidePanel}>
            <Text style={styles.sidePanelText}>100 TEMEL</Text>
            <Text style={styles.sidePanelText}>ESER</Text>
            <ScrollView style={{ maxHeight: 1150 }}>
                {data.map((item, index) => (
                    <View key={index} style={{ alignItems: 'center', marginTop: 10 }}>
                        <Image source={item.image} style={styles.sidePanelImage} />
                        <Text style={styles.sidePanelText}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.bottomCorner} />
        </View>
    );
};

export default Sidebar;
