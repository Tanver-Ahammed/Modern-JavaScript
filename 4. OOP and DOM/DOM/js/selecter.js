// document getElementById()

let val;

// Getting an element
val = document.getElementById("document-title");
val = document.getElementById("document-title").id;
val = document.getElementById("document-title").className;

// changing style
document.body.style.background = 'skyblue';
document.getElementById("document-title").style.background = '#333';
document.getElementById("document-title").style.color = 'blue';
document.getElementById("document-title").style.padding = '10px';

// changing content
val = document.getElementById("document-title");
val.textContent = 'New Title';
val.innerText = 'Again New Title';
val.innerHTML = '<i>Again Again New Title<i>';



// document quary selector
val = document.querySelector('#document-title');   //calling by id

val = document.querySelector('.title-class');      // calling by class

val = document.querySelector('h3');                // calling by tag

val = document.querySelector('ol');

val = document.querySelector('li');

val = document.querySelector('ol li');

val = document.querySelector('ul li');
val.style.background = 'red';
val.style.color = 'white';

val = document.querySelector('li:last-child');
document.querySelector('li:nth-child(3)').innerText = 'HTML / CSS';


console.log(val);