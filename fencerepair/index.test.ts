import assert from 'node:assert'
import { test } from 'node:test'
import { solve } from './donyoku.ts'

test('「Fence Repair」の貪欲法の実装が正しく動作すること', () => {
  assert.deepStrictEqual(solve(3, [8,5,8]), 34)
})
