import assert from 'node:assert'
import { test } from 'node:test'
import { sort } from './index.ts'

test('マージソートが正しく動作すること', () => {
  assert.deepStrictEqual(sort([5,4,6,1,2,7,3]), [1,2,3,4,5,6,7])
})
