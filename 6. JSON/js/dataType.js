// https://jsonlint.com/
// string (date)
// number
// object
// array
// boolean
// null

// JSON doesn't support undefined, date, function

var person = {
    name: "Tanver",   //string
    age: 21,      // number
    hometown: "Joypurhat",    //string
    married: false,   //boolean
    dob: "02-03-2001",    //date
    test_null: null,    // null
    test_undefined: undefined,  // undefined
    greet: function () {    // function
        console.log(`Hello ${this.name}`);
    }
}
console.log(person);

var person_json = JSON.stringify(person);

console.log(person_json);
