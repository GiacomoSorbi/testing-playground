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
