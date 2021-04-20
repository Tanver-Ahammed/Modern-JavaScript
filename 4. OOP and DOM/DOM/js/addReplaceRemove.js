// Adding item to DOM
// creating Element
let olItem = document.createElement('li');

// adding id class
olItem.className = 'a new another-class';
olItem.id = 'new-element';
// adding attribute
olItem.setAttribute('title', 'a title to new element.')

olItem.appendChild(document.createTextNode('PHP'));

document.querySelector('ol').appendChild(olItem);

// ----------------------------------------------------
let ulItem = document.createElement('li');
let link = document.createElement('a');

link.setAttribute('href', 'https://www.mail.google.com/')
link.appendChild(document.createTextNode('G-Mail'));

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

// --------------------------------------------------------------------------------
//  Item replacing Element
let newHeading = document.createElement('h1');

newHeading.appendChild(document.createTextNode("Important Content"));
newHeading.className = 'sample-class';
let oldHeading = document.querySelector('h3');


let parent = document.querySelector('.container');
// parent = oldHeading.parentElement;

parent.replaceChild(newHeading, oldHeading);

// -----------------------------------------------------------------------
// Remove element
let listItem = document.querySelectorAll('li');

let list = document.querySelector('ul');


// listItem[2].remove();
// listItem[8].remove();

// list.removeChild(listItem[5]);

list.classList.add("test");
list.classList.add("test-new");

list.classList.remove("sample-class");

val = list.hasAttribute('class');


console.log(val);
console.log(list);
console.log(listItem);