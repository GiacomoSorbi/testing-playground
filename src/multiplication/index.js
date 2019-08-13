const multiplication = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error('missing parameter(s)')
  }
  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  ) {
    throw new Error('parameters of the wrong type')
  }
  return a * b
}

export default multiplication
