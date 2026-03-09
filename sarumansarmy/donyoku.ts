export function solve(n: number, r: number, x: ReadonlyArray<number>): number {
  const y = x.toSorted((a, b) => a - b)

  let i = 0, marker = 0
  while (i < n) {
    const leftmost = y[i++]
    while (i < n && y[i] <= leftmost + r) i++

    const central = x[i - 1]
    while (i < n && y[i] <= central + r) i++

    marker++
  }

  return marker
}
