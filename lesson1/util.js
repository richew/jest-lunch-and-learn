module.exports.validateDivide = (a, b) => {
  if (b === 0) {
    throw new Error('Cannot divide by 0');
  }
}