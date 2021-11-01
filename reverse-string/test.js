const reverseString = require('./index');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('reverseString reverses a string', () => {
  expect(reverseString('abcd')).toEqual('dcba');
});

test('reverseString reverses a string', () => {
  expect(reverseString(' abcd')).toEqual('dcba ');
});
