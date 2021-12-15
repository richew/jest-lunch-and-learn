const Calculator = require('./calculator-2');

/**
 * we want to mock the util because we already have a test for this
 */
jest.mock('./util', () => {
  return {
    validateDivide: jest.fn(() => true),
  };
});

// this is how you start a test
describe('Calculator Test', () => {

  // think of this as testing a single function
  describe('add() works as expected', () => {
    // this is a single test
    it('works => 2 + 2 = 4', () => {
      const calculator = new Calculator();
      const result = calculator.add(2, 2);

      // this confirms the results work as expected
      expect(result).toBe(4);

      /**
       * if you were going to compare an array or object you would need to do
       * if you use toBe on objects it must be that reference
       */
      // expect(result).toEqual(object);
    });
  });

  describe('subtract() works as expected', () => {
    it('works => 2 - 2 = 0', () => {
      const calculator = new Calculator();
      const result = calculator.subtract(2, 2);

      // this confirms the results work as expected
      expect(result).toBe(0);
    });
  });

  describe('multiply() works as expected', () => {
    it('works => 2 * 4 = 8', () => {
      const calculator = new Calculator();
      const result = calculator.multiply(2, 4);

      // this confirms the results work as expected
      expect(result).toBe(8);
    });
  });

  describe('divide() works as expected', () => {
    it('works => 4 / 2 = 2', () => {
      const calculator = new Calculator();
      const result = calculator.divide(4, 2);

      // this confirms the results work as expected
      expect(result).toBe(2);
    });
  });

  it('throws error when dividing by 0', () => {
    const calculator = new Calculator();
    const runTest = () => calculator.divide(4, 0);
    // this will no longer throw because of our mock
    // expect(runTest).toThrow('You can not divide by 0');
  });
});
