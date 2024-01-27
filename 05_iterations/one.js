// for-loop:
for (let i = 0; i <= 10; i++) {
    const element = i;
    // if (element == 5) {
    //     console.log(`5`);
    // }
    // console.log(element);
}

// for (let i = 1; i <= 10; i++){
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
// }


let myArray = ["Flash", "Batman", "Superman"];
console.log(myArray.length); // -> 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;  // to come out of the whole loop
//     }
//     console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;  // to skip a particular iteration
    }
    console.log(`Value of i is ${index}`);
}