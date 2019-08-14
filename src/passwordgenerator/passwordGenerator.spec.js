import passwordGenerator, { all } from './'

describe('password generator should', () => {
  it('return a string', () => {
    expect(typeof passwordGenerator()).toBe('string')
  })

  it('return password with length of 8 or more', () => {
    expect(passwordGenerator().length).toBeGreaterThanOrEqual(8)
  })

  it('have password with at least 1 uppercase letter', () => {
    expect(passwordGenerator()).toMatch(/[A-Z]/)
  })

  it('have password with at least 1 lowercasse letter', () => {
    expect(passwordGenerator()).toMatch(/[a-z]/)
  })

  it('have password with at least 1 number', () => {
    expect(passwordGenerator()).toMatch(/\d/)
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

  it('uses all the available characters', () => {
    const set = new Set()

    for (let i = 0; i < 100; i++) {
      const password = passwordGenerator()
      Array.from(password).forEach(char => {
        set.add(char)
      })
    }

    expect(set.size).toBe(all.length)
  })
})
