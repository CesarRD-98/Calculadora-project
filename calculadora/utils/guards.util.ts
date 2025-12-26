export const isMathOperator = (chart: string): boolean => { return /[+\-*/]/.test(chart) }
export const isDigit = (chart: string): boolean => { return /[\d]/.test(chart) }
export const isOpenParen = (chart: string): boolean => { return chart === '(' }
export const isCloseParen = (chart: string): boolean => { return chart === ')' }