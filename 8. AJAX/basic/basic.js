// Asynchronous Programming
// AJAX = Asynchronous JavaScript And XML
// Get data without loading the page

document.getElementById('get_data').addEventListener('click', loadData);

function loadData() {
    // create XHR Object (XML http request)
    let xhr = new XMLHttpRequest();
    
    // open function
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function() {
        // HTTP status
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`
        }
    }

    // xhr.onreadystatechange = function() {
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();
    
    
    // console.log(xhr); 

}
