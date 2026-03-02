export function solve(n: number, m: number, k: ReadonlyArray<number>): 'Yes' | 'No' {
  let exists = false

  search: for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      for (let c = 0; c < n; c++) {
        for (let d = 0; d < n; d++) {
          if (k[a] + k[b] + k[c] + k[d] === m) {
            exists = true
            break search
          }
        }
      }
    }
  }

  return exists ? 'Yes' : 'No'
}
