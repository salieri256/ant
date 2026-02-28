export function solve(
  L: number,
  n: number,
  x: ReadonlyArray<number>
): {min: number, max: number} {
  let min = 0
  for (let i = 0; i < n; i++) {
    min = Math.max(min, Math.min(x[i], L - x[i]))
  }

  let max = 0
  for (let i = 0; i < n; i++) {
    max = Math.max(max, Math.max(x[i], L - x[i]))
  }

  return { min, max }
}
