import randomCharacter from './'

describe('randomCharacter should', () => {
  it('take one character from the provided string', () => {
    let base = 'abcdefgh'
    expect(base).toContain(randomCharacter(base))
    expect(randomCharacter(base)).toHaveLength(1)
    base = '0123456789'
    expect(base).toContain(randomCharacter(base))
    expect(randomCharacter(base)).toHaveLength(1)
  })

  it('take one random character from the provided string', () => {
    const frequencyDictionary = {}
    const base = 'abcdefgh'
    for (let i = 0; i < 1000; i++) {
      const newChar = randomCharacter(base)
      frequencyDictionary[newChar] = (frequencyDictionary[newChar] || 0) + 1
    }
    for (let c of base) expect(frequencyDictionary[c]).toBeDefined()
  })
  it('take one random character from the provided string', () => {
    const frequencyDictionary = {}
    const base = 'abcdefgh'
    for (let i = 0; i < 10000; i++) {
      const newChar = randomCharacter(base)
      frequencyDictionary[newChar] = (frequencyDictionary[newChar] || 0) + 1
    }
    for (let c of base) expect(frequencyDictionary[c]).toBeGreaterThan(1000)
  })
})
