export type Period = {
  from: number
  to: number
}

export function solve(n: number, s: ReadonlyArray<number>, t: ReadonlyArray<number>) {
  const schedule: Period[] = []
  
  for (let i = 0; i < n; i++) {
    schedule[i] = {
      from: s[i],
      to: t[i]
    }
  }
  
  schedule.sort((p1, p2) => p1.to - p2.to)

  let result = 0, time = 0
  for (let i = 0; i < n; i++) {
    if (time < schedule[i].from) {
      result++
      time = schedule[i].to
    }
  }

  return result
}
