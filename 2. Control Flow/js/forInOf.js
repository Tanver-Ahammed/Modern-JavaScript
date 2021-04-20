
let text = "I am learing Javascropt.";
let food = ["cake", "chocolate", "Ice-cream", "Mango"];
let person = {
    myName: "Tanver",
    age: 21,
    dept: "ICT",
    inst: "MBSTU"
};

// for in String, Array, Object
// we will get index
for (var x in text ) {
    console.log(`Index ${x} and item: ${text[x]}`);
}

for (var x in food) {
    console.log(food[x])
}


for (var x in person) {
    console.log(person[x])
}


// for of String, Array
// we will get value
for (const x of text) {
    console.log(x);
}

for (var x of food) {
    console.log(x);
}


// for (var x in person) {
//     console.log(x);
// }