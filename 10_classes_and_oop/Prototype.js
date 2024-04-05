const userName = "Tinku    ";
// console.log(userName.length);
// console.log(userName.trim().length);

const myArray = [1, 2, 3, 4, 5, 6];

const user = {
  username: "Tinku",
  email: "tinkumaji02@gmail.com",
};

// Adding my own method in Object with the help of prototype
// As Object in JavaScript is the super most prototype, so the methods we add into it is avaliable to all Reference datatypes, i.e Array, String, function
Object.prototype.showUsername = function () {
  console.log(`Username is ${this.username}`);
};
// user.showUsername();
// myArray.showUsername();

Array.prototype.Tinku = function () {
  console.log(`Function inside Array`);
};

// myArray.Tinku();

// Adding my own method in String with the help of prototype
const s = "Tinku      ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length of the string is : ${this.trim().length}`);
};

// s.trueLength();
// "Arun  ".trueLength();
// "   Shayam".trueLength();

// Inheritance:
const User = {
  name: "Tinku",
  isLoggedIn: true,
};

const Teacher = {
  makeVideos: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupprot = {
  makeAssignments: "JS Assignments",
  fullTime: true,
  __proto__: TeachingSupport, // inheritance using __proto__
};

Teacher.__proto__ = User;

// Mordern method of inheritance:
Object.setPrototypeOf(TeachingSupport, Teacher);

// console.log(TeachingSupport.makeVideos);
