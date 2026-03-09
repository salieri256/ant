import assert from 'node:assert'
import { test } from 'node:test'
import { solve } from './donyoku.ts'

test('「Saruman\'s Army」の貪欲法の実装が正しく動作すること', () => {
  assert.deepStrictEqual(solve(6, 10, [1,7,15,20,30,50]), 3)
})
