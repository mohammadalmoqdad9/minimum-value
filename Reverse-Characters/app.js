'use strict';

function ReverseCharacters(str) {
  let reversed = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// example
console.log(ReverseCharacters("Javascript")); // Output: tpircsavaJ
console.log(ReverseCharacters("style")); // Output: elyts
console.log(ReverseCharacters("nadrOJ")); // Output: JOrdan
console.log(ReverseCharacters("abc564")); // Output: 465cba