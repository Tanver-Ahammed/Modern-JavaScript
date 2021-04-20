// Object Method
// Object's element: number, string, date, array, object
let person = {
    firstname: "Tanver",
    lastname: "Ahammed",
    age: 21,
    dob: "03-02-2001",

    fullname: function() {  //this is Method
        return `${this.firstname} ${this.lastname}`;
    }
};


console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullname());