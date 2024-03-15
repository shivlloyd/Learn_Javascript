# Strings in Javascript

---

**String Declaration and Concatenation:**
In JavaScript, strings can be declared using either single or double quotes. The `+` operator concatenates strings together. For example:

```javascript
const name = "shivam";
const repoCount = 25;
console.log(name + repoCount + " Value"); // Outputs: shivam25 Value
```

**Template Literals:**
Template literals provide a more convenient way to interpolate variables into strings using `${}` syntax. This improves readability and simplifies string construction. For example:

```javascript
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Outputs: Hello my name is shivam and my repo count is 25
```

**String Object vs. Primitive String:**
Strings can be created as primitive values or as String objects using the `String` constructor. However, using primitives is generally more efficient. For example:

```javascript
const gameName = new String("Shivam-sk-com");
console.log(gameName[0]); // Outputs: S
console.log(gameName.__proto__); // Outputs: [String: '']
```

**String Properties and Methods:**
JavaScript provides various properties and methods to work with strings. Some common ones include `length`, `toUpperCase()`, `charAt()`, `indexOf()`, `substring()`, `slice()`, and `trim()`. For example:

```javascript
console.log(gameName.length); // Outputs: 13
console.log(gameName.toUpperCase()); // Outputs: SHIVAM-SK-COM
console.log(gameName.charAt(2)); // Outputs: i
console.log(gameName.indexOf("m")); // Outputs: 5
```

**Manipulating Strings:**
Strings can be manipulated using methods like `substring()`, `slice()`, and `trim()` to extract substrings or remove whitespace. For example:

```javascript
const newString = gameName.substring(0, 4);
console.log(newString); // Outputs: Shiv

const newStringOne = "   Shivam   ";
console.log(newStringOne.trim()); // Outputs: Shivam // without any spaces
```

**String Replacement and Searching:**
The `replace()` method replaces occurrences of a specified substring with another string. The `includes()` method checks if a string contains another string. For example:

```javascript
const url = "https://shivam.com/shivam%20kumar";
console.log(url.replace("%20", "-")); // Outputs: https://shivam.com/shivam-kumar
console.log(url.includes("sharma")); // Outputs: false
```

**String Splitting:**
The `split()` method splits a string into an array of substrings based on a specified separator. For example:

```javascript
console.log(gameName.split("-")); // Outputs: [ 'Shivam', 'sk', 'com' ]
```
