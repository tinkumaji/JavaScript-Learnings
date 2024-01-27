// forEach loop
const myCoding = ["js","ruby","java","python","cpp"];

// Using Anonymous function 
myCoding.forEach( function (val) {
    // console.log(val);
})

// Using Arrow function
myCoding.forEach( (item) => {
    // console.log(item);
})

// Using normal function
function printIt(item) {
    console.log(item);
}
// myCoding.forEach(printIt);


// Array of Objects:
const myArray = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
];

// Used to iterate on Array of Objects **
myArray.forEach( (item) => {
    console.log(item.languageName);
})