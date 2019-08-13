const fizzbuzz = n => {
  if (typeof n === 'number' && !Number.isNaN(n) && n > 0 && !(n % 1)) {
    if (n % 3 === 0 && n % 5 === 0) return 'fizzbuzz'
    else if (n % 5 === 0) return 'buzz'
    else if (n % 3 === 0) return 'fizz'
    return n
  }
  throw new Error('oh no')
}

export const fizzbuzzCounter = n => {
  if (n < 0 || typeof n !== 'number' || n % 1) {
    throw new Error('Not a number')
  }
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(fizzbuzz(i))
  }
  return arr
}

export const recursiveFizzBuzz = n => {
  /*if (start > finish) {
    return arr
  }

  arr.push(fizzbuzz(start))

  return recursiveFizzBuzz(start + 1, finish, arr)*/
  /*if (n === 0) return []
  else return recursiveFizzBuzz(n - 1).concat(fizzbuzz(n))*/

  return n ? recursiveFizzBuzz(n - 1).concat(fizzbuzz(n)) : []
}

export default fizzbuzz
