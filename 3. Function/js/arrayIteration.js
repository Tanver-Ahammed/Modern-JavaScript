// Array iterating using forEach

let foods = ["cake", "ice-cream", "bread", "chocolate", "mango"];
let numbers = [5, 10, 15, 20, 25];

// 1st parameter : Item
// 2nd parameter : Index
// 3rd parameter : whole Array
console.log("forEach way")
foods.forEach(function(itemValue, index, array) {
console.log(`Index ${index}: ${itemValue}`);
console.log(array);
});

// second way -----------------------------------
console.log("\n\nanother way")

let printUsingExpressionFunc = function(itemValue, index, array) {
console.log(`Index ${index}: ${itemValue}`);
console.log(array);
}

foods.forEach(printUsingExpressionFunc);

// third way -------------------------------------

console.log("\n\nanother way")
let printUsingArrowFunc = (itemValue, index, array) => {
console.log(`Index ${index}: ${itemValue}`);
console.log(array);
}

numbers.forEach(printUsingArrowFunc);


// -------------------------------------------------------------------------------
// ----------------Array Iteration Using Mapping----------------------------------
// -------------------------------------------------------------------------------
console.log("----------------Array Iteration Using Mapping-----------------------");

function addSomeThing(item) {
    return `${item} is a Food`;
}

let arr_res = foods.map(addSomeThing);
let arr_sq = numbers.map(function(item) {
    return item * item;
});
console.log(arr_res);
console.log(arr_sq);