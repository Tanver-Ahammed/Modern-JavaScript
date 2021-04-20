// call back function

let persons = [
    {firstname: "Tanver", lastname: "Ahammed"},
    {firstname: "Aminul", lastname: "Bari"}
];

function createPerson(person) {
    let prom = new Promise(function(resolve, reject) {
        persons.push(person);
        let error = false;
        if (!error) {
            resolve();
        } else {
            reject(`Error!! some thing wrong`);
        }
        
    });
    return prom;
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

createPerson({firstname: "Abu", lastname: "Talha"}).then(getPerson).catch(function(error) {
    console.log(error);
});

getPerson();