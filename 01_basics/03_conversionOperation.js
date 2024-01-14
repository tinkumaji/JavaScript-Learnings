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
// undefined => NaN

let isLoggedIn = "Tinku" //1
let booleanIsLogged = Boolean(isLoggedIn)
// console.log(typeof booleanIsLogged);
// console.log(booleanIsLogged);

// 1 => true, 0 => false
// "" => false
// "Tinku" => true

let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(typeof stringSomeNumber);
console.log(stringSomeNumber);