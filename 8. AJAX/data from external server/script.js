// Asynchronous Programming
// AJAX = Asynchronous JavaScript And XML
// Get data without loading the page
// http://api.icndb.com/jokes/random

document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes() {
    let number = document.getElementById('numberJokes').value;

    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = function() {
        document.getElementById(`output`).innerHTML = "Loading.........";
    }

    xhr.onload = function() {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let jokes = data.value;
            // console.log(data);
            console.log(jokes);

            let output = `<ol>`;
            for (var x in jokes) {
                console.log(jokes[x].joke);         // output on console
                output += `<li>${jokes[x].joke}</li>`;      // output on browser display
            }

            output += `</ol>`;

            document.getElementById(`output`).innerHTML = output;

        }
    }

    xhr.send();
    
    
    // console.log(xhr); 

}
