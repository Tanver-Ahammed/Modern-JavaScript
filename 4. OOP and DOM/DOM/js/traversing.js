// Traversing the DOM
let val;

let list = document.querySelector('ul');
let listItem = document.querySelector('ul li:first-child');


val = list;
val = listItem;

// get the child node
val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[2];
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;


// Node Type with Number
// 1. Element
// 2. Attribute 
// 3. Text Node
// 8. comment
// 9. Document Itself
// 10. Doctype

val = list.childNodes;

val = list.children[1];

list.children[0].textContent = 'Google++'

val = list.children[1].children[0];

val = list.children[1].children[0].href;

val = list.firstChild;

val = list.firstElementChild;

val = list.lastChild;

val = list.lastElementChild;

val = list.childElementCount;

val = listItem.parentElement;

val = listItem.parentNode;

val = listItem.parentElement.parentElement;

val = listItem.nextSibling;

val = listItem.nextElementSibling;

val = listItem.nextSibling.nextSibling;

val = listItem.nextElementSibling.nextElementSibling;

console.log(val);

listItem = document.querySelector('ul li:last-child');

val = listItem.previousSibling;

val = listItem.previousElementSibling;

console.log(val);
