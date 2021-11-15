import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

const Body = () => {

    const [total, setTotal] = useState('100.00')
    const [cuenta, setCuenta] = useState('')
    const [resultado, setResultado] = useState(0)
    const [propina, setPropina] = useState('4.50')
    const [personas, setPersonas] = useState('5')
    const [porcentaje, setPorcentaje] = useState('15')
    const [totalPersona, setTotalPersona] = useState('32.70')

    const resetData = () => {

    }

    //<FontAwesome 
    //    style={styles.inputaddon}
    //    name="user"
    //    size={32}
    //    color="black"
    ///>

    return (
        <View style={styles.container}>
            <ScrollView>

                <Text style={styles.headerText}>Cuenta</Text>
                <View>
                    <Text style={styles.inputaddon}>C$</Text>
                    <TextInput 
                        style={styles.inputs}
                        keyboardType='numeric'
                        defaultValue={total}
                        onChangeText={setTotal}
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
                                porcentaje == '5'
                                    ? styles.botonPorcentajeActive
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '5'
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
                                porcentaje == '10'
                                    ? styles.botonPorcentajeActive
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '10'
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
                                porcentaje == '15'
                                    ? styles.botonPorcentajeActive
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '15'
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
                                porcentaje == '25'
                                    ? styles.botonPorcentajeActive
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '25'
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
                                porcentaje == '50'
                                    ? styles.botonPorcentajeActive
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '50'
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
                        <TextInput 
                            style={styles.inputs}
                            keyboardType='numeric'
                            defaultValue={personas}
                            onChangeText={setPersonas}
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
                    <Text style={styles.botonReset}>Reset</Text>
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
    },
    inputs: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 1,
        paddingHorizontal: 10,
    },
    headerText: {},
    inputaddon: {},
    boxSelectTip: {},
    buttonsContainer: {},
    botonPorcentajeActive: {},
    botonPorcentaje: {},
    textoBotonPorcentajeActivo: {},
    textoBotonPorcentaje: {},
    boxResumen: {},
    filaResumen: {},
    textWhiteHeaderText: {},
    textGrayResumen: {},
    textMontoResumen: {},
    botonReset: {},
})
