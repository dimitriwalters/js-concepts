// arrow functions

const add = (x,y) => x + y;
console.log(add(1,2));

const add2 = (x) => (y) => x + y;
console.log(add2(1)(2));
addOne = add2(1);
console.log(addOne(2));

// abstract funcs - map

arr = [1,2,3,4]

arr2 = []
for (let i=0; i<4; i++) {
    arr2[i] = arr[i] + 1; // <-- imperactive
}
console.log(arr2);

arr3 = arr.map(addOne); // <-- functional
console.log(arr3);

// abstract funcs - filter

arr4 = []
for (let i=0; i<4; i++) {
    if (arr[i] % 2 == 0) {
        arr4.push(arr[i]);
    }
}
console.log(arr4);

arr5 = arr.filter((x) => x % 2 == 0);
console.log(arr5);

// abstract funcs - reduce

sum1 = 0
for (let i=0; i<4; i++) {
    sum1 += arr[i];
}
console.log(sum1);

sum2 = arr.reduce(add);
console.log(sum2);
