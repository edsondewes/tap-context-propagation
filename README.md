# node-tap context propagation

Reproduction of the context propagation when an async call is called before setting the variable

## How to execute
```bash
npm install
npm test
```

## Scenarios

- ✅ Setting context in an async "before" without any delay works
- ✅ Setting the context before the delay also works
- ❌ Setting the context after an async call causes failure