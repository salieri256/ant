export function solve(n: number, l: ReadonlyArray<number>): number {
  const len = [...l]
  let cost = 0

  while (n > 1) {
    // 一番短い板，二番目に短い板が何番目にあるか求める
    let short1 = 0
    let short2 = 1
    if (len[short1] > len[short2]) {
      [short1, short2] = [short2, short1]
    }
    for (let i = 2; i < n; i++) {
      if (len[i] < len[short1]) {
        short1 = i
        short2 = short1
      }
      else if (len[i] < len[short2]) {
        short2 = i
      }
    }

    // 合成した長さを求める
    const unsplittedLen = len[short1] + len[short2]
    cost += unsplittedLen

    // 合成後の状態にする．末尾を削るので，対策する必要がある↓
    // 末尾がshort1でもshort2でもないとき，末尾の情報がshort2に残る
    // 末尾がshort1かshort2のとき，合成した長さは両方に入れているので片方消えても問題なし
    len[short1] = unsplittedLen
    len[short2] = unsplittedLen
    len[short2] = len[n - 1]

    n--
  }

  return cost
}
