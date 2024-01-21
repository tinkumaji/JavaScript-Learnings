const myArr = [0, 1 , 2 , 3, 4, 5];
const myHeroes = ["Batman","Superman","Spiderman"];
const myArr2 = new Array(1, 2 , 3, 4, 5);

// console.log(myArr2[1]);


// Array Methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

let newArr = myArr.join('-');
// console.log(myArr);
// console.log(typeof myArr); // -> object
// console.log(newArr);
// console.log(typeof newArr); // -> string

console.log("A ", myArr); // -> A [0, 1, 2, 3, 4, 5]
let myn1 = myArr.slice(1,3); // doesn't modify the original array, start = 1 & end < 3
console.log(myn1); // -> [1, 2]
console.log("B ", myArr); // -> B [0, 1, 2, 3, 4, 5]

let myn2 = myArr.splice(1,3); // modifies the original array, start = 1, end = 3
console.log("C ", myArr); // -> C [0, 4, 5]
console.log(myn2); // -> [1, 2, 3]
