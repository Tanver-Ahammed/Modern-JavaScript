// Regular Expression
// Pattern matching Technique

let reg;
let str;

reg = /Hello/;
reg = /hello/i;  // i = case insensitive

console.log(reg);
console.log(reg.source);

str = "Hello World";
str = "Again Hello World";
str = "Hell World";
str = "tanHellohgh World";
str = "Again Hello World Hello!!";

// exec() --> return result in an array or null
let result = reg.exec(str);

// test() --> true / false
str = "Hello World";
str = "Hi World";
result = reg.test(str);

// match() --> Array / null
str = "Hello World!"
str = "Again Hello World Hello!!";
str = "Hells wjhnf"

result = str.match(reg);

// search() --> return index of the first mastch or null

str = "print hello world";
str = "heljj hagfu";

result = str.search(reg);

// replace --> returns new string
str = "Again Hello World Again";
let newStr = str.replace(reg, "Hi");

console.log(newStr);
console.log(result);
console.log(str);
console.log(reg.source);