import { CalculatorKeys } from "../interfaces/CalculatorKeys.interface";

export const keys: CalculatorKeys[][] = [
    [
        { label: 'C', type: 'clear' },
        { label: '( )', type: 'paren' },
        { label: '%', type: 'percent' },
        { label: '÷', value: '/', type: 'operator' },
    ],
    [
        { label: '7', type: 'number' },
        { label: '8', type: 'number' },
        { label: '9', type: 'number' },
        { label: 'x', value: '*', type: 'operator' },
    ],
    [
        { label: '4', type: 'number' },
        { label: '5', type: 'number' },
        { label: '6', type: 'number' },
        { label: '-', value: '-', type: 'operator' },
    ],
    [
        { label: '1', type: 'number' },
        { label: '2', type: 'number' },
        { label: '3', type: 'number' },
        { label: '+', value: '+', type: 'operator' },
    ],
    [
        { label: '+/-', type: 'sign' },
        { label: '0', type: 'number' },
        { label: '.', type: 'decimal' },
        { label: '=', type: 'equal' },
    ],
];