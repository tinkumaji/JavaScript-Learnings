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
    // console.log(a); // -> 10
    // console.log(b); // -> 20
}

// console.log(a); // -> 100
// console.log(b); // -> 200


function one() {
    const username = "tinku";
    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // -> ReferenceError // -> not defined in one() scope
    two();
}

// one(); // -> tinku

if (true) {
    const username = "tinku";
    if (username === "tinku") {
        const website = " youtube";
        // console.log(username + website); // -> tinku youtube
    }
    // console.log(website); // -> ReferenceError // it is not defined in parent if block scope
}

// console.log(username); // -> reference error // not defined in global scope, present in if block scope only.. can't access outside



// +++++++++++++++++ Interesting +++++++++++++++++++

console.log(addOne(5)); // -> 6
function addOne(num) { 
    return num + 1;
}


console.log(addTwo(5)); // -> ReferenceError: Cannot access 'addTwo' before initialization  // Because of hoisting concept
// Anonymous function: (function without any name)
const addTwo = function (num) {
    return num + 2;
}

