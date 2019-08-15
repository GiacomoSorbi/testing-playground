import fibonacci, { fibonacciCounter } from './'

describe('fibonacci should', () => {
  const seq = [0, 1, 1, 2, 3, 5]

  for (let i = 0; i < seq.length; i++) {
    it(`should have ${seq[i]} at index ${i}`, () => {
      expect(fibonacci(i)).toBe(seq[i])
    })
  }
})

describe('fibonacciCounter should', () => {
  const seq = [0, 1, 1, 2, 3, 5]

  for (let i = 1; i < seq.length; i++)
    it(`return requested number of first${i - 1 ? ' ' + i : ''} value${
      i - 1 ? 's' : ''
    } of Fibonacci sequence`, () => {
      expect(fibonacciCounter(i)).toEqual(seq.slice(0, i))
    })

  it(`returns an empty array if passed in a 0`, () => {
    expect(fibonacciCounter(0)).toEqual([])
  })
  it(`throws an error if passed a non-numerical parameter`, () => {
    expect(() => fibonacciCounter('a')).toThrow()
    expect(() => fibonacciCounter([])).toThrow()
    expect(() => fibonacciCounter({})).toThrow()
  })
})
