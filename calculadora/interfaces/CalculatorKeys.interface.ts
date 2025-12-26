export interface CalculatorKeys {
    label: string,
    value?: string
    type: 'operator' | 'number' | 'sign' | 'equal' | 'decimal' | 'paren' | 'percent' | 'clear'
} 