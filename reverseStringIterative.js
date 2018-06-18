'use strict';
function reverseString(str){
    let length = str.length;
    let result = '';

    for(let i = 0; i < length; i++){
        result = str[0] + result;
        str = str.slice(1);
    }
    
    return result;
}

console.log(reverseString('howdy'));