export function includes<T>(x: T, a: ReadonlyArray<T>): boolean {
  let l = 0, r = a.length

  while (r - l >= 1) {
    const i = Math.floor((l + r) / 2)
    if (a[i] === x) return true
    else if (a[i] < x) l = i + 1
    else r = i
  }

  return false
}
