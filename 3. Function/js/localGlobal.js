// var, let and const
// let and const ES6

// Global scope
var a = 1;
let b = 2;
const c = 3;


console.log(`Global scope: `, a, b, c);

function localScope() {
    var a = 4;
    let b = 5;
    const c = 6;
    var d = 10;
    console.log(`Local scope: `, a, b, c);
}

localScope();

console.log(`Global scope: `, a, b, c);

if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`If Local scope: `, a, b, c);
}


console.log(`Global scope: `, a, b, c);


for (let a = 0; a <= 10; a++) {
    console.log(`Loop scope: `, a);
}

console.log(`Global scope: `, a, b, c);



