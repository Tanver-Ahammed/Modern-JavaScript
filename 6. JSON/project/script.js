var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        // console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();


function jsonData(json_data) {
    console.log(json_data);
    var json_obj = JSON.parse(json_data);
    console.log(json_obj);


    for (var x in json_obj.persons) {
        var persons = json_obj.persons;
        // console.log(persons[x]);
        for (var y in persons[x]) {
            console.log(`${y} : ${persons[x][y]}`);
        }
        console.log("\n");
    }

    
}

