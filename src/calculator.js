class Calculator {
  sum(numbers) {
    return numbers.reduce((acc, number) => {
      return acc += number
    }, 0)
  }

  subtract(numbers) {
    return null
  }

  multiply(numbers) {
    return null
  }

  divide(numbers) {
    return null
  }
}

module.exports = Calculator