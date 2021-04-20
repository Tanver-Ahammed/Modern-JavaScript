// static function

class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        console.log(`Hello ${this.firstname} ${this.lastname}!`);
    }

    static details() {
        console.log(`Hi, ${this.firstname} ${this.lastname}. I am static function.`)
    }
}


let person1 = new Person("Tanver", "Ahammed");
person1.greeting();
console.log(Person.details());
