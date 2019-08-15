import User from './'

describe('User should', () => {
  let userData
  beforeEach(() => {
    userData = { firstName: 'Annett', lastName: 'Ball', id: 11 }
  })

  it('create objects with minimum data (`firstName`, `lastName` and `id`)', () => {
    const user1 = new User(userData)
    expect(user1.firstName).toBe(userData.firstName)
    expect(user1.lastName).toBe(userData.lastName)
    expect(user1.id).toBe(userData.id)
    expect(user1.fullName).toBe(`${userData.firstName} ${userData.lastName}`)
  })

  it('create objects with updated data', () => {
    const user1 = new User(userData)
    expect(user1.fullName).toBe(`${userData.firstName} ${userData.lastName}`)
    const middleName = 'Paul'
    const user2 = new User({ ...userData, middleName })
    expect(user2.fullName).toBe(
      `${userData.firstName} ${middleName} ${userData.lastName}`,
    )
    const newFirstName = 'Robert'
    user2.firstName = newFirstName
    expect(user2.fullName).toBe(
      `${newFirstName} ${middleName} ${userData.lastName}`,
    )
  })
})

//Product with productId, name, quantity, unitPrice
