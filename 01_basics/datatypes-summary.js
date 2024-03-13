//  Primitive Datatypes

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // Output: false (Symbols are always unique)

const bigNumber = 333388888888888882222n;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Superman", "Batman", "Flash"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof bigNumber); // Output: bigint
console.log(typeof outsideTemp); // Output: object
console.log(typeof myFunction); // Output: function

// https://262.ecma-international.org/5.1/#sec-11.4.3
