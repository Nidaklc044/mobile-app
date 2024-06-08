import React, { useState } from 'react';
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';

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
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
    },
};

const Sidebar = () => {
    const data = [
      

    { image: require('../image/kprens.png'), text: 'Küçük Prens', summary: 'Küçük Prens, Antoine de Saint-Exupéry tarafından yazılan ve dünyanın en çok okunan kitaplarından biri olan masal ve felsefe türünde bir eserdir. Roman, bir pilotun çölde mahsur kaldıktan sonra küçük bir prens ile tanışmasını ve prensin hikayesini anlatır. Küçük Prens, çocukların dünyasından yetişkinlerin dünyasına bir köprü kurar ve insanın kalbinin asıl önemli olanı görebilmesi için ona rehberlik eder.' },
    { image: require('../image/sineklibakkal.png'), text: 'Sinekli Bakkal', summary: 'Sinekli Bakkal, Halide Edib Adıvar tarafından yazılan bir romandır. Roman, İstanbul daki Sinekli Bakkal sokaklarında yaşanan olayları ve bu sokaktaki insanların hayatlarını konu alır. Roman, dönemin toplumsal ve siyasi yapısını eleştirirken, insan ilişkileri ve ahlaki değerler üzerine de derinlemesine bir analiz sunar.' },
    { image: require('../image/falaka.png'), text: 'Falaka', summary: 'Falaka, Reşat Nuri Güntekin tarafından yazılan bir romandır. Roman, bir öğretmenin hayatını ve yaşadığı zorlukları konu alır. Yazar, romanında eğitim sistemi, aile ilişkileri ve toplumsal normlar üzerine eleştirel bir bakış sunar.' },
    { image: require('../image/sekerp.png'), text: 'Şeker Portakalı', summary: 'Şeker Portakalı, Jose Mauro de Vasconcelos tarafından yazılan bir romandır. Roman, bir çocuğun hayal dünyasıyla gerçek dünya arasındaki çatışmayı ele alır. Roman, çocukluğun masumiyeti ve acı gerçekler arasındaki dengeyi araştırır.' },
    { image: require('../image/kysf.png'), text: 'Kuyucaklı Yusuf', summary: 'Kuyucaklı Yusuf, Sabahattin Ali nin ilk romanıdır. Roman, yoksul bir köylü çocuğu olan Yusuf un, hayatı boyunca yaşadığı acıları ve toplumsal baskıları konu alır. Roman, yazarın dönemin toplumsal ve ekonomik yapısını eleştiren bir eseridir.' },
    { image: require('../image/alice.png'), text: 'Alice Harikalar Diyarı', summary: 'Alice Harikalar Diyarı, Lewis Carroll tarafından yazılan klasik bir çocuk romanıdır. Roman, genç bir kız olan Alice in, gizemli bir tavşanın peşinden giderek Harikalar Diyarı na düşmesini konu alır. Roman, absürd bir atmosferde macera ve keşif dolu bir hikaye sunar.' },
    { image: require('../image/vatan.png'), text: 'Vatan Yahut Silistre', summary: 'Vatan Yahut Silistre, Namık Kemal tarafından yazılan tarih ve dram türünde bir romandır. Roman, Osmanlı İmparatorluğu nun çöküş dönemindeki toplumsal ve siyasi olayları ele alır. Yazar, romanında milli ve manevi değerleri ön plana çıkararak okuyucuya bir vatan sevgisi duygusu aşılar.' },
    { image: require('../image/dkh.png'), text: 'Delilik Kraliçesi', summary: 'Delilik Kraliçesi, Edgar Allan Poe tarafından yazılan bir öyküdür. Öykü, bir akıl hastanesinde yaşanan tuhaf olayları konu alır. Yazar, akıl hastalıkları ve gerçeklik ile hayal arasındaki ince çizgiyi sorgular.' },
  
    ];

    const [selectedSummary, setSelectedSummary] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleShowSummary = (summary) => {
        setSelectedSummary(summary);
        setModalVisible(true);
    };

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={[styles.modalContent, { width: '80%', maxHeight: '60%', paddingHorizontal: 20 }]}>
                        <ScrollView>
                            <Text style={{ color: 'black' }}>{selectedSummary}</Text>
                        </ScrollView>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 20 }}>
                            <Text style={{ color: 'blue' }}>Kapat</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={styles.sidePanel}>
                <Text style={styles.sidePanelText}>100 TEMEL</Text>
                <Text style={styles.sidePanelText}>ESER</Text>
                <ScrollView style={{ maxHeight: 690 }}>
                    {data.map((item, index) => (
                        <TouchableOpacity key={index} style={{ alignItems: 'center', marginTop: 10 }} onPress={() => handleShowSummary(item.summary)}>
                            <Image source={item.image} style={styles.sidePanelImage} />
                            <Text style={styles.sidePanelText}>{item.text}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.bottomCorner} />
            </View>
        </View>
    );
};

export default Sidebar;
