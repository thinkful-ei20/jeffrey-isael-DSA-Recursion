'use strict';
/*
    input = 5
    output = 120
    factorial is multiplying each number between input and 1
    5*4*3*2*1 = 120
*/
function factorial(num) {
  if (num === 0) return 1;
  //if(num === 1) return 1;//should stop when it reaches zero

  return num * factorial(num - 1);// multiply the num with the return function that has num-1
}

console.log(factorial(5));