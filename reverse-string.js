'use strict';

function reverseString(str) {
  if (str === '') {
    return '';
  }

  const lastChar = str.slice(-1);

  return lastChar + reverseString(str.slice(0, -1));
}

console.log(reverseString('string')); // eslint-disable-line no-console
