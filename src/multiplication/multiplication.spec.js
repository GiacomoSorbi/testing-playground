import multiplication from './'

// main block - the "family" of tests
describe('multiplication should', () => {
  // sub blocks, all the features we want to test
  it('exist', () => {
    expect(multiplication).toBeDefined()
  })

  it('return the correct values when passed numbers', () => {
    expect(multiplication(2, 3)).toBe(6)
    expect(multiplication(0, 3)).toBe(0)
    expect(multiplication(2, 0)).toBe(0)
    expect(multiplication(-2, 3)).toBe(-6)
    expect(multiplication(2, -3)).toBe(-6)
    expect(multiplication(-2, -3)).toBe(6)
    expect(multiplication(2.5, 3)).toBe(7.5)
  })

  it('throw an error when missing parameters', () => {
    expect(() => multiplication(3)).toThrow('missing parameter(s)')
    expect(() => multiplication()).toThrow('missing parameter(s)')
    expect(() => multiplication('pippi')).toThrow('missing parameter(s)')
  })

  it('throw an error when passed wrong parameters type', () => {
    expect(() => multiplication('', '')).toThrow('parameters of the wrong type')
    expect(() => multiplication('2', '5')).toThrow(
      'parameters of the wrong type',
    )
    expect(() => multiplication(2, [])).toThrow('parameters of the wrong type')
    expect(() => multiplication({}, 4)).toThrow('parameters of the wrong type')
    expect(() => multiplication(NaN, 4)).toThrow('parameters of the wrong type')
    expect(() => multiplication(Symbol('pippi'), 4)).toThrow(
      'parameters of the wrong type',
    )
    expect(() => multiplication([2], [3])).toThrow(
      'parameters of the wrong type',
    )
  })
})
