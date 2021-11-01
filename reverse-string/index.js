// SOLUTION - 1
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// SOLUTION - 2
// function reverseString(str) {
//   let reversedString = '';
//   for (const char of str) {
//     reversedString = char + reversedString;
//   }
//   return reversedString;
// }

// SOLUTION - 3
function reverseString(str) {
  return str.split('').reduce((reversedString, char) => char + reversedString, '');
}

module.exports = reverseString;
