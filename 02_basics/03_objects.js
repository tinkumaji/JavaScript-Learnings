// singleton -> Objects made using constructors
// Object.create -> using constructors

// Object literals:
let mySym = Symbol("key1");
const JsUser = {
    name: "Tinku",
    "full name": "Tinku Maji", // key can also be string
    [mySym]: "mykey1", // syntax for Symbol
    age: 23,
    location: "Bangalore",
    email: "tinkumaji@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
};

// console.log(JsUser.name); // -> Tinku
// console.log(JsUser["location"]); // -> Bangalore
// console.log(JsUser["full name"]); // -> Tinku Maji
// console.log(JsUser[mySym]); // -> mykey1
// console.log(typeof JsUser[mySym]); // -> string

JsUser.email = "tinkunmaji@chatgpt.com";
// console.log(JsUser.email);
// Object.freeze(JsUser); // To lock the object from doing changes on it
// JsUser.email = "tinkumaji@microsoft.com";

// console.log(JsUser);

JsUser.greeting = function () {
    console.log(`Hello JS User`);
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting); // -> [Function (anonymous)]
console.log(JsUser.greeting()); // -> Hello JS User // -> undefined

console.log(JsUser.greetingTwo()); // 'this': refers to the current object // -> Hello JS User, Tinku // ->undefined

console.log(JsUser);