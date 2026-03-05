export type C = [number, number, number, number, number, number]
const v = [1, 5, 10, 50, 100, 500]

export function solve(c: C, a: number): number {
  let result = 0

  for (let i = 5; i >= 0; i--) {
    const t = Math.min(Math.floor(a / v[i]), c[i])
    a -= t * v[i]
    result += t
  }

  return result
}
