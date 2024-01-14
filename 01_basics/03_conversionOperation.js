let score = undefined //true //null //"33abc"

// console.log(typeof score); // or when use this also -> typeof(score)
// console.log(score);

let convertScore = Number(score)
// console.log(typeof convertScore);
// console.log(convertScore);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0
// null => 0
// undefined => NaN (Not a Number)

let isLoggedIn = "Tinku" //1
let booleanIsLogged = Boolean(isLoggedIn)
// console.log(typeof booleanIsLogged);
// console.log(booleanIsLogged);

// 1 => true, 0 => false
// "" => false
// "Tinku" => true

let someNumber = 33
let stringSomeNumber = String(someNumber)
// console.log(typeof stringSomeNumber);
// console.log(stringSomeNumber);

// ******************Operations**********************
let value = 3
let negvalue = -value
console.log(negvalue);

// Basic operations:
// console.log(2+2);
// console.log(2-2);
// console.log(2*4);
// console.log(2**3); // ** => for finding power of a number
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " tinku"

let str3 = str1 + str2
// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(1 + "2" + 2);
// console.log(3 + 4 * 5 % 6);

// These are bad programming practices, creates confusion
// console.log(+true); // -> 1
// console.log(-true); // -> -1
// console.log(+""); // -> 0
// console.log(-""); // -> -0
// console.log(+"a"); // -> NaN
// console.log(-"a"); // -> NaN
let num1,num2,num3
num1 = num2 = num3 = 2 + 2
// console.table([num1,num2,num3])

let gameCounter = 100
// gameCounter++
++gameCounter
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion