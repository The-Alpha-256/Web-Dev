// Part 1: Simple Calculator 
function calculate(expression) {
    try {
      const operators = "+-*/";
      let operator = "";
      for (const op of operators) {
        if (expression.includes(op)) {
          operator = op;
          break;
        }
      }
  
      if (!operator) {
        throw new Error("Invalid operator in the expression");
      }
  
      const [operand1, operand2] = expression.split(operator).map(parseFloat);
      if (isNaN(operand1) || isNaN(operand2)) {
        throw new Error("Invalid operands in the expression");
      }
  
      let result;
      switch (operator) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          if (operand2 === 0) {
            throw new Error("Division by zero");
          }
          result = operand1 / operand2;
          break;
        default:
          throw new Error("Invalid operator");
      }
  
      return result;
    } catch (error) {
      return "Error: " + error.message;
    }
  }
  
  
  function getUserInput() {
    return prompt("Enter a mathematical expression (e.g., '2 + 3'):");
  }
  

  function displayResult(expression, result) {
    console.log(`Result of ${expression} is: ${result}`);
  }
  
  
  const userExpression = getUserInput();
  const result = calculate(userExpression);
  
  displayResult(userExpression, result);
  