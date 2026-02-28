import { sort } from '../mergesort/index.ts'

export function solve(n: number, a: ReadonlyArray<number>): number {
  let ans = 0

  const b = sort(a)
  for (let i = 2; i < n; i++) {
    const len = b[i] + b[i - 1] + b[i - 2]

    if (b[i] < b[i - 1] + b[i - 2]) {
      ans = Math.max(ans, len)
    }
  }

  return ans
}
