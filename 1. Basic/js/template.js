// Template Literal
console.log("First Line");
console.log("second Line");

console.log("First Line\nsecond Line");

// when we use tempate literal
console.log(`First Line
second line`)

let temp = `First Line
second line`;
console.log(temp);

//
let age = 21;
console.log("My age is: " + age);
console.log(`My age is: ${ age }`);

let name = "Tanver";
let dob = "03-02-2001";
console.log(`My name is ${name}
My age is ${age}
My Date of Birth ${dob}
`)

let a = 34;
let b = 67;
console.log(`${a} + ${b} = ${a+b}`)
