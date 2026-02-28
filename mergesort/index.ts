export function p<T>(array: ReadonlyArray<T>): [left: T[], right: T[]] {
  const middle = Math.floor(array.length / 2),
  left = array.slice(0, middle),
  right = array.slice(middle)
  return [left, right]
}

export function m<T>(left: ReadonlyArray<T>, right: ReadonlyArray<T>): T[] {
  const result = []
  let i = 0, j = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j))
}

export function sort<T>(array: ReadonlyArray<T>): T[] {
  if (array.length < 2) return [...array]
  const [left, right] = p(array)
  return m(sort(left), sort(right))
}
