// so i'll be honest, i legit don't know the built in
// functions required to do this

// but basically i'll need to input a string and 
// turn it into an array, either invert the array directly
// (unsure if that exists) otherwise start from the last
// character add that to the string, then remove from
// the array and lower the count by one
// once the count is equal to zero, return the answer



// okay nvm it's literally super fucking simple and it's a one line code lol
// i feel like i'm cheating but also this would have taken me SO long
// to google and come to an answer organically

const reverseString = function(string) {
    return string.split('').reverse().join('');
};

// asdfasdf.split('')
// this takes your string an splits it, putting '' inbetween (aka nothing)

// asdf.reverse() reverses it, pretty simple
// asdf.join('') joins it, putting '' inbetween (aka nothing)

// Do not edit below this line
module.exports = reverseString;
