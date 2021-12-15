const {validateDivide} = require("./util");

describe('Utils', () => {
  describe('validateDivide() works as expected', () => {
    it('does not throw error when not dividing by 0', () => {
      const runner = () => {
        validateDivide(1, 2);
      }
      expect(runner).not.toThrow();
    });

    it('does throw error when dividing by 0', () => {
      const runner = () => {
        validateDivide(1, 0);
      }
      expect(runner).toThrow('Cannot divide by 0');
    });
  })
})