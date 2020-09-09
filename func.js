// arrow functions
const add = (x,y) => x + y;
console.log(add(1,2));

const add2 = (x) => (y) => x + y;
console.log(add2(1)(2));
addOne = add2(1);
console.log(addOne(2));
