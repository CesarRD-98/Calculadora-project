import { Operator, Paren } from "../context/CalculatorReducer";

export type CalculatorReducerType =
    | { type: 'NUMBER'; payload: string }
    | { type: 'OPERATOR'; payload: Operator }
    | { type: 'PAREN', payload: Paren }
    | { type: 'DECIMAL' }
    | { type: 'EQUALS' }
    | { type: 'CLEAR' }
    | { type: 'BACKSPACE' }
    | { type: 'SIGN' }
    | { type: 'PERCENT' }