const Calculator = require('./calculator')
const calc = new Calculator()

describe('Testes para calculadora', () => {
  it('Deve retornar 10 quando somarmos os números 5 e 5', () => {
    const numbers = [5, 5]
    expect(calc.sum(numbers)).toEqual(10)
  })

  it('Deve retornar 2 quando subtrairmos os números 10, 5, 3', () => {
    const numbers = [10, 5, 3]
    expect(calc.subtract(numbers)).toEqual(2)
  })

  it('Deve retornar 25 quando multiplicarmos os números 5 e 5', () => {
    const numbers = [5, 5]
    expect(calc.multiply(numbers)).toEqual(25)
  })

  it('Deve retornar 2 quando dividirmos os números 4 e 2', () => {
    const numbers = [4, 2]
    expect(calc.divide(numbers)).toEqual(2)
  })
})