// Find a largest number
var num1 = prompt("Enter thefirst number: ")
var num2 = prompt("Enter the second number: ")
var num3 = prompt("Enter the third number: ")

// casting 
num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)

// condition
if ( num1 >= num2 && num1 >= num3 ) {
    console.log(`${num1} is largest number.`)
} else if ( num2 >= num1 && num2 >= num3 ) {
    console.log(`${num2} is largest number.`)
} else {
    console.log(`${num3} is largest number.`)
}

// another style
if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(`${num1} is largest number.`)
    } else {
        console.log(`${num3} is largest number.`)
    }
} else {
    if ( num2 >= num3 ) {
        console.log(`${num2} is largest number.`)
    }
    else {
        console.log(`${num3} is largest number.`)
    }
}
