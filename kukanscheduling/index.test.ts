import assert from 'node:assert'
import { test } from 'node:test'
import { solve } from './donyoku.ts'

test('「区間スケジューリング問題」の貪欲法の実装が正しく動作すること', () => {
  assert.deepStrictEqual(solve(5, [1,2,4,6,8], [3,5,7,9,10]), 3)
})
