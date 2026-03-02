export function solve(n: number, a: ReadonlyArray<number>, k: number): 'Yes' | 'No' {
  function dfs(i: number, sum: number): boolean {
    if (i === n) return sum === k
    if (dfs(i + 1, sum)) return true
    if (dfs(i + 1, sum + a[i])) return true
    return false
  }
  
  return dfs(0, 0) ? 'Yes' : 'No'
}
