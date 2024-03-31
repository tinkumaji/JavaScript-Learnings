const user = {
    username: "Tinku",
    loginCount: 9,
    signedIn: true,
    getUserDetails: function () {
        console.log(`Got user details from database`);
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
};
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor function:
function User (username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this;
};

const userOne = new User("Tinku", 6, true);
const userTwo = new User("Hitesh", 3, false);

console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);
