# Revised Lab 5 Summary: Interactivity with JavaScript

## Part 3: Basic JavaScript Concepts

### Writing Your First JavaScript

```javascript
console.log("Hello, World!");
```

### Variables and Data Types

```javascript
let num = 42;
let greeting = "Hello, ";
```

## Part 4: ES6 Features

### Constants with `const`

```javascript
const PI = 3.14;
```

### Template Literals

```javascript
let person = "John";
let message = `${greeting}${person}!`;
```

### Arrow Functions

```javascript
const square = (x) => x * x;
```

### `let` vs. `var`

```javascript
if (true) {
    let blockScopedVar = "I am block-scoped";
}
```

## Part 5: Basic Interactivity

### Alert and Confirm Boxes

```javascript
function displayGreeting() {
    alert(message);
}
```

### Prompt for User Input

```javascript
function resetForm() {
    let isConfirmed = confirm("Are you sure you want to reset the form?");
    if (isConfirmed) {
        document.getElementById("myForm").reset();
        document.getElementById("output").innerText = "";
    }
}
```