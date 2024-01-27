// For of:
let arr = [1,2,3,4,5];
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(`Value is ${greet}`);
}

const map = new Map(); // stores unique values and maintains the order of storing
map.set("IN","India");
map.set("USA","United States Of America");
map.set("Fr","France");
// map.set("IN","India"); // map will not take this value because it is already present

// console.log(map); 
/* -> Map(3) {
    'IN' => 'India',
    'USA' => 'United States Of America',
    'Fr' => 'France'
  }
*/

for (const key of map) {
    // console.log(key);
}
/* -> // In the form of Array
[ 'IN', 'India' ]
[ 'USA', 'United States Of America' ]
[ 'Fr', 'France' ]
*/

for (const [key, value] of map) {
    console.log(key,":- ", value);
}
/* ->
IN :-  India
USA :-  United States Of America
Fr :-  France
*/

// const myObject = {
//     js: "JavaScript",
//     cpp: "C++",
//     rb: "Ruby",
//     py: "Python"
// };
// // for-of loop doesn't works on Objects
// for (const key of myObject) {
//   console.log(key); // -> TypeError: myObject is not iterable
// }