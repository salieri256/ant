export type TileType = '#' | '.' | 'S' | 'G'
export type Field = ReadonlyArray<ReadonlyArray<TileType>>
export type Position = {i: number, j: number}

export class Queue<T> {
  private v: T[] = []
  push(value: T) {
    this.v.push(value)
  }
  pop() {
    return this.v.shift()
  }
  size() {
    return this.v.length
  }
}

export function findPosition(tile: TileType, field: Field) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === tile) return {i, j}
    }
  }
}

export function createDistanceMap(n: number, m: number): number[][] {
  return Array(n).fill(null).map(() => Array(m).fill(Infinity))
}

export function solve(n: number, m: number, field: Field): number {
  const start = findPosition('S', field)
  const goal = findPosition('G', field)
  if (start === undefined || goal === undefined) {
    return Infinity
  }

  function isWithinRange(i: number, j: number) {
    return 0 <= i && i < n && 0 <= j && j < m
  }

  function isUnvisited(i: number, j: number) {
    return field[i][j] !== '#' && d[i][j] === Infinity
  }

  const d = createDistanceMap(n, m)
  const di = [1, 0, -1, 0], dj = [0, 1, 0, -1]
  d[start.i][start.j] = 0

  const que = new Queue<Position>()
  que.push({i: start.i, j: start.j})

  // 未訪問がなくなるまで
  while(que.size() > 0) {
    const pos = que.pop()
    if (pos === undefined) break
    if (pos.i === goal.i && pos.j === goal.j) break

    // 4近傍の訪問チェック
    for (let a = 0; a < 4; a++) {
      const ni = pos.i + di[a], nj = pos.j + dj[a]
      
      // 訪問済みなら，今よりも短い行き方が存在するということ
      if (isWithinRange(ni, nj) && isUnvisited(ni, nj)) {
        que.push({i: ni, j: nj})
        d[ni][nj] = d[pos.i][pos.j] + 1
      }
    }
  }

  return d[goal.i][goal.j]
}
