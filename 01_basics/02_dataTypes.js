"use strict"; // treat all JS code as new version

// alert(3 + 3) // doesn't work on nodejs // works on browser only

console.log(3
    +
     3); // bad programming practice // code readability should be high

console.log("Tinku")

let name = "Tinku"
let age = 23
let isLoggesIn = true
let state;
// console.log(name); 

// number => range: 2^53
// bigint => if the range is more than range of number
// string => "" or ''
// boolean => true or false
// null => standalone value
// undefined => 
// symbol => defines uniqueness (mostly used in React.js)


// object
console.log(typeof null); // -> object
// array

console.log(typeof "Tinku"); // -> string
console.log(typeof age); // -> number
console.log(typeof isLoggesIn); // -> boolean
console.log(typeof state); // -> undefined
console.log(typeof undefined); // -> undefined