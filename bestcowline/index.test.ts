import assert from 'node:assert'
import { test } from 'node:test'
import { solve as nohint } from './nohint.ts'
import { solve as donyoku } from './donyoku.ts'

test('「Best Cow Line」の初見の実装が正しく動作すること', () => {
  assert.deepStrictEqual(nohint(6, "ACDBCB"), "ABCBCD")
})

test('「Best Cow Line」の貪欲法の実装が正しく動作すること', () => {
  assert.deepStrictEqual(donyoku(6, "ACDBCB"), "ABCBCD")
})
