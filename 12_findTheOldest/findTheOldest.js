function findTheOldest (array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  })
}

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

function getAge (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

// cheated and looked at solutions
// BUT i think thats more important to get the ball rolling again
// as opposed to sitting here banging my head against a wall
// for an hour getting nothing done lmao
// damn dude taking a week off of this shit and my brain already
// doesn't work anymore

// each loop compare age to prev total (current total starting at 0)
// if greater, set holder variable (x) to 'i' of our loop (looping to array.length)
// if less than, move onto next step
// at end, return array[x.name]

// okay this works, now i need to take each iteration and 
// compare it to the prior to see if it's greater or lesser than
// so for that  total = (person.yearOfDeath - person.yearOfBirth)
// then is total + (person.yearOfDeath - person.yearOfBirth) > total??
  
// Do not edit below this line
module.exports = findTheOldest;
