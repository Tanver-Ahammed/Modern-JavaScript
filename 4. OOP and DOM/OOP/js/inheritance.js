// sub class
// Inheritance

class Person {   //base class
    constructor (fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        return `Hello, ${this.firstname} ${this.lastname}!`;
    }
}

class Customer extends Person {    // sub class
    constructor(fname, lname, phone, membership) {
        super(fname, lname);
        this.phone = phone;
        this.membership = membership;
    }
    fullname() {
        console.log(`Customer Name is: ${this.firstname} ${this.lastname}`);
    }
}

let person1 = new Person("Sabbir", "Ahammed");
console.log(person1);
console.log(person1.greeting());

let customer1 = new Customer("Tanver", "Ahammed", "01828-586035", "P-0571");
console.log(customer1);
console.log(customer1.greeting());
customer1.fullname();