import assert from 'node:assert'
import { test } from 'node:test'
import { solve } from './n.ts'

test('「Ants」のO(n)の実装が正しく動作すること', () => {
  assert.deepStrictEqual(solve(10, 3, [2, 6, 7]), {min: 4, max: 8})
})
