// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encriptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const user1 = new User("shivam", "shivam@xyz.com", "123");

// console.log(user1.encriptPassword());
// console.log(user1.changeUsername());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const user2 = new User("amit", "amit@xyz.com", "567");

console.log(user2.encryptPassword());
console.log(user2.changeUsername());
