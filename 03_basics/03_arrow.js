const user = {
    username: "tinku",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to our website`); // this refers to the current context
        console.log(this);
    }
}

// user.welcomeMessage(); // tinku, welcome to our website
// user.username = "Sam"; // username changed to sammy
// user.welcomeMessage(); // sammy, welcome to our website

// console.log(this); // -> {} (empty object in Node environment) // but in browser 'this' keyword refers tio window object


// function one() {
//     let username = "tinku";
//     // console.log(this); // -> ....etc
//     console.log(this.username); // -> undefined // 'this' doesn't works inside functions
// }

// Anonymus function:
// let one = function () {
//     let username = "tinku";
//     console.log(this); // -> .....etc
//     console.log(this.username); // undefined
// }

// Arrow function: (Introduced in ES6)
let one = () => {
    let username = "tinku";
    console.log(this); // -> {} (empty object in arrow function)
    console.log(this.username); // -> undefined
}
// one();


// if we use curly braces then we have to use return keyword
// explicit return
// let addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return (without curly braces and without return keyword)
// Mostly used in React.js **
// let addTwo = (num1, num2) => num1 + num2;
// let addTwo = (num1, num2) => (num1 + num2); // we can use parenthisis to return

// let addTwo = (num1, num2) => {username: "tinku"}; // -> undefined // beacuse we didn't use parenthesis while returning object **
let addTwo = (num1, num2) => ({username: "tinku"}); // -> { username: 'tinku' } // to implicitly return an object we have to use parenthesis **

// console.log(addTwo(3,4)); // -> 7