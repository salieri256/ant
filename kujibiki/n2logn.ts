import { includes } from "../binarysearch/index.ts"
import { sort } from "../mergesort/index.ts"

export function solve(n: number, m: number, k: ReadonlyArray<number>): 'Yes' | 'No' {
  const kk: number[] = []
  
  for (let c = 0; c < n; c++) {
    for (let d = 0; d < n; d++) {
      kk[c * n + d] = k[c] + k[d]
    }
  }

  const l = sort(kk)

  let exists = false

  search: for (let a = 0; a < n; a++) {
    for(let b = 0; b < n; b++) {
      if (includes(m - l[a] - l[b], kk)) {
        exists = true
        break search
      }
    }
  }

  return exists ? 'Yes' : 'No'
}
