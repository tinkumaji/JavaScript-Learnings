// reduce **

const myNum = [1,2,3];

// Using Anonymous function:
// let totalNum = myNum.reduce(function (acc,cur) {
//     console.log(`acc: ${acc} and cur: ${cur}`);
//     return acc + cur;
// },0);    // -> 6

// Using Arrow function:
let totalNum = myNum.reduce((acc,cur) => acc + cur, 3); // acc initial value will be 3
console.log(totalNum); // -> 9


const shoppingCart = [
    {
        productName: "JavaScript course",
        price: 2999
    },
    {
        productName: "Python course",
        price: 999
    },
    {
        productName: "Android Development course",
        price: 5999
    },
    {
        productName: "Data Science course",
        price: 12999
    },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay); // -> 22996