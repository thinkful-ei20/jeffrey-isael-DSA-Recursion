'use strict';

let ticks;

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

function countSheep(num, verbose = true, debug = true) {
  if (debug) ticks++;
  if (verbose) console.log(`# 'countSheep(${num})' ran`); // eslint-disable-line no-console

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
countSheep(3);
console.log(`Total Ticks: ${ticks}`); // eslint-disable-line no-console
ticks = 0;
countSheep(30);
console.log(`Total Ticks: ${ticks}`); // eslint-disable-line no-console
