export type TileType = '.' | 'W'
export type Field = ReadonlyArray<ReadonlyArray<TileType>>

export function solve(n: number, m: number, field: Field): number {
  const f = field.map(row => [...row])

  function isWithinRange(i: number, j: number) {
    return 0 <= i && i < n && 0 <= j && j < m
  }

  function dfs(i: number, j: number) {
    f[i][j] = '.'

    for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
        const ni = i + di, nj = j + dj
        
        if (isWithinRange(ni, nj) && f[ni][nj] === 'W') dfs(ni, nj)
      }
    }
  }

  let count = 0
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (f[i][j] === 'W') {
        dfs(i, j)
        count++
      }
    }
  }

  return count
}
