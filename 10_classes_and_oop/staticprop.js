class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return 123;
  }
}

const userOne = new User("Tinku");
userOne.logMe();
console.log(userOne.createId()); // TypeError: createId is not a function

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const teacherOne = new Teacher("Hitesh", "hitesh121@gmail.com");
teacherOne.logMe();
console.log(teacherOne.createId()); // TypeError: createId is not a function
