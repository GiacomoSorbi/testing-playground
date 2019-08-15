import factorial from './'

const factorials = [1, 1, 2, 6, 24, 120, 720]

describe('factorial should', () => {
  for (let i = 1; i < factorials.length; i++)
    it(`return the correct factorial value for ${i}`, () => {
      expect(factorial(i)).toBe(factorials[i])
    })
})
