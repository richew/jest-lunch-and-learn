class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract (a, b) {
    return a - b;
  }

  multiply (a, b) {
    return a * b;
  }

  divide (a, b) {
    if (b === 0) {
      throw Error('You can not divide by 0');
    }
    return a / b;
  }
}

module.exports = Calculator;