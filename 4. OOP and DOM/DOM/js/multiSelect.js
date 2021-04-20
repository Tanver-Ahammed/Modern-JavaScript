// Multi Selector
// document.getElementsByClassName()

let list = document.getElementsByClassName('sample-class');

// change style
let val = list[0];
val.style.background = 'lightpink';
val.style.color = 'green';
val.style.padding = '10px';
val.textContent = "Important Content"


// document.getElementsByTagName()
list = document.getElementsByTagName('li');

list = document.querySelector('ol').getElementsByTagName('li');

let listArr = Array.from(list);

listArr.forEach(element => {
    // console.log(element);
});

// document.querySelectorAll()
// id--> #
// class--> .
// tag--> nothing
// console.log("\n\n");

list = document.querySelectorAll('ul li');


val = list[3];

console.log(list);
list.forEach(element => {
    console.log(element);
})


let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(element => {
    element.style.background = 'skyblue';
    element.style.color = 'white';
});

liEven.forEach(element => {
    element.style.background = 'lightgray';
});

console.log(liOdd);
console.log(liEven);

