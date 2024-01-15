let name = "Tinku";
let repoCount = 6;

// console.log(name + repoCount + " values"); // not recommended

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`); // String interpolation
// `` -> Template Literals, ${variableName} -> for varibales

const gameName = new String('tinku-tm-com');
// console.log(gameName);
// console.log(gameName[0]); // -> t
// console.log(gameName.__proto__); // -> {} (object)
// console.log(gameName.toUpperCase()); // -> TINKUTM
// console.log(gameName.charAt(4)); // -> u
// console.log(gameName.indexOf('m')); // -> 6

const newString = gameName.substring(0, 4); // we cannot give neg values in substring, if we gie also it will start from 0
// console.log(newString); // -> tink

const anotherString = gameName.slice(-7, 4); // in slice we can give neg values
// console.log(anotherString); // -> ink

const newStringOne = "    tinku    ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); // trim() is used to neglect the spaces

const url = 'https://tinku.com/tinku%20maji';
// console.log(url);
// console.log(url.replace('%20','-')); // used to replace a char or string

// console.log(url.includes('maji')); // -> true
// console.log(url.includes('rams')); // -> false

console.log(gameName.split('-'));// -> [ 'tinku', 'tm', 'com' ]

// Read more about strings from MDN Docs 