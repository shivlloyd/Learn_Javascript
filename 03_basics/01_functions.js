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
console.log(loginUserMessage("Dean"));
