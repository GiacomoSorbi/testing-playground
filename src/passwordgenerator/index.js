const lower = 'abcdefghijklmnopqrstuvwxyz'
const upper = lower.toUpperCase()
const number = '0123456789'
const symbol = '!£$%^&*()-_=+[]{}#~?.,'
export const all = lower + upper + number + symbol

const passwordGenerator = () => {
  let password = []

  password.push(getRandomValue(lower))
  password.push(getRandomValue(upper))
  password.push(getRandomValue(number))
  password.push(getRandomValue(symbol))

  for (let i = 0; i < 4 + Math.random() * 10; i++) {
    password.push(getRandomValue(all))
  }

  for (let i = password.length, j; i; ) {
    j = Math.floor(Math.random() * i)
    ;[password[i], password[j]] = [password[j], password[--i]]
  }

  return password.join('')
}

function getRandomValue(type) {
  return type[Math.floor(Math.random() * type.length)]
}

export default passwordGenerator
