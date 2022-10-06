// const fibonacci = function(n) {
//     let x = 0
//     for (let i = 0; i < n ; i++) {
//         x = (i - 1)
//         x = (i - 2)
//         console.log(x);
//     }
//     return x
// };

function fibonacci (n) {
    let fib = []
    for (let i = 0; i < n; i++) {
        if (n < 0 || Number.isInteger(n) == false) {
            fib = 'error, n must be a positive number'
        } else if (i < 2 ){
            fib.push(i)
            console.log(i);
            console.log(fib);
        } else {
            fib.push(fib[i-1]+ fib[i-2])
            console.log(i);
            console.log(fib);
        }}
    // if (n = 1) {
    //     x = 1
    // } else {
    //     x = fib[n-1] + fib[n-2]
    // } 
    console.log(fib);
    return fib[n]
}

console.log(fibonacci(14));

// create Fib as an array, looping over 'n' times

// FUCK THIS SHIT IM GOING HOME Lol

// damn i think we have to make a recursive step that
// takes in 'n' steps, and we have to loop it that many times

// Do not edit below this line
module.exports = fibonacci;
