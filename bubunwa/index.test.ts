import assert from 'node:assert'
import { test } from 'node:test'
import { solve as pow2n } from './2n.ts'

test('「部分和問題」のO(2^n)の実装が正しく動作すること', () => {
  assert.deepStrictEqual(pow2n(4, [1,2,4,7], 13), 'Yes')
  assert.deepStrictEqual(pow2n(4, [1,2,4,7], 15), 'No')
})
