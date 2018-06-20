'use strict';

let ticks;
let input;
let output;


/*================================================================================
Exercise 1 - Counting Sheep

Write a recursive function that counts how many sheep jumps over the fence.
Your program should take a number as an input.
That number should be the number of sheep you have.
The function should display the number along with the message "Another sheep jump over the fence" until no more sheep are left.

Input: 3
Output:
    3 - Another sheep jump over the fence
    2 - Another sheep jump over the fence
    1 - Another sheep jump over the fence
*/

function countSheep(num, verbose = false, debug = true) {
  if (verbose) console.log(`#- 'countSheep(num=${num})' ran`); // eslint-disable-line no-console
  if (debug) ticks++;


  // base case
  if (num === 0) {
    console.log('No more sheep left to jump over the fence!'); // eslint-disable-line no-console
  }
  else {
    console.log(`${num}: Another sheep jumps over the fence.`); // eslint-disable-line no-console
    countSheep(--num);
  }
}

ticks = 0;
input = 3;
countSheep(input);
console.log(`\n#- Total Ticks: ${ticks}`); // eslint-disable-line no-console
console.log(`Input: ${input}\n`); // eslint-disable-line no-console
ticks = 0;
input = 30;
countSheep(input);
console.log(`\n#- Total Ticks: ${ticks}`); // eslint-disable-line no-console
console.log(`Input: ${input}\n`); // eslint-disable-line no-console


/*================================================================================
Exercise 2 - Array Double

Write a function that takes an array as input which contains an unknown set of numbers, and outputs an array with each input value doubled.
Test your solution by trying a handful of different arrays. For example,

Input: [1, 2, 3]
Output: [2, 4, 6]
*/

function doubleArray(arr, verbose = true, debug = true) {
  if (verbose) console.log(`#- 'doubleArray(arr=[${arr}])' ran`); // eslint-disable-line no-console
  if (debug) ticks++;


  // base case
  if (!arr.length) {
    return [];
  }
  return [arr[0] * 2, ...doubleArray(arr.slice(1))];
}

ticks = 0;
input = [1, 2, 3];

output = doubleArray(input);
console.log(`\n#- Total Ticks: ${ticks}`); // eslint-disable-line no-console
console.log(`Input: ${input}`); // eslint-disable-line no-console
console.log(`Output: ${output}\n`); // eslint-disable-line no-console
ticks = 0;
input = [10, 20, 30, 40, 50, 60];
output = doubleArray(input);
console.log(`\n#- Total Ticks: ${ticks}`); // eslint-disable-line no-console
console.log(`Input: ${input}`); // eslint-disable-line no-console
console.log(`Output: ${output}\n`); // eslint-disable-line no-console


/*================================================================================
Exercise 3 - Reverse String

Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

Input: Word
Output: droW
*/

function reverseString(str, verbose = true, debug = true) {
  if (verbose) console.log(`#- 'reverseString(str="${str}")' ran`); // eslint-disable-line no-console
  if (debug) ticks++;
  

  // base case
  if (str.length < 2) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

ticks = 0;
input = 'Word';
output = reverseString(input);
console.log(`\n#- Total Ticks: ${ticks}`); // eslint-disable-line no-console
console.log(`Input: ${input}`); // eslint-disable-line no-console
console.log(`Output: ${output}\n`); // eslint-disable-line no-console
ticks = 0;
input = 'Hello Thinkful';
output = reverseString(input);
console.log(`\n#- Total Ticks: ${ticks}`); // eslint-disable-line no-console
console.log(`Input: ${input}`); // eslint-disable-line no-console
console.log(`Output: ${output}\n`); // eslint-disable-line no-console


/*================================================================================
Exercise 4 - nth Triangular Number

Calculates the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle.
The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n.
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
                          *
            *           *    *
*     |   *   *  |   *    *    *  |
 1st     2nd             3rd             nth?  
1st trianular number = 1
2nd = (1+2) = 3
3rd = (1+2+3) = 6 
5th = (1+2+3+4+5) = 15
Input: 5
Output: 15

*/

function nthTriangle(n, verbose = true, debug = true) {
  if (verbose) console.log(`#- 'nthTriangle(n=${n})' ran`); // eslint-disable-line no-console
  if (debug) ticks++;


  // base case
  if (n < 2) {
    return n;
  }
  return n + nthTriangle(--n);
}

ticks = 0;
input = 5;
output = nthTriangle(input);
console.log(`\n#- Total Ticks: ${ticks}`); // eslint-disable-line no-console
console.log(`Input: ${input}`); // eslint-disable-line no-console
console.log(`Output: ${output}\n`); // eslint-disable-line no-console

ticks = 0;
input = 50;
output = nthTriangle(input);
console.log(`\n#- Total Ticks: ${ticks}`); // eslint-disable-line no-console
console.log(`Input: ${input}`); // eslint-disable-line no-console
console.log(`Output: ${output}\n`); // eslint-disable-line no-console
