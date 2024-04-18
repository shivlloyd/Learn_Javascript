let name = "shivam     ";
let lastName = "kumar    ";

console.log(name.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thos: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidey power is ${this.spiderman}`);
  },
};

Object.prototype.shivam = function () {
  console.log(`shivam is present everywhere`);
};

Array.prototype.heyShivam = function () {
  console.log(`Shivam says hi`);
};

// heroPower.shivam()
myHeros.shivam();
myHeros.heyShivam();
// heroPower.heyShivam()

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TASupport.makeVideo);

let anotherUsername = "john";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"amit  ".trueLength();
