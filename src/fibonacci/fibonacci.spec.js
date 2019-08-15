import fibonacci, { fibonacciCounter } from './'

const seq = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

describe('fibonacci should', () => {
  for (let i = 0; i < seq.length; i++) {
    it(`should have ${seq[i]} at index ${i}`, () => {
      expect(fibonacci(i)).toBe(seq[i])
    })
  }
})

describe('fibonacciCounter should', () => {
  for (let i = 1; i < seq.length; i++)
    it(`return requested number of first${i - 1 ? ' ' + i : ''} value${
      i - 1 ? 's' : ''
    } of Fibonacci sequence`, () => {
      expect(fibonacciCounter(i)).toEqual(seq.slice(0, i))
    })

  it('returns an empty array if passed in a 0', () => {
    expect(fibonacciCounter(0)).toEqual([])
  })

  it('throws an error if passed a non-numerical parameter', () => {
    expect(() => fibonacciCounter('a')).toThrow('Must be an integer')
    expect(() => fibonacciCounter('24a')).toThrow('Must be an integer')
    expect(() => fibonacciCounter()).toThrow('Must be an integer')
    expect(() => fibonacciCounter([])).toThrow('Must be an integer')
    expect(() => fibonacciCounter({})).toThrow('Must be an integer')
  })

  it('throws an error for non positive integers', () => {
    expect(() => fibonacciCounter(-4)).toThrow('Must be a positive integer')
    expect(() => fibonacciCounter(3.7)).toThrow('Must be a positive integer')
  })
})
