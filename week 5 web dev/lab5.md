# Lab 5 Summary: Interactivity with JavaScript

## Part 1: Introduction to JavaScript and ES6

### JavaScript

JavaScript is a versatile programming language widely employed in web development. Its role as the scripting language of HTML enables the addition of interactivity and dynamic content to web pages.

### ECMAScript 6 (ES6)

ES6, or ECMAScript 2015, is a substantial enhancement to JavaScript. It introduces features that enhance code readability, conciseness, and power. Key features include arrow functions, template literals, `const` and `let` keywords, default function parameters, and classes.

## Part 2: Setting Up Your Environment

### Text Editor and Browser

To start with JavaScript, a text editor (e.g., Visual Studio Code, Sublime Text) is needed for code writing, and a web browser (e.g., Chrome, Firefox) is essential for code execution.

### Creating an HTML File

An HTML file is the foundational structure of a web page. Creating one involves using a text editor to define the page's structure and content.

### Linking JavaScript

JavaScript is linked to an HTML file using the `<script>` tag with a `src` attribute specifying the JavaScript file's URL.

```html
<script src="script.js"></script>
```

## Part 3: Basic JavaScript Concepts

### Writing Your First JavaScript

Initiating JavaScript involves using `console.log()` to display messages in the browser console.

```javascript
console.log("Hello, World!");
```

### Variables and Data Types

JavaScript variables store data and come in various types like numbers, strings, and booleans. Variable declaration uses the `var` keyword.

```javascript
var message = "Hello, World!";
```

## Part 4: ES6 Features

### Constants with `const`

The `const` keyword declares constants in ES6, ensuring their values remain unchanged after declaration.

```javascript
const PI = 3.14159;
```

### Template Literals

Template literals, enclosed in backticks (`), facilitate dynamic string creation.

```javascript
const currentDate = new Date();
const formattedDate = `Current date and time: ${currentDate}`;
```

### Arrow Functions

Arrow functions offer a concise syntax for writing functions in ES6.

```javascript
const square = (number) => number * number;
```

### `let` vs. `var`

`let` declares variables in ES6 with block scope, while `var` is used in older JavaScript versions with function scope.

## Part 5: Basic Interactivity

### Alert and Confirm Boxes

JavaScript provides `alert()` for displaying messages and `confirm()` for user confirmation.

```javascript
alert("This is an alert box.");

const confirmation = confirm("Are you sure?");
if (confirmation) {
  console.log("User confirmed.");
} else {
  console.log("User canceled.");
}
```
