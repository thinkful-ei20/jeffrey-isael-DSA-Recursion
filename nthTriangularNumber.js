'use strict';

function nthTriangularNumber(num){
  if(num === 0) return 0;

  return num + nthTriangularNumber(num-1);// eslint-disable-line no-console
}

console.log(nthTriangularNumber(1));
console.log(nthTriangularNumber(3));
console.log(nthTriangularNumber(7));
console.log(nthTriangularNumber(9));