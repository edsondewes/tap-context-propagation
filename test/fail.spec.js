import t from 'tap'
import { setTimeout } from 'node:timers/promises'

t.before(async () => {
  // Adding some async call before setting the context prevent it from propagating
  await setTimeout(100)
  t.context = { myprop: 123 }
})

t.test("Test context", (t) => {
  t.plan(1)

  t.test("myprop", async (t) => {
    // myprop is undefined :(
    t.equal(t.context.myprop, 123)
  })
})