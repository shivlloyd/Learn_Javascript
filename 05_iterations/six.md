### Filtering Numbers

```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNums.filter((num) => {
  return num > 4;
});

console.log(newNums);
```

#### Explanation:

- `myNums` is an array containing integers from 1 to 10.
- `filter` method is used on `myNums` array to create a new array called `newNums`.
- The `filter` method takes a callback function as an argument. This function is executed for each element of the array.
- In this case, the callback function filters out elements that are greater than 4.
- The filtered elements are stored in the `newNums` array.
- Finally, the `newNums` array is logged to the console.

#### Output:

```
[5, 6, 7, 8, 9, 10]
```

The output is an array containing numbers greater than 4 from the original `myNums` array.

### Re-filtering Numbers

```javascript
const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

console.log(newNums);
```

#### Explanation:

- An empty array `newNums` is declared.
- The `forEach` method iterates over each element of `myNums` array.
- Inside the loop, each element is checked if it's greater than 4.
- If the condition is met, the element is pushed into the `newNums` array.
- Finally, the `newNums` array is logged to the console.

#### Output:

```
[5, 6, 7, 8, 9, 10]
```

The output is the same as the previous section because it performs the same filtering logic.

### Filtering Books by Genre and Publish Year

```javascript
const books = [
  // array of book objects
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre == "History";
});

console.log(userBooks);
```

#### Explanation:

- `books` is an array of book objects with properties like `title`, `genre`, `publish`, and `edition`.
- The first `filter` method filters out books with the genre "History" and stores them in the `userBooks` array.
- Then, the `userBooks` array is filtered again based on additional criteria - books published after 1995 and with the genre "History".
- The filtered books are stored back into the `userBooks` array.
- Finally, the `userBooks` array is logged to the console.

#### Output:

```
[
  { title: 'Book Five', genre: 'History', publish: 2009, edition: 2014 }
]
```

The output is an array containing books with the genre "History" and published after 1995, based on the given dataset. Only one book meets these criteria.
