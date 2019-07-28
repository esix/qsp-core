var compileQSPCode = require('../lib/index').compileQSPCode;

test('numbers to parse to numbers', () => {
  expect(compileQSPCode('1')).toBe(1);
  expect(compileQSPCode('0')).toBe(0);
  expect(compileQSPCode('-1')).toBe(-1);
});