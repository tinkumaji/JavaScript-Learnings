// const tinderUser = new Object(); // -> singleton
const tinderUser = {}; // -> non-singleton

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// Nested objects:
const regularUser = {
    email: "tinkumaji@google.com",
    fullname: {
        userfullname: {
            firstname: "tinku",
            lastname: "maji"
        }
    }
};

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname); // -> tinku


// Object.assign():
const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};
const obj3 = {5: 'e', 6: 'f'};
// const obj4 = Object.assign(obj1, obj2, obj3); // normal syntax
// const obj4 = Object.assign({}, obj1, obj2, obj3); // production level syntax

const obj4 = {...obj1, ...obj2}; // using speard operator
// console.log(obj4);


// Array of objects:
const objArr = [
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 2,
        email: "m@gmail.com"
    },
    {
        id: 3,
        email: "d@gmail.com"
    }
];

// console.log(objArr[1].email); // -> m@gmail.com
console.log(Object.keys(tinderUser)); // -> [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // -> [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // -> [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // -> true
console.log(tinderUser.hasOwnProperty('isLogged')); // -> false

