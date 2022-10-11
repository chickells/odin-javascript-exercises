function fibonacci (x) {
    let n = Number(x)
    let fib = []
    for (let i = 0; i <= n; i++) {
        if (n < 0 || Number.isInteger(n) == false) {
            fib = 'OOPS'
        } 
        else if (i < 2 ){
            fib.push(i)
        } 
        else {
            fib.push(fib[i-1]+ fib[i-2])
        }}

    if (n < 0 || Number.isInteger(n) == false) {
        return 'OOPS'
    } else return fib[n]
    // probably better do just do that one if statement
    // and for the else, THEN create the array and return result
}

// holy fuck it works

// console.log(fibonacci(14)); checks rando num as example

// create Fib as an array, looping over 'n' times

// FUCK THIS SHIT IM GOING HOME Lol

// damn i think we have to make a recursive step that
// takes in 'n' steps, and we have to loop it that many times

// Do not edit below this line
module.exports = fibonacci;
