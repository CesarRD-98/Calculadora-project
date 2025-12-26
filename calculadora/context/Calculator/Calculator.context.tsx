import { createContext } from "react";
import { Operator, Paren } from "../CalculatorReducer";

interface CalculatorCtxType {
    display: string
    pressNumber: (value: string) => void
    pressOperator: (op: Operator) => void
    pressParen: (paren: Paren) => void
    pressDecimal: () => void
    equal: () => void
    clear: () => void
    backspace: () => void
    sign: () => void
    percent: () => void
}

export const CalculatorContext = createContext<CalculatorCtxType | undefined>(undefined)