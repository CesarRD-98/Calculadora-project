import { CalculatorState } from "../interfaces/CalculatorState.interface"

export const replaceExpression = (state: CalculatorState, newExpression: string): CalculatorState => {
    return { ...state, display: newExpression, expression: newExpression }
}

export const getLastNumber = (expression: string): string => {
    const match = expression.match(/(\d+\.?\d*)$/)
    return match?.[0] ?? ''
}

export const getLastChar = (expression: string): string => { return expression.slice(-1) }
export const endsWithOperator = (expression: string): boolean => { return /[+\-*/]$/.test(expression) }
export const endsWithDecimal = (expression: string): boolean => { return expression.endsWith('.') }

//evaluate expression
export const evaluateExpression = (expression: string): string => {
    const result = Function(`"use strict"; return (${expression})`)()
    return String(result)
}