import { Pressable, StyleSheet, Animated } from 'react-native'
import React, { useRef } from 'react'
import { theme } from '../styles/theme'
import { CalculatorKeys } from '../interfaces/CalculatorKeys.interface'
import { useCalculator } from '../context/Calculator/Calculator.provider'
import { Operator, Paren } from '../context/CalculatorReducer'

interface CalcbuttonProps {
    keyData: CalculatorKeys
}

export default function CalcButton({ keyData }: CalcbuttonProps) {
    const { pressNumber, pressOperator, clear, equal, pressDecimal, pressParen, sign, percent } = useCalculator()
    const scale = useRef(new Animated.Value(1)).current

    const keyBg = keyData.type === 'equal' ? theme.colors.equalKey :
        keyData.type === 'operator' ? theme.colors.operatorKey :
            theme.colors.buttonKey;

    const keyText = keyData.type === 'equal' ? theme.colors.textLight :
        keyData.type === 'operator' ? theme.colors.textLight :
            theme.colors.textDark;

    const handlePressIn = () => {
        Animated.spring(scale, {
            toValue: 0.70,
            useNativeDriver: true,
            speed: 50,
            bounciness: 0
        }).start()
    }

    const handlePressOut = () => {
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
            speed: 50,
            bounciness: 0
        }).start()
    }

    const handlePressButton = () => {
        if (keyData.type === 'number') { pressNumber(keyData.label) }
        if (keyData.type === 'equal') { equal() }
        if (keyData.type === 'operator') { pressOperator(keyData.value as Operator) }
        if (keyData.type === 'clear') { clear() }
        if (keyData.type === 'decimal') { pressDecimal() }
        if (keyData.type === 'paren') { pressParen(keyData.label as Paren) }
        if (keyData.type === 'sign') { sign() }
        if (keyData.type === 'percent') { percent() }
    }


    return (
        <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handlePressButton}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: keyBg },
                pressed && styles.pressed
            ]}>
            <Animated.Text
                style={[
                    styles.text,
                    { color: keyText, transform: [{ scale }] }
                ]}
            >
                {keyData.label}
            </Animated.Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 6,
        borderRadius: '50%',
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ebebebff'
    },
    text: {
        fontSize: 30,
    },
    pressed: {
        opacity: 0.85
    }
})