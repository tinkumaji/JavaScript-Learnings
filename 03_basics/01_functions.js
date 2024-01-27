function sayMyName() {
    console.log("T");
    console.log("i");
    console.log("n");
    console.log("k");
    console.log("u");
}

// sayMyName();

function addTwoNumbers1(number1, number2) {
    console.log(number1 + number2);
}

// addTwoNumbers1(); // -> NaN
// addTwoNumbers1(5,7); // -> 12
// addTwoNumbers1(3,"4"); // -> 34
// addTwoNumbers1(3,"a"); // -> 3a
// addTwoNumbers1(3,null); // -> 3

// let result1 = addTwoNumbers1(3,4);
// console.log(result1); // -> undefined


function addTwoNumbers2(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

// const result2 = addTwoNumbers2(5,9);
// console.log(result2);


function logInUserMessage(username = "sam") { // -> by default value
    if(!username) {     // Here, !username == (username === undefined)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(logInUserMessage("Tinku")); // -> Tinku just logged in
// console.log(logInUserMessage()); // -> undefined just logged in
// console.log(logInUserMessage()); // -> undefined
// console.log(logInUserMessage()); // sam just logged in
// console.log(logInUserMessage("Rams")); // -> Rams just logged in // It overrides the default value if we provide value in arguments


function calculateCartPrice(val1, val2, ...num1) {  // -> '...num1' converts values in array format  // '...' : rest operator
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); // -> [200, 400, 500, 20000];
// console.log(calculateCartPrice(200, 400, 500, 2000)); // -> [500, 2000]


const user = {
    username: "Tinku",
    price: 199
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

// handleObject({
//     username: "Kuntal",
//     price: 299
// });


const myNewArr = [20, 30, 40, 50, 60];

function returnSecondElement(getArray) {
    return getArray[1];
}

let ans = returnSecondElement(myNewArr);
console.log(ans); // -> 30