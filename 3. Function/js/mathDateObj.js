// Math Object
console.log("Math Object");
let value;

value = Math.PI;
console.log(value);

value = Math.E;
console.log(value);

value = Math.round(3.1416);
console.log(value);

value = Math.ceil(3.1416);
console.log(value);

value = Math.floor(3.1416);
console.log(value);

value = Math.sqrt(25);
console.log(value);

value = Math.abs(-98);
console.log(value);

value = Math.pow(2, 3);
console.log(value);

value = Math.min(1, 3, -958, 45, 56, 548);
console.log(value);

value = Math.max(1, 3, -958, 45, 56, 548);
console.log(value);

value = Math.floor(Math.random() * 100 + 1);
console.log(value);


// Date Object
console.log("\n\nDate Object");
let val;
let today = new Date();
let birthday = new Date('02-03-2001 11:23:35');

val = today;
val = today.toString();
console.log(val);

val = birthday;
console.log(val);

birthday = new Date('May 21 1998 11:23:35');
val = birthday;
console.log(val);

birthday = new Date('02/03/2001 11:23:35');
val = birthday;
console.log(val);

val = today.getMonth();
console.log(val);

val = today.getDate();
console.log(val);

val = today.getDay();
console.log(val);

val = today.getFullYear();
console.log(val);

val = today.getHours();
console.log(val);

val = today.getMinutes();
console.log(val);

val = today.getSeconds();
console.log(val);

val = today.getMilliseconds();
console.log(val);

// TimeSpan = Amount of second  since January 1st 1970
val = today.getTime();
console.log(val);


birthday.setMonth(11);
birthday.setDate(16);
birthday.setFullYear(2020);

console.log(birthday);
