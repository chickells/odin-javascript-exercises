

// operators, rounded to 5 decimal places

const add = function(num1, num2) {
	return parseFloat((Number(num1) + Number(num2)).toFixed(5))
};

const subtract = function(num1, num2) {
	return parseFloat((Number(num1) - Number(num2)).toFixed(5))
};

const multiply = function(num1, num2) {
    return parseFloat((Number(num1) * Number(num2)).toFixed(5))
};

function divide (num1, num2) {
  if (num2 == 0) {
    answer = `smh`
  } else {
    return parseFloat((Number(num1) / Number(num2)).toFixed(5))
  }
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
let operator = ""

function operate (operator, num1, num2) {
  if (operator == divide && num2 == 0) {
    answer = `smh... (div by 0)`
  } else {
    answer = operator(num1, num2)
    return answer
}}



// isFinished checks to see if prev button was equals.  because then the next number
// pressed would reset display to that number and restart the process
// otherwise operator buttons work as normal.
// so this is just a boolean
// and each time I press a number it sets to false, but when i press equals it sets to true
//  and 'if true' then set textContent to that number to "reset"

let isFinished = false
let isMathing = false
let hayDot = false

// other stuff


// modify display text as buttons are clicked
// (can i PULL this info and store as 'const' in js before 
// clicking operator button and typing 2nd number?)
// YES I CAN LFG

const display = document.getElementById('display')

// keyboard listeners

document.addEventListener('keydown', (e) => {
  // console.log(`${e.key} button pressed`);
  if (e.key == '+') {
    plusBtn();
  } else if (e.key == '-') {
    minusBtn();
  } else if (e.key == '*') {
    multBtn();
  } else if (e.key == '/') {
    divBtn();
  } else if (e.key == '9') {
    nineBtn();
  } else if (e.key == '8') {
    eightBtn();
  } else if (e.key == '7') {
    sevenBtn();
  } else if (e.key == '6') {
    sixBtn();
  } else if (e.key == '5') {
    fiveBtn();
  } else if (e.key == '4') {
    fourBtn();
  } else if (e.key == '3') {
    threeBtn();
  } else if (e.key == '2') {
    twoBtn();
  } else if (e.key == '1') {
    oneBtn();
  } else if (e.key == '0') {
    zeroBtn();
  } else if (e.key == '.') {
    dotBtn();
  } else if (e.key == 'Backspace' || e.key == 'Delete') {
    delBtn();
  } else if (e.key == 'Enter' || e.key == '=') {
    equalsBtn();
  } else if (e.key == 'c' || e.key == 'C') {
    clearBtn();
  }
});

// ^^^^^^^^^^^^^^^^^^ WHY DOESN'T THIS FUCKING WORK THIS IS STUPID
// brain is fried, 2.5 hrs deep into this. got a lot done.  lil break time
// then workout then lunch then FUCKIN YAY FIRST DAY WAS A RAGING SUCCESS!!!!!!!@!!!!!!

// when calling function via event, you need the () with function.

const plus = document.getElementById('plus')
plus.addEventListener("click", plusBtn)
function plusBtn (){
  num1 = display.textContent
  isMathing = true
  operator = add
  hayDot = false
}


const minus = document.getElementById('minus')
minus.addEventListener("click", minusBtn)
function minusBtn (){
  num1 = display.textContent
  operator = subtract
  isMathing = true
  hayDot = false
}

const mult = document.getElementById('mult')
mult.addEventListener("click", multBtn)
function multBtn (){
  num1 = display.textContent
  operator = multiply
  isMathing = true
  hayDot = false
}

const divy = document.getElementById('divy')
divy.addEventListener("click", divBtn)
function divBtn (){
  num1 = display.textContent
  operator = divide
  isMathing = true
  hayDot = false
}

const clear = document.getElementById('clear')
clear.addEventListener("click", clearBtn)
function clearBtn (){
  display.textContent = ""
  hayDot = false
}

const equals = document.getElementById('equals')
equals.addEventListener("click", equalsBtn)
function equalsBtn (){
  num2 = display.textContent;
  operate(operator, num1, num2)
  display.textContent = answer
  isFinished = true
  hayDot = false
}

// num pad btn assignments

const seven = document.getElementById('seven')
seven.addEventListener("click", sevenBtn)
function sevenBtn () {
  if (isFinished == false && isMathing == false) {
    display.insertAdjacentText('beforeend', '7')
  } else if (isMathing == true || isFinished == true) {
    display.textContent = '7'
    isFinished = false
    isMathing = false
  }
}


const eight = document.getElementById('eight')
eight.addEventListener("click", eightBtn)
function eightBtn (){
  if (isFinished == false && isMathing == false) {
    display.insertAdjacentText('beforeend', '8')
  } else if (isMathing == true || isFinished == true) {
    display.textContent = '8'
    isFinished = false
    isMathing = false
  }
}

const nine = document.getElementById('nine')
nine.addEventListener("click", nineBtn)
function nineBtn (){
  if (isFinished == false && isMathing == false) {
    display.insertAdjacentText('beforeend', '9')
  } else if (isMathing == true || isFinished == true) {
    display.textContent = '9'
    isFinished = false
    isMathing = false
  }
}

const four = document.getElementById('four')
four.addEventListener("click", fourBtn)
function fourBtn (){
  if (isFinished == false && isMathing == false) {
    display.insertAdjacentText('beforeend', '4')
  } else if (isMathing == true || isFinished == true) {
    display.textContent = '4'
    isFinished = false
    isMathing = false
  }
}

const five = document.getElementById('five')
five.addEventListener("click", fiveBtn)
function fiveBtn (){
  if (isFinished == false && isMathing == false) {
    display.insertAdjacentText('beforeend', '5')
  } else if (isMathing == true || isFinished == true) {
    display.textContent = '5'
    isFinished = false
    isMathing = false
  }
}

const six = document.getElementById('six')
six.addEventListener("click", sixBtn)
function sixBtn (){
  if (isFinished == false && isMathing == false) {
    display.insertAdjacentText('beforeend', '6')
  } else if (isMathing == true || isFinished == true) {
    display.textContent = '6'
    isFinished = false
    isMathing = false
  }
}

const one = document.getElementById('one')
one.addEventListener("click", oneBtn)
function oneBtn (){
  if (isFinished == false && isMathing == false) {
    display.insertAdjacentText('beforeend', '1')
  } else if (isMathing == true || isFinished == true) {
    display.textContent = '1'
    isFinished = false
    isMathing = false
  }
}

const two = document.getElementById('two')
two.addEventListener("click", twoBtn)
function twoBtn (){
  if (isFinished == false && isMathing == false) {
    display.insertAdjacentText('beforeend', '2')
  } else if (isMathing == true || isFinished == true) {
    display.textContent = '2'
    isFinished = false
    isMathing = false
  }
}

const three = document.getElementById('three')
three.addEventListener("click", threeBtn)
function threeBtn (){
  if (isFinished == false && isMathing == false) {
    display.insertAdjacentText('beforeend', '3')
  } else if (isMathing == true || isFinished == true) {
    display.textContent = '3'
    isFinished = false
    isMathing = false
  }
}

const zero = document.getElementById('zero')
zero.addEventListener("click", zeroBtn)
function zeroBtn (){
  if (isFinished == false && isMathing == false) {
    display.insertAdjacentText('beforeend', '0')
  } else if (isMathing == true || isFinished == true) {
    display.textContent = '0'
    isFinished = false
    isMathing = false
  }
}

const dot = document.getElementById('dot')
dot.addEventListener("click", dotBtn)
function dotBtn (){
  if (hayDot == true) {
    console.log('already dot breh, continue');
  } else if (isFinished == false && isMathing == false) {
    display.insertAdjacentText('beforeend', '.')
    hayDot = true
  } else if (isMathing == true || isFinished == true) {
    display.textContent = '.'
    isFinished = false
    isMathing = false
    hayDot = true
  }
}

const deleteOmundo = document.getElementById('del')
deleteOmundo.addEventListener("click", delBtn)
function delBtn (){
  if (display.textContent[display.textContent.length - 1] == '.') {
    hayDot = false;
    display.textContent = display.textContent.slice(0, -1)
  } else {
  display.textContent = display.textContent.slice(0, -1)
}}

let num1Display = document.getElementById('num1')
let num2Display = document.getElementById('num2')

// initial outline/tasks/
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



