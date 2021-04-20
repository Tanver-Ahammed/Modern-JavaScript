//  while loop
console.log("while loop");

// print 1 to 10
var i = 1;

while ( i <= 10 ) {
    console.log(i);
    i++;
}

//  sum of 1 to 10
var sum = 0;
i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(`sum: ${sum}`);

// factorial
i = 1;
var fact = 1;
while ( i <= 5 ) {
    fact *= i;
    i++;
}
console.log(`Factorial: ${fact}`);

// even odd q to 10
i = 1;
while ( i <= 10 ) {
    if (i % 2 == 0 )
        console.log(i + ": EVEN");
    else
        console.log(i + ": ODD");
    i++;
}


//  do while Loop
console.log("\n\n\n\ndo while loop");
var j = 0;
do {
    j++;
    console.log(`value of j: ${j}`);
    
} while (j <= 5);

console.log("Out of the loop")