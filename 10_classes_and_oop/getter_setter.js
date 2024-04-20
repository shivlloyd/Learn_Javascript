class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}shivam`;
  }

  set password(value) {
    this._password = value;
  }
}

const shivam = new User("shivam@123.com", "abc");
console.log(shivam);
console.log(shivam.email);
console.log(shivam.password);
