// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Shivam",
      lastname: "Kumar",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { one: "a", two: "b" };
const obj2 = { three: "c", four: "d" };
const obj3 = { five: "e", six: "f" };

// const obj3 = { obj1, obj2 };
// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "f@gmail.com",
  },
  {
    id: 3,
    email: "s@gmail.com",
  },
];

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLog"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "shivam",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
// console.log(instructor);

// {
//   "name": "shivam",
//   "coursename": "js in hindi",
//   "price": "free",
// }

// [
//   {},
//   {},
//   {},
// ]
