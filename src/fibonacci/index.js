const fibStore = { 0: 0, 1: 1 }

const fibonacci = n => {
  // iterative solution below:
  // let arr = [0, 1]
  // for (let i = 2; i < n + 1; i++) {
  //   arr.push(arr[i - 2] + arr[i - 1])
  // }
  // return arr[n]
  // }

  return n <= 2
    ? Number(Boolean(n))
    : (fibStore[n - 1] || (fibStore[n - 1] = fibonacci(n - 1))) +
        (fibStore[n - 2] || (fibStore[n - 2] = fibonacci(n - 2)))
}

export default fibonacci

export const fibonacciCounter = n => {
  if (n < 0 || n % 1) {
    throw new Error('Must be a positive integer')
  } else {
    n = parseInt(n)
  }

  if (isNaN(n)) {
    throw new Error('Must be an integer')
  }

  let fibSum = [0, 1]
  if (n <= 1) {
    return [0, 1].slice(0, n)
  } else {
    for (let i = 2; i < n; i++) {
      fibSum.push(fibSum[i - 2] + fibSum[i - 1])
    }
  }
  return fibSum
}
