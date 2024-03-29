// Singletonn
// Object.create

// object literals
const mySym = Symbol("key1");

const JsUser = {
  name: "Shivam",
  "full name": "Shivam Kumar",
  [mySym]: "mykey1",
  age: 24,
  location: "Kolkata",
  email: "shivam@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "shivam@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "Shivam@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
