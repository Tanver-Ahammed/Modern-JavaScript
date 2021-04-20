// parameter/ argument

function saySomething(fName = "Aminul", lName = "Bari") {
    console.log(`Hello, Md. ${fName} ${lName}`);
}

let firstName = "Tanver";
let lastName = "Ahammed";
saySomething(firstName, lastName);


function addNumber(a = 0, b = 0) {
    console.log(`sum: ${a+b}`)
}

addNumber(3.6, 2.4);


// return type
function sum(a = 0, b = 0) {
    console.log(`${a} + ${b} = ${(a+b)}`)
    return a + b;
    console.log("Line After Return");
}

let temp = sum(2, 3);

console.log(`sum: ${temp}`)



