import {Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import Logo from "./logo";

const styles = {
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px'
    },
    nav: {
        flexDirection: 'row',
    },
    link: {
        marginLeft: '10px'
    }
}

const Navbar = () => {
    const [isAnasayfaHovered, setIsAnasayfaHovered] = useState(false);
    const [isRomanHovered, setIsRomanHovered] = useState(false);
    const [isHikayeHovered, setIsHikayeHovered] = useState(false);

    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.nav}>
                {['Anasayfa', 'Roman', 'Hikaye'].map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.link, isAnasayfaHovered && styles.hoveredLink]}
                        onPress={() => console.log("Anasayfa")}
                        onPressIn={() => setIsAnasayfaHovered(true)}
                        onPressOut={() => setIsAnasayfaHovered(false)}>
                            <Text style={styles.linkText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default Navbar