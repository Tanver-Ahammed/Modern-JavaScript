// sum of square series
console.log("sum of the series of square number:");

var number = prompt("Enter of the number of series:");

number = parseInt(number);
var series = "";
var sum = 0;
for (var i = 1; i <= number; i++) {
    var temp = 0;
    temp = i ** 2;
    sum += temp;
    series += temp.toString();
    if (i == number) {
        continue;
    }
    series += " + ";
}

console.log(`${series} = ${sum}`);
