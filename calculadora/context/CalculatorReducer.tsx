import { CalculatorReducerType } from "../interfaces/CalculatorReducerType";
import { CalculatorState } from "../interfaces/CalculatorState.interface";
import { endsWithDecimal, endsWithOperator, evaluateExpression, getLastChar, getLastNumber, replaceExpression } from "../utils/expression.util";
import { isCloseParen, isDigit, isMathOperator, isOpenParen } from "../utils/guards.util";
import { autoCloseParens, getParenBalance } from "../utils/paren.util";
import { togglePercent } from "../utils/percent.util";
import { toggleSign } from "../utils/sign.util";

export type Operator = '+' | '-' | '*' | '/'
export type Paren = '(' | ')'

export const InitialCalculatorState: CalculatorState = {
    display: '0',
    expression: '0'
}

export function CalculatorReducer(
    state: CalculatorState,
    action: CalculatorReducerType
): CalculatorState {
    switch (action.type) {
        case 'NUMBER': {
            const next: string = state.expression === '0' ? action.payload : state.expression + action.payload;
            return replaceExpression(state, next)
        }
        case 'OPERATOR': {
            const last: string = getLastChar(state.expression)

            if (last === '.') { return state }
            if (isMathOperator(last)) { return state }

            const next: string = state.expression + action.payload;
            return replaceExpression(state, next)
        }
        case 'DECIMAL': {
            const expr: string = state.expression
            const last: string = getLastChar(expr)
            const lastNumber: string = getLastNumber(expr)
            let next: string = expr

            if (last === '.') { return state }
            else if (lastNumber.includes('.')) { return state }
            else if (expr === '0') { next = '0.' }
            else if (isMathOperator(last) || isOpenParen(last)) { next = expr + '0.' }
            else { next = expr + '.' }

            return replaceExpression(state, next)
        }
        case 'PAREN': {
            const expr: string = state.expression
            const last: string = getLastChar(expr)
            const balance = getParenBalance(expr)

            let next: string = expr

            if (expr === '0') { next = '(' }
            else if (last === '.') { return state }
            else if (isMathOperator(last) || isOpenParen(last)) { next = expr + '(' }
            else if (balance > 0 && (isDigit(last) || isCloseParen(last))) { next = expr + ')' }
            else { next = expr + '(' }

            return replaceExpression(state, next)
        }
        case 'EQUALS': {
            let expr: string = state.expression

            if (expr === '0' || endsWithOperator(expr) || endsWithDecimal(expr)) {
                return state
            }

            expr = autoCloseParens(expr)

            try {
                const result = evaluateExpression(expr)
                console.log(result)
                return replaceExpression(state, result)
            } catch (error) {
                return {
                    ...state,
                    display: 'Error',
                    expression: '0'
                }
            }
        }
        case 'BACKSPACE': {
            const next = state.expression.length > 1 ? state.expression.slice(0, - 1) : '0';
            return replaceExpression(state, next)
        }
        case 'CLEAR':
            return InitialCalculatorState
        case 'SIGN': {
            const last: string = getLastChar(state.expression)

            if (last === '.' || isMathOperator(last)) { return state }

            const next: string = toggleSign(state.expression)
            return replaceExpression(state, next)
        }
        case 'PERCENT': {
            const last: string = getLastChar(state.expression)

            if (last === '.' || isMathOperator(last)) { return state }

            const next: string = togglePercent(state.expression)
            return replaceExpression(state, next)
        }
        default:
            return InitialCalculatorState
    }
}