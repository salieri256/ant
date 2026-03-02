import { includes } from '../binarysearch/index.ts'
import { sort } from "../mergesort/index.ts";

export function solve(n: number, m: number, k: ReadonlyArray<number>): 'Yes' | 'No' {
  const l = sort(k)

  let exists = false

  search: for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      for (let c = 0; c < n; c++) {
        if (includes(m - l[a] - l[b] - l[c], l)) {
          exists = true
          break search
        }
      }
    }
  }

  return exists ? 'Yes' : 'No'
}
