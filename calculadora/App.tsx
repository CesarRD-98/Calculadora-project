import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainLayout from './layout/MainLayout';
import CalculatorProvider from './context/Calculator/Calculator.provider';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <CalculatorProvider>
        <MainLayout />
      </CalculatorProvider>
    </SafeAreaProvider >
  );
}


