function SetUserName(username) {
  // compled DB call
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("shivam", "shivam@fb.com", "123");
console.log(chai);
