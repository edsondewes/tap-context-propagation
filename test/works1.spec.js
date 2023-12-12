import t from 'tap'

t.before(async () => {
  // Async "before" without any delay works
  t.context = { myprop: 123 }
})

t.test("Works 1", (t) => {
  t.plan(1)

  t.test("myprop", async (t) => {
    // Context is propagated
    t.equal(t.context.myprop, 123)
  })
})