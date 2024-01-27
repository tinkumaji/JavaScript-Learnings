// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }

// console.log(a); // -> error // beacuse let is block scoped
// console.log(b); // -> error // beacuse const is block scoped
// console.log(c); // -> 30 // var is function scoped

// var c = 300;
// if (true) {
// //   let a = 10;
// //   const b = 20;
//   var c = 30; // Global c is being changed
// }

// console.log(c); // -> 30


let a = 100;
const b = 200;

if (true) {
    // Doesn't change the global variable value
    let a = 10;
    const b =20;
    console.log(a); // -> 10
    console.log(b); // -> 20
}

console.log(a); // -> 100
console.log(b); // -> 200