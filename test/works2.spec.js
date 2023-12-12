import t from 'tap'
import { setTimeout } from 'node:timers/promises'

t.before(async () => {
  // Setting the context before the delay also works, but is a bit awkward
  t.context = { myprop: undefined }
  await setTimeout(100)
  t.context.myprop = 123
})

t.test("Works 2", (t) => {
  t.plan(1)

  t.test("myprop", async (t) => {
    // Context is propagated
    t.equal(t.context.myprop, 123)
  })
})