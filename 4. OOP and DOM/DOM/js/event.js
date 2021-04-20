// Evebts of javascript

// onClick
function massage() {
    console.log("Hi, Tanver")
}


// event lisener
// document.getElementById('sample-button').addEventListener('click', mbstuMassage);
document.querySelector('.container').addEventListener('mousemove', mbstuMassage);
document.querySelector(".container").style.background = "lightgray";

function mbstuMassage(e) {
    let val = e;

    val = e.target.id;
    val = e.timeStamp;
    
    val = e.type;

    val = e.clientY;
    val = e.clientX;

    val = e.offsetX;
    val = e.offsetY;

    val = this;

    this.style.background = `#${e.offsetX}`;
    console.log(this);
    console.log(val);
    // console.log("Mawlana Bhashani Sciencce and Technology University.")
}