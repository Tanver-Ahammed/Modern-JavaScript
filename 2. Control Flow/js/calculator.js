// simple calculator

console.log(`Select Option
1. Addition
2. Subtraction
3. Mutlpication
4. Dividation`)

// taking input from user
var number1 = prompt("Enter the First number:");
var number2 = prompt("Enter the second number:");
var choice = prompt("choice an operation");

// casting
number1 = parseInt(number1);
number2 = parseInt(number2);
choice = parseInt(choice);

// condition check
var num1con = isNaN(number1);
var num2con = isNaN(number2);
var choiceCon = isNaN(choice);

// start swich statement

var result = null;

if (num1con || num2con || choiceCon) {
    result = `INVALID INPUT`;
} else {
    switch (choice) {
        case 1:
            result = number1 + number2;
            break;
    
        case 2:
            result = number1 - number2;
            break;
    
        case 3:
            result = number1 * number2;
            break;
    
        case 4:
            result = number1 / number2;
            break;
        
        default:
            result = `INVALID INPUT`;
            break;
    }
}

console.log(`Result: ${result}`)

