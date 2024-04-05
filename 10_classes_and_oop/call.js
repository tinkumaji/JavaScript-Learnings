function setUsername(username) {
  // Complex DB calls
  this.username = username;
  console.log("called!");
}

function createUser(username, email, password) {
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const userOne = new createUser("Tinku", "tinkumaji@fb.com", "abc#123");
console.log(userOne);
