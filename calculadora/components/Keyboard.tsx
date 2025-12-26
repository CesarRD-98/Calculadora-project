import React from 'react'
import { StyleSheet, View } from 'react-native'
import CalcButton from './CalcButton'
import { keys } from '../config/CalculatorKeys'
import { useCalculator } from '../context/Calculator/Calculator.provider'

export default function Keyboard() {
    const { pressNumber } = useCalculator()
    return (
        <View style={styles.container}>
            {keys.map((keyValue, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {keyValue.map((key, index) => (
                        <CalcButton key={index} keyData={key} />
                    ))}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
