import passwordGenerator from './'

describe('password generator should', () => {
  it('return a string', () => {
    expect(typeof passwordGenerator()).toBe('string')
  })

  it('return password with length of 8 or more', () => {
    expect(passwordGenerator().length).toBeGreaterThanOrEqual(8)
  })

  it('have password with at least 1 uppercase letter', () => {
    expect(/[A-Z]/.test(passwordGenerator())).toBe(true)
  })

  it('have password with at least 1 lowercasse letter', () => {
    expect(/[a-z]/.test(passwordGenerator())).toBe(true)
  })

  it('have password with at least 1 number', () => {
    expect(/[0-9]/.test(passwordGenerator())).toBe(true)
  })

  it('have password with at least 1 symbol', () => {
    expect(/[^A-Za-z0-9]/.test(passwordGenerator())).toBe(true)
  })

  it('not generate duplicates', () => {
    const set = new Set()

    for (let i = 0; i < 10000; i++) {
      set.add(passwordGenerator())
    }

    expect(set.size).toBeGreaterThan(9999)
  })
})
