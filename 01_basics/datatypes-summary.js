// JavaScript is a dynamically typed language

/*
According to how we keep data in the memory and how we access it, we can categorize datatypes into 2 types: Primitive and Reference
*/

// 1) Primitive:
// 7 types -> String, Number, Boolean, null, undefined, Symbol, BigInt
// Examples:
const score = 100
const decimalNumber = 100.02
const name = "Tinku"
const isLogged = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId); // -> false
// console.log(id === anotherId); // -> false

const bigNumber = 1498649648948644874548542n
// console.log(bigNumber);
console.log(typeof bigNumber); // -> bigint


// 2) Reference (Non-Primitive):
// 3 types -> Array, Objects, Functions
// Examples:

let heros = ["Captain America", "Iron Man", "Black Panther"]

const myObj = {
    name: "Tinku",
    age: 23
}

let myFunction = function () {
    console.log("Hello World!");
}

console.log(typeof heros); // -> object
console.log(typeof myObj); // -> object
console.log(typeof myFunction); // -> function (object function)

/*
Link: https://262.ecma-international.org/5.1/#sec-11.4.3
*/
