'use strict';

function anagrams(prefix, str) {
  if (str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      let currentLetter = str.substring(i, i + 1);
      let previousLetters = str.substring(0, i);
      let afterLetters = str.substring(i + 1);
      anagrams(prefix + currentLetter, previousLetters + afterLetters);
    }
  }
}
function printAnagram(word) {
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

printAnagram('east');

// function anagrams(prefix, str) {
//   if (str.length <= 1) {
//     return prefix + str;
//   }
//   else {
//     for (let i = 0; i < str.length; i++) {
//       return anagrams(word.substring(0, 1), word.substring(i));
//     }
//   }
// }

// const word = 'east';
// console.log(word.substring(0, 1));
// console.log(word.substring(1));

// anagrams(word.substring(0, 1), word.substring(1));
