let myDate = new Date();
// console.log(typeof myDate); // -> object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// Creating your won dates:
// let myCreatedDate = new Date(2024, 0, 26); // months starts from 0
// let myCreatedDate = new Date(2024,0,26,10,36);
// let myCreatedDate = new Date("2024-01-27"); // YYYY/MM/DD format // for customized date: month starts from 01
let myCreatedDate = new Date("01-27-2024"); // MM/DD/YYYY format
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); // To get time stamps // useful for quizzes, polls, hotel bookings
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // To get time stamp from date
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// mostly used toLocaleString()
// we can pass an object also
const date = newDate.toLocaleString('default', {
    weekday : "long",
    day : "2-digit"
});

console.log(date); // -> 21 Sunday