export function solve(n: number, s: string) {
  let a = 0, b = n - 1
  let t = ""

  while (a <= b) {
    let left = false
    for (let i = 0; a + i <= b; i++) {
      if (s[a + i] < s[b - i]) {
        left = true
        break
      }
      else if (s[a + i] > s[b - i]) {
        left = false
        break
      }
    }

    if (left) t += s[a++]
    else t += s[b--]
  }

  return t
}
