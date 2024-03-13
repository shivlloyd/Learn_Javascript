# Comparison of Data Types in JavaScript

## Numeric Comparison:

```javascript
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
```

- In numeric comparisons, JavaScript evaluates the expressions based on numerical values.
- Greater than (`>`), greater than or equal to (`>=`), less than (`<`), and not equal to (`!=`) work as expected.

## String and Numeric Comparison:

```javascript
console.log("2" > 1); // true
console.log("02" > 1); // true
```

- When comparing a string and a number, JavaScript coerces the string to a number before comparison.
- Hence, `"2"` is treated as the number `2`, and `"02"` is also considered as `2`.

## Null Comparison:

```javascript
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
```

- In JavaScript, null is considered as a primitive value that represents the absence of a value.
- In comparisons, null is treated as 0, hence `null >= 0` returns true.
- However, `null > 0` and `null == 0` return false because null is not strictly equal to 0.

## Undefined Comparison:

```javascript
console.log(undefined == 0); // false
console.log(undefined < 0); // false
console.log(undefined > 0); // false
```

- Undefined represents a variable that has been declared but has not yet been assigned a value.
- When compared with numeric values, undefined is converted to NaN (Not a Number), resulting in false for all comparisons.

## Strict Equality Comparison:

```javascript
console.log("2" === 2); // false
```

- The strict equality operator (`===`) checks both the value and the type of the operands.
- Here, `"2"` is a string, and `2` is a number, so they are not strictly equal, hence `false` is returned.
