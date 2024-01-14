// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // -> true
// console.log("02" > 1); // -> true


// Bad programming
// console.log(null > 0); // -> false
// console.log(null == 0); // -> false
// console.log(null >= 0); // -> true

// console.log(undefined == 0); // -> false
// console.log(undefined > 0); // -> false
// console.log(undefined < 0); // -> false
/*
The reasomn is that an equality check '==' and comparisons '>','<','>=','<=' works differently
Comparisons converts null to a number, treating it as 0(zero)
That's why null >= 0 is true and null > 0 is false
*/


// '==' (lose check) -> just checks the values
console.log("2" == 2); // true

// '===' (strict check) -> checks both values and datatypes
console.log("2" === 2); // -> false