function multiply5 (num) {
    return num * 5;
};
multiply5.power = 2;
// console.log(multiply5(5));
// console.log(multiply5.power);


// Constructor function:
function createUser (username, score) {
    this.username = username;
    this.score = score;
    return this;
};

// Adding methods into constructor function using Prototype
createUser.prototype.increament = function () {
    this.score++;
}
createUser.prototype.printIt = function () {
    console.log(`${this.username}'s score is ${this.score}`);
}

const userOne = new createUser("Tinku", 10);
const userTwo = createUser("Hitesh", 20);
// console.log(userOne.username);
userOne.increament();
userOne.printIt();
