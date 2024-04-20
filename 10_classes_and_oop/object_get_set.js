const User = {
  _email: "shivam@123.com",
  _password: "prt",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },

  get password() {
    return this._password.toUpperCase();
  },

  set password(value) {
    this._password = value;
  },
};

const shivam = Object.create(User);
console.log(shivam.email);
console.log(shivam.password);
