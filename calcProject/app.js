const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const multiply = function(num1, num2) {
    return num1 * num2
};

function divide (num1, num2) {
    return num1 / num2
}

const power = function(x, n) {
	return x ** n
};

const factorial = function(x) {
  if (x === 0) return 1;
  let product = 1;
  for (let i = x; i > 0; i--) {
    product *= i;
  }
  return product;
}

function operate (operator, num1, num2) {
    return operator(num1, num2)
}


console.log(multiply(5,8))



