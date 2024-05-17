import React, { useState } from 'react'
import { TouchableOpacity, TextInput, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        inlineSize: '100%',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
        padding: 5,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    button: {
        backgroundColor: 'orange',
        padding: 5,
        borderRadius: 0,
    }
});

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, isFocused && { borderColor: 'rgba(0, 0, 0, 1)' }]}
                placeholder="Ara..."
                onChangeText={text => setKeyword(text)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            <TouchableOpacity style={styles.button} onPress={() => undefined}>
                {'Ara'}
            </TouchableOpacity>
        </View>
    )
}

export default Search;
