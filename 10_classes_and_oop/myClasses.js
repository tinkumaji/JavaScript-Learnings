// class User {
//     constructor (username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     showUsername() {
//         return `USERNAME is ${this.username}`;
//     }
// }

// const userOne = new User("Tinku", "tinku123@gmail.com", 123);
// console.log(userOne.showUsername());
// console.log(userOne.encryptPassword());

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.showUsername = function () {
  return `USERNAME is ${this.username}`;
};

const userTwo = new User("Tinku", "tinku123@fb.com", 1122);
console.log(userTwo);
console.log(userTwo.encryptPassword());
console.log(userTwo.showUsername());
