import assert from 'node:assert'
import { test } from 'node:test'
import { solve } from './donyoku.ts'

test('「硬貨の問題」の貪欲法の実装が正しく動作すること', () => {
  assert.deepStrictEqual(solve([3,2,1,3,0,2], 620), 6)
})
