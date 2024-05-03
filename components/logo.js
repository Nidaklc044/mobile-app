import { View, Text, TouchableOpacity} from "react-native";
import {useState} from "react";

const styles = {
    link: {
        marginRight: 10,
    },
    hoveredLink: {
        color: 'orange',
    },
    linkText: {
        color: 'black',
    },
    kitapText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#A52A2A',
    },
    dunyasiText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 10,
        color: '#A52A2A',
    },
}

const Logo = () => {
    const [isKitapHovered, setIsKitapHovered] = useState(false);

    return (
        <View>
            <TouchableOpacity
                onPress={() => console.log("Kitap Özetleri Dünyası")}
                style={[styles.link, isKitapHovered && styles.hoveredLink]}
                onPressIn={() => setIsKitapHovered(true)}
                onPressOut={() => setIsKitapHovered(false)}>
                <Text style={styles.linkText}>
                    <Text style={styles.kitapText}>Kitap Özetleri</Text>
                </Text>
                <Text style={styles.dunyasiText}>Dünyası</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Logo;