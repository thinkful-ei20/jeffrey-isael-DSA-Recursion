'use strict';
/*
    input number ex = 3
    output = 11
    if 0 should return 0
    number / 2 = 1 | number % 2 = 1
    number / 2 = 0 | number % 2 = 1
*/

function binaryRepresentation(num) {
  // if (num === 0) { // if num is === 0
  //   return '';
  // }

  // if (isNaN(num / num)) {
  //   return 0; // if the number is zero 
  // }

  if (num > 0) {
    let binary = Math.floor(num % 2); // binary string

    return binaryRepresentation(Math.floor(num / 2)) + binary;// return binary
  }

  return '';
}

console.log(binaryRepresentation(25));