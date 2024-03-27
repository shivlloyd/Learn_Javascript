# Array part 2 in Javascript

Arrays in JavaScript are versatile data structures that allow you to store and manipulate collections of elements. Let's explore various array operations using the provided code snippets.

## 1. **Pushing Arrays into an Array**

```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros); // Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
console.log(marvel_heros[3][1]); // Output: "flash"
```

Explanation:

- Two arrays, `marvel_heros` and `dc_heros`, are initialized.
- The `push()` method adds the `dc_heros` array as a single element to the `marvel_heros` array.
- `console.log(marvel_heros)` prints the modified `marvel_heros` array, where `dc_heros` is a nested array within it.
- `console.log(marvel_heros[3][1])` accesses the second element (`"flash"`) within the nested `dc_heros` array.

## 2. **Concatenating Arrays**

```javascript
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
```

Explanation:

- Two methods of concatenating arrays are demonstrated:
  - Using the `concat()` method.
  - Using the spread operator (`...`).
- Both methods combine `marvel_heros` and `dc_heros` arrays into a single array (`allHeros` and `all_new_heros`) respectively.

## 3. **Flattening Nested Arrays**

```javascript
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
```

Explanation:

- `another_array` contains nested arrays.
- The `flat()` method with `Infinity` as an argument flattens all nested arrays recursively to any depth.
- `real_another_array` stores the flattened result.

## 4. **Checking Array Type**

```javascript
console.log(Array.isArray("Shivam")); // Output: false
console.log(Array.from("Shivam")); // Output: ['S', 'h', 'i', 'v', 'a', 'm']
console.log(Array.from({ name: "Shivam" })); // Output: []
```

Explanation:

- `Array.isArray()` checks if the given argument is an array (`"Shivam"` is not an array).
- `Array.from()` converts array-like or iterable objects into arrays (`"Shivam"` is converted into an array of characters).
- The last `Array.from()` call results in an empty array since the provided object `{ name: "Shivam" }` is not iterable.

## 5. **Creating Arrays from Values**

```javascript
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]
```

Explanation:

- `Array.of()` creates a new array with the provided arguments as its elements.
- It's useful for creating arrays from a list of values directly.

These examples illustrate common operations and methods used with arrays in JavaScript, showcasing their flexibility and utility in handling data structures.
