import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../styles/theme'
import { useCalculator } from '../context/Calculator/Calculator.provider'

export default function Display() {
  const { display } = useCalculator()
  return (
    <View style={styles.container}>
      <Text style={styles.displayText}>{display}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.md,
  },
  displayText: {
    fontSize: 42
  }
})
