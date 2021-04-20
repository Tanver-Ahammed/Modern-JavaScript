// DOM

let val;
val = this;
val = window.document;
val = document.all;
val = document.all.length;
val = document.body;
val = document.URL;
val = document.characterSet;
val = document.forms[0].method;
val = document.forms[1].action;
val = document.links;
val = document.links[0].href;
val = document.images;
val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

links = document.links;
let linkArr = Array.from(links);
linkArr.forEach(link => {
    console.log(link);
});

console.log(val);