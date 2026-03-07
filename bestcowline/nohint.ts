export function isHeadSideFirst(s: string): boolean {
  const headChar = s.at(0)
  const tailChar = s.at(-1)
  if (headChar === undefined || tailChar === undefined) return false
  if (headChar === tailChar) {
    const withoutBothEnds = s.slice(1, -1)
    return isHeadSideFirst(withoutBothEnds)
  }
  return headChar < tailChar
}

export function solve(n: number, s: string): string {
  let result = ""

  while (s.length > 0) {
    if (isHeadSideFirst(s)) {
      result += s.at(0)
      s = s.slice(1)
    } else {
      result += s.at(-1)
      s = s.slice(0, -1)
    }
  }

  return result
}
