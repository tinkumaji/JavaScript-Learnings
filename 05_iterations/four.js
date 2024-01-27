// For in
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
};

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "cpp", "java"];
for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map();
// map.set("IN","India");
// map.set("USA","United States Of America");
// map.set("Fr","France");

// // Doesn't works on map, because map is not iterable
// for (const key in map) {
//     console.log(key);
// }