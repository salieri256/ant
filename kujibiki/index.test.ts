import assert from 'node:assert'
import { test } from 'node:test'
import { solve as n4 } from './n4.ts'

test('「くじびき」のO(n^4)の実装が正しく動作すること', () => {
  assert.deepStrictEqual(n4(3, 10, [1,3,5]), 'Yes')
  assert.deepStrictEqual(n4(3, 9, [1,3,5]), 'No')
})
