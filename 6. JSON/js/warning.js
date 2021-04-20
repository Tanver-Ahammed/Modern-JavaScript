// JSON.stringify --> JS object to JSON string
// JSON.parse()   --> JS JSON to object string

let person1 = {
    name: "Tanver",
    age: 21,
    hometown: "Joypurhat",
    married: false
};

// JS can't use direct JSON

// let person2 = {
//     "name": "Aminul",
//     "age": 20,
//     "hometown": "Kaitahar",
//     "married": false
// };

let person_json = JSON.stringify(person1);
let person_obj = JSON.parse(person_json);

console.log(person_json);

console.log(person_obj);