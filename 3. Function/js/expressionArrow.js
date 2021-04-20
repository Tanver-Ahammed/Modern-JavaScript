// Normal Function
function normalFuc(parameter1) {
    console.log(`Hello: ${parameter1}`);
}

// Function Expression
let expressionFunc = function(parameter2) {
    console.log(`Hello: ${parameter2}`);
}

// Arrow Function (ES6)
let arrowFunc = (parameter3, parameter4) => {
    console.log(`Hello: I am ${parameter3} ${parameter4}.`)
}



// calling Function
normalFuc("Normal Function");
expressionFunc("Function Expression");
arrowFunc("Arrow Function", "(ES6)");