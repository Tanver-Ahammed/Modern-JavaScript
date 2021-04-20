var countries = ["Bangladesh", "India", "Pakisthan", "Nepal", "Bhutan", 
"Afganisthan", "Sri-Lanka", "Mayanmar"];

console.log(countries);
console.log(countries[0]);
console.log(countries[2]);
console.log(countries[6]);
console.log(countries[7]);
console.log("Array length: " + countries.length);

countries[7] = "Barma";
console.log(countries[7]);
console.log(countries);
var country = countries[0];
console.log(country);

countries[countries.length] = "Iran";
countries[countries.length] = "Sweden";
console.log(countries);

// push
// console.log(countries.push("China"));
countries.push("Africa", "Japan", "Iriq")
console.log(countries)

// pop
console.log(countries.pop());
console.log(countries);

// shift
console.log(countries.shift())
console.log(countries);

// unshift
console.log(countries.unshift("Bangladesh"));
console.log(countries);


// -------------------------------------------------------------------------------------------

// fill array using split()
var numbers = [];
console.log(numbers);

numbers.push(12)
console.log(numbers)

numbers.push("tWO")
console.log(numbers)


var x = "Bangladesh"
var y = x.split("");
console.log(y)

var y = x.split("a");
console.log(y)

x = "Hello World"
var y = x.split("");
console.log(y)

x = "bangladesh is a small country.";
var y = x.split(" ");
console.log(y)

x = "BD, US, UK, UAE, Pak, Ind";
var y = x.split(",");
console.log(y)


// tostring 
var z = y.toString();
console.log(z)

x = "bangladesh is a small country";
y = x.split(" ");
z = y.toString();
console.log(z)

z = y.join(" ");
console.log(z)

z = y.join("*");
console.log(z)

z = y.concat(countries)
console.log(z)

console.log(z.sort())

console.log(z.reverse())










