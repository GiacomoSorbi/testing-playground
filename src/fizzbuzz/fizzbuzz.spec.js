import fizzbuzz, { fizzbuzzCounter, recursiveFizzBuzz } from './'
import { descriptions } from 'jest-config'

describe('fizzbuzz should', () => {
  it('exist', () => {
    expect(fizzbuzz).toBeDefined()
  })

  it('return fizz on multiple of 3 but not multiple of 5', () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(15)).not.toBe('fizz')
  })

  it('return buzz on multiple of 5 bubt not multiple of 3', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(15)).not.toBe('buzz')
  })

  it('return fizzbuzz on multipless of 3 AND 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(5)).not.toBe('fizzbuzz')
    expect(fizzbuzz(3)).not.toBe('fizzbuzz')
  })

  it('return the  number on number that is not multiple of 3 of 5', () => {
    expect(fizzbuzz(1)).toBe(1)
    expect(fizzbuzz(2)).toBe(2)
    expect(fizzbuzz(5)).not.toBe(5)
    expect(fizzbuzz(3)).not.toBe(3)
    expect(fizzbuzz(7)).toBe(7)
  })

  it('not accept 0', () => {
    expect(() => fizzbuzz(0)).toThrow('oh no')
  })
})

describe('fizzbuzzCounter should', () => {
  it('exist', () => {
    expect(fizzbuzzCounter).toBeDefined()
  })
  it('return an array of a certain length', () => {
    expect(fizzbuzzCounter(10)).toHaveLength(10)
  })
  it('return an error', () => {
    expect(() => fizzbuzzCounter(0.5)).toThrow()
    expect(() => fizzbuzzCounter(-6)).toThrow()
  })
  it('return correct values in the array', () => {
    expect(fizzbuzzCounter(5)).toEqual([1, 2, 'fizz', 4, 'buzz'])
    expect(fizzbuzzCounter(15)).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz',
    ])
  })
})

describe('recursive version', () => {
  it('return the correct length of the array', () => {
    expect(recursiveFizzBuzz(15)).toHaveLength(15)
  })
})
