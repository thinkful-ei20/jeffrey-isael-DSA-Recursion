'use strict';
function arrDouble(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2;
    }
    return arr;
}

console.log(arrDouble([1,2,3,5]));