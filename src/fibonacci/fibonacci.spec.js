import fibonacci from './'

describe('fibonacci should', () => {
  const seq = [0, 1, 1, 2, 3, 5]

  for (let i = 0; i < seq.length; i++) {
    it(`should have ${seq[i]} at index ${i}`, () => {
      expect(fibonacci(i)).toBe(seq[i])
    })
  }
})
