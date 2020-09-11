/*
- a first-class citizen is an entity that can be put in a variable
- a higher-order function is a function that does at least one of the following:
    - takes one or more functions as arguments (i.e. procedural parameters),
    - returns a function as its result.
- currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument
*/

// first-class functions

const add = (x,y) => x + y;

// higher-order functions

arr = [1,2,3,4];
console.log(arr.reduce(add));

// currying

const adder = (x) => (y) => x + y;
addOne = adder(1);
console.log(arr.map(addOne));

