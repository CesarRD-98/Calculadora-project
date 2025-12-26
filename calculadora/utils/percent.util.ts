export const togglePercent = (expression: string) => {
    const match = expression.match(/(-?\d+\.?\d*)$/)
    if (!match) return expression

    const number: string = match[0]
    const start: number = match.index ?? 0
    const value: number = Number(number)

    if (!Number.isFinite(value)) return expression

    const percentValue: string = Math.abs(value) < 1 ? String(value * 100) : String(value / 100)
    return expression.slice(0, start) + percentValue
}