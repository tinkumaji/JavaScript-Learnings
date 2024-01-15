const score = 400;
// console.log(score); // -> 400

const balance = new Number(100);
// console.log(balance); // -> 

// console.log(balance.toString()); // toString is used to convert nuber into string
// console.log(balance.toString().length); // -> 3
// console.log(balance.toFixed(2)); // -> 100.00

// toPrecision():
const otherNumber1 = 23.8966;
// console.log(otherNumber1.toPrecision(3)); // -> 23.9

const otherNumber2 = 123.8966;
// console.log(otherNumber2.toPrecision(3)); // -> 124

const otherNumber3 = 1124.8966;
// console.log(otherNumber3.toPrecision(3)); // -> 1.12e+3


const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // -> 1,000,000 // US standards
// console.log(hundreds.toLocaleString('en-IN')); // -> 10,00,000 // Indian standards



// +++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math);  // -> Object [Math] {}
// console.log(Math.abs(-4)); // -> 4
// console.log(Math.round(4.5)); // -> 5
// console.log(Math.ceil(4.2)); // -> 5
// console.log(Math.floor(4.9)); // -> 4
// console.log(Math.min(4,7,2,9)); // -> 2
// console.log(Math.max(4,7,2,9)); // -> 9

// console.log(Math.random()); // generates random values between 0-1
// console.log(Math.random() * 10); // to get values till a certain number
// console.log((Math.random()*10) + 1); // adding 1 to avoid 0 
console.log(Math.floor((Math.random()*10)) + 1); // to neglect decimal values

// Important formula: (To get random values within min to max range)
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min +1)) + min);