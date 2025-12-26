import React, { useContext, useReducer } from 'react'
import { CalculatorContext } from './Calculator.context'
import { ChildrenProp } from '../../interfaces/Children.interface'
import { CalculatorReducer, InitialCalculatorState, Operator, Paren } from '../CalculatorReducer'

export default function CalculatorProvider({ children }: ChildrenProp) {
    const [state, dispatch] = useReducer(CalculatorReducer, InitialCalculatorState)

    const value = {
        display: state.display,
        pressNumber: (number: string) => dispatch({ type: 'NUMBER', payload: number }),
        pressOperator: (op: Operator) => dispatch({ type: 'OPERATOR', payload: op }),
        pressParen: (paren: Paren) => dispatch({ type: 'PAREN', payload: paren }),
        pressDecimal: () => dispatch({ type: 'DECIMAL' }),
        equal: () => dispatch({ type: 'EQUALS' }),
        clear: () => dispatch({ type: 'CLEAR' }),
        backspace: () => dispatch({ type: 'BACKSPACE' }),
        sign: () => dispatch({ type: 'SIGN' }),
        percent: () => dispatch({ type: 'PERCENT' }),
    }
    return (
        <CalculatorContext.Provider value={value}>
            {children}
        </CalculatorContext.Provider>
    )
}

export const useCalculator = () => {
    const context = useContext(CalculatorContext)
    if (!context) {
        throw new Error('Calculator have must be use CalculatorProvider')
    }
    return context
}