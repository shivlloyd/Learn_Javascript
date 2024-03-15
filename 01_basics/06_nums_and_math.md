# Number and Maths in Javascript

1. **Primitive Number Literal:**

   - `const score = 400;`: This declares a constant `score` with the value `400`, a primitive number literal.

2. **Number Object:**

   - `const balance = new Number(100);`: This creates a Number object `balance` with a value of `100`. While this is valid, using primitive number literals is more common and recommended.

3. **Number Methods:**

   - `console.log(balance.toString().length);`: `toString()` converts the number to a string, and `.length` retrieves the length of the resulting string, which is `3`.
   - `console.log(balance.toFixed(2));`: `toFixed()` returns a string representation of the number with a specified number of decimal places (2 in this case), resulting in `"100.00"`.

4. **Number Formatting:**

   - `console.log(hundreds.toLocaleString('en-IN'));`: `toLocaleString()` formats the number according to the locale-specific formatting rules, resulting in `"10,00,000"` in Indian English format.

5. **Precision and Decimals:**
   - `const otherNumber = 213.8966`: Declares a constant with a floating-point number.
   - `console.log(otherNumber.toPrecision(4))`: `toPrecision(4)` returns a string representing the number to the specified precision. Here, it's `"213.9"`.

### Math Operations in JavaScript:

1. **Math Object:**

   - `console.log(Math);`: Outputs the Math object, which provides mathematical functions and constants.

2. **Math Functions:**

   - `console.log(Math.abs(-4));`: Returns the absolute value of `-4`, which is `4`.
   - `console.log(Math.round(4.6));`: Rounds `4.6` to the nearest integer, which is `5`.
   - `console.log(Math.ceil(4.1));`: Rounds `4.1` up to the nearest integer, which is `5`.
   - `console.log(Math.min(4, 3, 6, 8));`: Returns the minimum value among `4`, `3`, `6`, and `8`, which is `3`.
   - `console.log(Math.max(4, 3, 6, 8));`: Returns the maximum value among `4`, `3`, `6`, and `8`, which is `8`.

3. **Random Number Generation:**
   - `console.log(Math.random());`: Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
   - `console.log(Math.random() * 10 + 1);`: Generates a random floating-point number between 1 and 11 (exclusive of 11).
   - `console.log(Math.floor(Math.random() * 10) + 1);`: Generates a random integer between 1 and 10 (inclusive).
   - Random number within a specified range:
     ```javascript
     const min = 10;
     const max = 20;
     console.log(Math.floor(Math.random() * (max - min + 1)) + min);
     ```

This code demonstrates various aspects of handling numbers and performing mathematical operations in JavaScript.
