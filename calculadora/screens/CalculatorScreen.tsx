import React from 'react'
import { StyleSheet, View } from 'react-native'
import Display from '../components/Display'
import Keyboard from '../components/Keyboard'
import Actions from '../components/Actions'

export default function CalculatorScreen() {
    return (
        <View style={styles.container}>
            <Display />
            <Actions />
            <Keyboard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})