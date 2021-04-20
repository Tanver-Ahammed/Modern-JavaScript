// call back function

// setTimeout(function() {
//     console.log("Hello World");
// }, 1000);

// let persons = [
//     {firstname: "Tanver", lastname: "Ahammed"},
//     {firstname: "Aminul", lastname: "Bari"}
// ];

// function createPerson(person) {
//     setTimeout(function() {
//         persons.push(person);
//     }, 4000);
// }


// function getPerson() {
//     setTimeout(function() {
//         let output = '';
//         persons.forEach(function(person) {
//             output += `<li>${person.firstname} ${person.lastname}</li>`;
//         })
//         document.getElementById('output').innerHTML = output;
//     }, 1000);
// }

// createPerson({firstname: "Abu", lastname: "Talha"});

// getPerson();


let persons = [
    {firstname: "Tanver", lastname: "Ahammed"},
    {firstname: "Aminul", lastname: "Bari"}
];

function createPerson(person, callback) {
    setTimeout(function() {
        persons.push(person);
        callback();
    }, 2000);
}


function getPerson() {
    setTimeout(function() {
        let output = '';
        persons.forEach(function(person) {
            output += `<li>${person.firstname} ${person.lastname}</li>`;
        })
        document.getElementById('output').innerHTML = output;
    }, 1000);
}

createPerson({firstname: "Abu", lastname: "Talha"}, getPerson);

getPerson();