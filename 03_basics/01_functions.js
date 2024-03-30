function sayMyName() {
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("V");
  console.log("A");
  console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log(`Result: ${result}`);

function loginUserMessage(username = "Sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  } else {
    return `${username} just logged in`;
  }
}

// console.log(loginUserMessage("Shivam"));
// console.log(loginUserMessage("Dean"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "shivam",
  age: 19,
};

function handleObject(anyObject) {
  console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user);

handleObject({
  username: "sam",
  age: 22,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300]));
