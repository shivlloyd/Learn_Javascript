const user = {
  username: "shivam",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "shivam";
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "shivam";
//   console.log(this.username);
// };

const chai = () => {
  let username = "shivam";
  console.log(this);
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ username: "Hitesh" });

console.log(addTwo(3, 4));

// const myArray = [2,5,6,4,9]

// myArray.forEach()
