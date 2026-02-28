export function solve(n: number, a: ReadonlyArray<number>): number {
  let ans = 0

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const len = a[i] + a[j] + a[k]
        const max = Math.max(a[i], a[j], a[k])
        const rest = len - max

        if (max < rest) {
          ans = Math.max(ans, len)
        }
      }
    }
  }

  return ans
}
