class User {
  static count = 0;

  constructor(username) {
    this.username = username;
    User.count++;
  }

  logMe() {
    return `Username: ${this.username}`;
  }

  static createId() {
    return `123`;
  }
}

const shivam = new User("Shivam");

// console.log(shivam.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
// console.log(iphone.createId())

console.log(User.createId());
console.log(User.count);
