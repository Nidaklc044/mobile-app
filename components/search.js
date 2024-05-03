import { useState } from 'react'
import {TouchableOpacity, TextInput, View} from "react-native";

const styles = {
    container: {
        inlineSize: '100%',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    input: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: '5px',
        border: 'inherit',
        '&:focus': {
            outline: 'none'
        }
    },
    inputContainer: {
        flex: 1,
    },
    button: {
        backgroundColor: 'orange',
        padding: 5,
        borderRadius: 0,
    }
}

const Search = () => {
    const [keyword, setKeyword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ara..."
                    onChangeText={text => setKeyword(text)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => undefined}>
                {'Ara'}
            </TouchableOpacity>
        </View>
    )
}

export default Search;