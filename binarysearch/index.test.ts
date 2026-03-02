import assert from 'node:assert'
import { test } from 'node:test'
import { includes } from './index.ts'

test('二分探索が正しく動作すること', () => {
  assert.deepStrictEqual(includes(1, [1,2,3,4,5,6,7,8]), true)
})
