const findTheOldest = function(people) {
    const totalYears = people.reduce((total, person) => {
        return total + (person.yearOfDeath - person.yearOfBirth)
    }, 0)
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const totalYears = people.reduce((total, person) => {
    for (let x in person) {
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }} 
    return total + (person.yearOfDeath - person.yearOfBirth)
}, 0)

// each loop compare age to prev total (current total starting at 0)
// if greater, set holder variable (x) to 'i' of our loop (looping to array.length)
// if less than, move onto next step
// at end, return array[x.name]

// okay this works, now i need to take each iteration and 
// compare it to the prior to see if it's greater or lesser than
// so for that  total = (person.yearOfDeath - person.yearOfBirth)
// then is total + (person.yearOfDeath - person.yearOfBirth) > total??

const test = {
    name: "Carly",
    yearOfBirth: 2018,
}

test.yearOfDeath = new Date().getFullYear();

console.log(totalYears);
  
// Do not edit below this line
module.exports = findTheOldest;
