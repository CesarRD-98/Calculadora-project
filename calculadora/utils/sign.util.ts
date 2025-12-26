export const toggleSign = (expression: string): string => {
    const openNegativeMatch = expression.match(/\(-(\d+\.?\d*)$/)
    if (openNegativeMatch) {
        const start = openNegativeMatch.index ?? 0
        return expression.slice(0, start) + openNegativeMatch[1]
    }

    const numberMatch = expression.match(/(\d+\.?\d*)$/)
    if (!numberMatch) return expression

    const start = numberMatch.index ?? 0
    return expression.slice(0, start) + `(-${numberMatch[0]}`
}