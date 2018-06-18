'use strict';
function stringSplitter(str, seperator){
  let arr = [];
  let index = str.indexOf(seperator);

  if(seperator === '') {
       for(let i = 0; i < str.length; i++){
           arr.push(str[i]);
       }
       return arr;
  }

  while(index !== -1){
      arr.push(str.slice(0,index));
      str = str.slice(index + 1)
      index = str.indexOf(seperator);
      if(index === -1) {
        arr.push(str)
      }
  }
  return arr;
}

console.log(stringSplitter('te s.t', '.'));
