// operators 
const add = function(num1, num2) {
	return Number(num1) + Number(num2)
};

const subtract = function(num1, num2) {
	return Number(num1) - Number(num2)
};

const multiply = function(num1, num2) {
    return Number(num1) * Number(num2)
};

function divide (num1, num2) {
    return Number(num1) / Number(num2)
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

// operator

let num1 = 0
let num2 = 0
let answer = ""

function operate (operator, num1, num2) {
    answer = operator(num1, num2)
    return answer
}

let operator = "asdf"

// other stuff


// modify display text as buttons are clicked
// (can i PULL this info and store as 'const' in js before 
// clicking operator button and typing 2nd number?)
// YES I CAN LFG

const display = document.getElementById('display')

// const test = document.querySelector(".screen")
// console.log(test.id);
// ^^ i can pull the 'id' by this.  then i can loop through and declare event listeners
// for each and i'll call it 'this.id', that'd be `${this.id}` right?

// declare buttons
// can i write one function to create these button variables and name
// then "this.elementID" or something?

// shit seems too complicated, going to just raw dog it

// operators button assignments



const plus = document.getElementById('plus')
plus.addEventListener("click", function(){
  num1 = display.textContent
  num1Display.textContent = num1
  display.textContent = ""
  operator = add
})

const minus = document.getElementById('minus')
minus.addEventListener("click", function(){
  num1 = display.textContent
  num1Display.textContent = num1
  operator = subtract
  display.textContent = ""
})

const mult = document.getElementById('mult')
mult.addEventListener("click", function(){
  num1 = display.textContent
  num1Display.textContent = num1
  operator = multiply
  display.textContent = ""
})

const divy = document.getElementById('divy')
divy.addEventListener("click", function(){
  num1 = display.textContent
  num1Display.textContent = num1
  operator = divide
  display.textContent = ""
})

const clear = document.getElementById('clear')
clear.addEventListener("click", function(){
  display.textContent = ""
})

const equals = document.getElementById('equals')
equals.addEventListener("click", function(){
  num2 = display.textContent;
  num2Display.textContent = num2
  operate(operator, num1, num2)
  display.textContent = answer
})

// num pad btn assignments

const seven = document.getElementById('seven')
seven.addEventListener("click", function(){
  display.insertAdjacentText('beforeend', '7')
})

const eight = document.getElementById('eight')
eight.addEventListener("click", function(){
  display.insertAdjacentText('beforeend', '8')
})

const nine = document.getElementById('nine')
nine.addEventListener("click", function(){
  display.insertAdjacentText('beforeend', '9')
})

const four = document.getElementById('four')
four.addEventListener("click", function(){
  display.insertAdjacentText('beforeend', '4')
})

const five = document.getElementById('five')
five.addEventListener("click", function(){
  display.insertAdjacentText('beforeend', '5')
})

const six = document.getElementById('six')
six.addEventListener("click", function(){
  display.insertAdjacentText('beforeend', '6')
})

const one = document.getElementById('one')
one.addEventListener("click", function(){
  display.insertAdjacentText('beforeend', '1')
})

const two = document.getElementById('two')
two.addEventListener("click", function(){
  display.insertAdjacentText('beforeend', '2')
})

const three = document.getElementById('three')
three.addEventListener("click", function(){
  display.insertAdjacentText('beforeend', '3')
})

const zero = document.getElementById('zero')
zero.addEventListener("click", function(){
  display.insertAdjacentText('beforeend', '0')
})

const dot = document.getElementById('dot')
dot.addEventListener("click", function(){
  display.insertAdjacentText('beforeend', '.')
})

let num1Display = document.getElementById('num1')
let num2Display = document.getElementById('num2')

// btns write to display, when operator is clicked, num1 = display.textContent
// first btn click clears display and replaces with digit (additional operator clicks replace
// first one until digit pressed)

// following btn clicks add adjacenttext.  once equals is pressed,
// num2 = display.textContent
// call operate function with 'operator/num1/num2' stored values
// set display to 'answer'
// if digit it pressed, it restarts and sets diplay to that digit
// if operator is pressed, display is set to num1 and process continues

// can create 'onclick' listener for each button manually
// OR can write one function to CREATE function for each button,
// calling the functions buttonIDNAME or something like that....hmmm

// operator is a placeholder that's set once you click button
// function isn't actually called until you press equal
// variable 'display' is an array that we 'push' digits to.
// at first it assigns num1


// once operator is clicked, next digit click sets display to
// 'num2' array and starts 'pushing' to that
// also sets floating 'operator' varible to one of our functions

// once equals is hit, it checks what the current 'operator' is 
// set to and calls that function, supplying num1 and num2 from our
// stored numbers in the display.  also updates display to answer.

// from that point there are two options:
// 1 - click any digit next and it resets display to num1 and resets num1
// 2 - click equals or another operator again and the prior "result" 
//     turns into num1 right? and num2 stays constant unless 
//     another operator was selected

// if the 'clear' button is ever clicked, it resets display to 'num1 = [0]'

// if there's a way to append a digit onto a number (or even string of numbers)
// that'd be cleaner, otherwise i'm constantly converting this array
// of num1 and num2 to strings/numbers 



