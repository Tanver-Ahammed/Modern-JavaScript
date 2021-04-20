// class (ES6)
// class is template for builting objects

class Person {
    constructor(fname, lname, birthday) {
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }
    calculateAge() {
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

let person1 = new Person("Tanver", "Ahammed", "02-03-2001");

let person2 = new Person("Aminul", "Bari", "05-21-1998");

let person3 = new Person("Abu", "Talha", "06-29-2005");


console.log(person1);
console.log(person2);
console.log(person3);

console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());

console.log(person1.fullname());
console.log(person2.fullname());
console.log(person3.fullname());



// let person1 = {
//     firstname: "Tanver",
//     lastname: "Ahammed",
//     dob: "02-03-2001",
//     fullname: function() {
//         // console.log(`${this.firstname} ${this.lastname}`);
//         return `${this.firstname} ${this.lastname}`;
//     }
// }

// let person2 = {
//     firstname: "Aminul",
//     lastname: "Bari",
//     dob: "05-21-1998",

//     fullname: function() {
//         // console.log(`${this.firstname} ${this.lastname}`);
//         return `${this.firstname} ${this.lastname}`;
//     }
// }

