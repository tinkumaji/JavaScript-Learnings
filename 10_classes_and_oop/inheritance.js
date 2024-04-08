class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const tinku = new Teacher("Tinku", "tinku123@fb.com", 123);
tinku.logMe();
tinku.addCourse();

const ujjwal = new User("Ujjwal");
ujjwal.logMe();

console.log(tinku === Teacher); // false
console.log(tinku instanceof Teacher); // true
console.log(ujjwal instanceof User); // true
