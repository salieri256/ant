import assert from 'node:assert'
import { test } from 'node:test'
import { solve as n3 } from './n3.ts'
import { solve as nlogn } from './nlogn.ts'

test('「三角形」のO(n^3)の実装が正しく動作すること', () => {
  assert.deepStrictEqual(n3(5, [2,3,4,5,10]), 12)
  assert.deepStrictEqual(n3(4, [4,5,10,20]), 0)
})

test('「三角形」のO(n log n)の実装が正しく動作すること', () => {
  assert.deepStrictEqual(nlogn(5, [2,3,4,5,10]), 12)
  assert.deepStrictEqual(nlogn(4, [4,5,10,20]), 0)
})
