export const getParenBalance = (expression: string): number => {
    return [...expression].reduce((acc, char) => {
        return char === '(' ? acc + 1 : char === ')' ? acc - 1 : acc
    }, 0)
}

export const autoCloseParens = (expression: string): string => {
    const balance: number = getParenBalance(expression)
    return balance > 0 ? expression + ')'.repeat(balance) : expression
}