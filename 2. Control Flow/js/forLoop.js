// for loop
// for (initialization; condition; update) {
//     statement........... 
// }

for (var i = 1; i <= 5; i++) {
    console.log(`value of i: ${i}`)
}

//  sum
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`sum: ${sum}`);

// factorial
var fact = 1;
for (var i = 1; i <= 5; i++) {
    fact = fact * i;
}
console.log(`Factorial: ${fact}`)