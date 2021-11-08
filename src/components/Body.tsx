import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

const Body = () => {

    const [cuenta, setCuenta] = useState('')
    const [resultado, setResultado] = useState(0)

    const calcularPropina5 = () => {
        const result = 5 * parseInt(cuenta)
        setResultado(result)
    }
    const calcularPropina10 = () => {
        const result = 10 * parseInt(cuenta)
        setResultado(result)
    }

    //This is little comment
    //useEffect(() => {
    //    handleCalcularPropina()
    //}, [cuenta])

    return (
        <View
            style={styles.container}
        >

            <TextInput
                style={styles.input}
                onChangeText={setCuenta}
            />

            <TouchableOpacity
                onPress={calcularPropina5}
            >
                <Text>5%</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={calcularPropina10}
            >
                <Text>10%</Text>
            </TouchableOpacity>

            <Text>La cuenta es: {resultado}</Text>

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
