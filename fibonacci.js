'use strict';
/*
  input: number e.g. 7
  output: 13
  return 0 if num is 0
  return 1 if num <= 2
  return fib(num-1) + fib(num-2)
*/

function fib(num) {
  if (num <= 0) {
    return 0;
  }

  if (num <= 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
}

console.log(fib(7));
