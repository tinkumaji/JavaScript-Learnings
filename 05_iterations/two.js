
let index = 0;
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index += 2;
}

let myArray = ["Flash","Batman","Superman"];
let i = 0;
while (i < myArray.length) {
    // console.log(`Value is ${myArray[i]}`);
    i++;
}


let num = 11;
do {
    console.log(`Value is ${num}`); // -> Value is 11
    num++;
} while (num <= 10); // even though the condition is false it runs for atleast 1 time, then checks for the condition