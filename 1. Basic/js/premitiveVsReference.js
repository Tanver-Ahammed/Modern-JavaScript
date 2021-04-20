// primitive Type
// number, string, boolean

// deals with value
// different address
let a = 7;
let b = a;   // b = 7

a = 45;
console.log(b);


// Reference Type
// Array, Object

// DEALS WITH ADDRESS
// same address
let numbers = [1, 2, 3, 4];
let newNumbers = numbers;
console.log(newNumbers);
numbers[1] = 500;
console.log(numbers);
console.log(newNumbers);
