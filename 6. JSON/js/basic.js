// object
var student = {
    name: "Tanver",
    age: 21,
    hometown: "Joypurhat"
};

// JSON
var student_json = {
    "name": "Aminul",
    "age": 20,
    "hometown": "Joypurhat"
};

var convert_json = JSON.stringify(student);

console.log(student);
console.log(student_json);
console.log(convert_json);

var convert_obj = JSON.parse(convert_json);

console.log(convert_obj);