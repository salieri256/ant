import assert from 'node:assert'
import { test } from 'node:test'
import { solve as n4 } from './n4.ts'
import { solve as n3logn } from './n3logn.ts'
import { solve as n2logn } from './n2logn.ts'

test('「くじびき」のO(n^4)の実装が正しく動作すること', () => {
  assert.deepStrictEqual(n4(3, 10, [1,3,5]), 'Yes')
  assert.deepStrictEqual(n4(3, 9, [1,3,5]), 'No')
})

test('「くじびき」のO(n^3 log n)の実装が正しく動作すること', () => {
  assert.deepStrictEqual(n3logn(3, 10, [1,3,5]), 'Yes')
  assert.deepStrictEqual(n3logn(3, 9, [1,3,5]), 'No')
})

test('「くじびき」のO(n^2 log n)の実装が正しく動作すること', () => {
  assert.deepStrictEqual(n2logn(3, 10, [1,3,5]), 'Yes')
  assert.deepStrictEqual(n2logn(3, 9, [1,3,5]), 'No')
})
