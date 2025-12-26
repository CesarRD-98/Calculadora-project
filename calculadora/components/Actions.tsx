import { View, Pressable, Animated, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { theme } from '../styles/theme'
import { MaterialIcons } from '@expo/vector-icons'
import { useCalculator } from '../context/Calculator/Calculator.provider'

export default function Actions() {
    const { backspace } = useCalculator()
    const scale = useRef(new Animated.Value(1)).current

    const handlePressIn = () => {
        Animated.spring(scale, {
            toValue: 0.95,
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
    return (
        <View style={styles.container}>
            <Pressable
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={backspace}
                hitSlop={12}
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.pressed
                ]}>
                <Animated.View style={{ transform: [{ scale }] }}>
                    <MaterialIcons
                        name='backspace'
                        size={30}
                        color={theme.colors.operatorKey}
                    />
                </Animated.View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        marginVertical: 12
    },
    button: {
        margin: 6,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressed: {
        opacity: 0.85
    }
})