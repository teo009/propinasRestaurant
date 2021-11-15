import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const Body = () => {

    const [total, setTotal] = useState<number>(145.66)
    const [propina, setPropina] = useState('4.27')
    const [personas, setPersonas] = useState<number>(5)
    const [porcentaje, setPorcentaje] = useState(15)
    const [totalPersona, setTotalPersona] = useState('32.79')

    const calcularPropina = () => {
        let _propinaTotal = (total * (porcentaje / 100))
        let _propinaPorPersona = _propinaTotal / personas
        if (isNaN(_propinaPorPersona) || _propinaPorPersona === Infinity) {
            _propinaPorPersona = 0
        }
        setPropina(_propinaPorPersona.toFixed(2).toString())
        let _total = total +_propinaTotal
        setTotalPersona(_propinaTotal.toFixed(2).toString())
    }

    const resetData = () => {
        setTotal(0)
    }

    useEffect(calcularPropina, [total, personas, porcentaje])

    return (
        <View style={styles.container}>
            <ScrollView>

                <Text style={styles.headerText}>Cuenta</Text>
                <View>
                    <Text style={styles.inputaddon}>C$</Text>
                    <TextInput 
                        style={styles.inputs}
                        keyboardType='numeric'
                        defaultValue={total.toString()}
                        onChangeText={() => setTotal}
                    />
                </View>
                <View style={styles.boxSelectTip}>
                    <Text style={styles.headerText}>
                        Seleccione el porcentaje de propina:
                    </Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity 
                            onPress={() => setPorcentaje(5)}
                            style={
                                porcentaje == 5
                                    ? styles.botonPorcentajeActive
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == 5
                                        ? styles.textoBotonPorcentajeActivo
                                        : styles.textoBotonPorcentaje
                                }
                            >
                                5%
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setPorcentaje(10)}
                            style={
                                porcentaje == 10
                                    ? styles.botonPorcentajeActive
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == 10
                                        ? styles.textoBotonPorcentajeActivo
                                        : styles.textoBotonPorcentaje
                                }
                            >
                                10%
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setPorcentaje(15)}
                            style={
                                porcentaje == 15
                                    ? styles.botonPorcentajeActive
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == 15
                                        ? styles.textoBotonPorcentajeActivo
                                        : styles.textoBotonPorcentaje
                                }
                            >
                                15%
                            </Text>   
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setPorcentaje(25)}
                            style={
                                porcentaje == 25
                                    ? styles.botonPorcentajeActive
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == 25
                                        ? styles.textoBotonPorcentajeActivo
                                        : styles.textoBotonPorcentaje
                                }
                            >
                                25%
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setPorcentaje(50)}
                            style={
                                porcentaje == 50
                                    ? styles.botonPorcentajeActive
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == 50
                                        ? styles.textoBotonPorcentajeActivo
                                        : styles.textoBotonPorcentaje
                                }
                            >
                                50%
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botonPorcentaje}>
                                <Text style={styles.textoBotonPorcentaje}>Custom</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.boxSelectTip}>
                    <Text style={styles.headerText}>
                        Número de personas
                    </Text>
                    <View>
                        <FontAwesome 
                            style={styles.inputaddon}
                            name="users"
                            size={32}
                        />
                        <TextInput 
                            style={styles.inputs}
                            keyboardType='numeric'
                            defaultValue={personas.toString()}
                            onChangeText={() => setPersonas}
                        />
                    </View>
                </View>
                <View style={styles.boxResumen}>
                    <View style={styles.filaResumen}>
                        <Text style={styles.textWhiteHeaderText}>Propina</Text>
                        <Text style={styles.textGrayResumen}>/ Persona</Text>
                    </View>
                    <View>
                        <Text style={styles.textMontoResumen}>${propina}</Text>
                    </View>
                </View>
                <View style={styles.filaResumen}>
                    <View>
                        <Text style={styles.textWhiteHeaderText}>Total</Text>
                        <Text style={styles.textGrayResumen}>/ Persona</Text>
                    </View>
                    <View>
                        <Text style={styles.textMontoResumen}>{totalPersona}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => resetData()}
                    style={styles.botonReset}
                >
                    <Text style={styles.textoBotonReset}>Reset</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        paddingLeft: 24,
        paddingRight: 24,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#687778',
        borderWidth: 0,
        marginBottom: 5,
        marginTop: 5,
    },
    inputaddon: {
        position: 'absolute',
        color: '#A2BABB',
        top: 10,
        left: 10,
        zIndex: 2,
        fontSize: 22,
    },
    boxSelectTip: {
        marginTop: 25,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        flexWrap: 'wrap',
    },
    botonPorcentajeActive: {
        backgroundColor: '#00C1AC',
        borderRadius: 8,
        width: '48%',
        paddingVertical: 7,
        marginTop: 10,
    },
    botonPorcentaje: {
        backgroundColor: '#00494C',
        borderRadius: 8,
        width: '48%',
        paddingVertical: 7,
        marginTop: 10,
    },
    textoBotonPorcentajeActivo: {
        color: '#004B4F',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
    },
    textoBotonPorcentaje: {
        color: '#F5FBFC',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
    },
    boxResumen: {
        backgroundColor: '#00494C',
        borderRadius: 8,
        marginTop: 25,
        padding: 20,
    },
    filaResumen: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    textWhiteHeaderText: {
        color: '#EDFEFE',
        fontWeight: 'bold',
        fontSize: 22,
        borderWidth: 0,
    },
    textGrayResumen: {
        color: '#4F8B8E',
        fontWeight: 'bold',
        fontSize: 14,
        borderWidth: 0,
    },
    textMontoResumen: {
        color: '#00BEAD',
        fontWeight: 'bold',
        fontSize: 40,
        borderWidth: 0,
    },
    botonReset: {
        backgroundColor: '#00C1AC',
        borderRadius: 8,
        width: '100%',
        paddingVertical: 7,
        marginTop: 1,
    },
    textoBotonReset: {
        color: '#00514E',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
    },
})
