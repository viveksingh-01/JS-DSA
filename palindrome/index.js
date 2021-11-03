function palindrome(str) {
  return str.split('').reverse().join('') === str;
}

module.exports = palindrome;
