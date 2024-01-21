const marvel_heroes = ["Thor","Ironman","Spiderman"];
const dc_heroes = ["Superman","Flash","Batman"];
// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); // -> [ 'Thor', 'Ironman', 'Spiderman', ['Superman', 'Flash', 'Batman'] ]
// console.log(marvel_heroes[3][1]); // -> Flash

// const allHeroes = marvel_heroes.concat(dc_heroes); // concat method
// console.log(allHeroes); // -> [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]; //sprerad operator
// console.log(all_new_heroes); // -> [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6,[5, 4]]];
// console.log(another_arr); // -> [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, [ 5, 4 ] ] ]
const real_another_arr1 = another_arr.flat(1); // -> [ 1, 2, 3, 4, 5, 6, 7, 6, [ 5, 4 ] ]
// console.log(real_another_arr1);

const real_another_arr2 = another_arr.flat(2);
// console.log(real_another_arr2); // -> [1, 2, 3, 4, 5, 6, 7, 6, 5, 4]

const real_another_arr3 = another_arr.flat(Infinity);
// console.log(real_another_arr3); // -> // -> [1, 2, 3, 4, 5, 6, 7, 6, 5, 4]


console.log(Array.isArray("Tinku")); // -> false
console.log(Array.from("Tinku")); // -> [ 'T', 'i', 'n', 'k', 'u' ]
console.log(Array.from({
    name : "Tinku",
    age : 23,
})); // -> [] // because when we give an object we should specify what part of the object should be used to form an array, i.e. keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // -> [ 100, 200, 300 ]