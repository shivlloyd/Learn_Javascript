### Understanding Property Descriptors in JavaScript

In JavaScript, every object property has a set of attributes associated with it, known as property descriptors. These descriptors define various characteristics of the property, such as whether it's writable, enumerable, and configurable.

#### Object.getOwnPropertyDescriptor

`Object.getOwnPropertyDescriptor` is a built-in method in JavaScript that allows you to get the property descriptor of a given property on an object. It takes two parameters: the object from which to retrieve the descriptor and the name of the property.

In the provided code:

```javascript
let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
```

This code retrieves the property descriptor for the `PI` property of the `Math` object and logs it to the console.

#### Object.defineProperty

`Object.defineProperty` is another built-in method in JavaScript that enables you to define or modify the attributes of a property on an object. It takes three parameters: the object on which to define the property, the name of the property, and an object that specifies the attributes of the property.

In the provided code:

```javascript
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});
```

This code defines the `name` property of the `chai` object with the specified attributes: `writable` set to `false`, which means the value of the property cannot be changed, and `enumerable` set to `false`, which means the property will not be included in iterations over the object's properties.

### Purpose of Using Property Descriptors

Property descriptors provide fine-grained control over object properties, allowing developers to specify how properties behave and how they can be interacted with. Here's how `Object.getOwnPropertyDescriptor` and `Object.defineProperty` are typically used:

- **Get property descriptor**: `Object.getOwnPropertyDescriptor` allows you to inspect the characteristics of a property, such as whether it's writable or enumerable.

- **Define or modify property attributes**: `Object.defineProperty` lets you define new properties on an object or modify existing ones. This is particularly useful when you need to enforce certain behaviors or restrictions on object properties, such as making a property read-only or non-enumerable.

In summary, these methods empower developers to manage the behavior and characteristics of object properties, enhancing control and flexibility in JavaScript programming.
