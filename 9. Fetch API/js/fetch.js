// Fetch API

document.getElementById("get_data").addEventListener("click", getData);

// Arroe function
function getData() {
    fetch('http://api.icndb.com/jokes/random')
        .then(res => res.json()) 
        .then(data => { console.log(data); })
        .catch(err => { console.log(err); })
}