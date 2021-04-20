// String Iteration
console.log("String Iteration");

let myName = "Tanver Ahammed";

for (var i = 0; i < myName.length; i++) {
    if (myName[i] == " ") {
        continue;
    }
    console.log(`Indes ${i}: ${myName[i]}`);
}


// Array Iteration
console.log("\n\nArray Iteration");
let food = ["cake", "choclate", "Ice-cream", "Lichi", "Mango", "Egg"];
for (var i = 0; i < food.length; i++) {
    console.log(food[i]);
}