import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Body = () => {

    const [cuenta, setCuenta] = useState(0)

    return (
        <View
            style={styles.container}
        >
            <TextInput
                style={styles.input}
                onChangeText={setCuenta}
            >

            </TextInput>
            <Text>La cuenta es: {cuenta}</Text>
        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 1,
        paddingHorizontal: 10,
    }
})
