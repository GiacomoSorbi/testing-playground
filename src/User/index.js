class User {
  constructor({ firstName, middleName, lastName, id }) {
    this.firstName = firstName
    this.middleName = middleName
    this.lastName = lastName
    this.id = id
  }

  get fullName() {
    return `${this.firstName} ${this.middleName ? this.middleName + ' ' : ''}${
      this.lastName
    }`
  }
}

export default User
