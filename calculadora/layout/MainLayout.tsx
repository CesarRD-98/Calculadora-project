import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CalculatorScreen from '../screens/CalculatorScreen'

export default function MainLayout() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <CalculatorScreen />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffffff'
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});