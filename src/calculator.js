class Calculator {
  sum(numbers) {
    return numbers.reduce((acc, number) => {
      return acc += number
    }, 0)
  }

  subtract(numbers) {
    return numbers.reduce((acc, number) => {
      return acc -= number
    }, numbers.shift())
  }

  multiply(numbers) {
    return null
  }

  divide(numbers) {
    return null
  }
}

module.exports = Calculator