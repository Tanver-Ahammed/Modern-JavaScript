var x = "Hello ";
var y = "world";

var st = x + y; 
console.log(st);

st = "45" + "55";
console.log(st);

st = "45" + "55" + "Tanver";
console.log(st);

st = 45 + 55 + "Tanver";
console.log(st);

st = "tanver" + 45 + 55;
console.log(st);

st = "Hello '''''' world";
console.log(st);

var st = "Tanver\t\tAhammed";
console.log(st);

var st = "Tanver\n\tAhammed";
console.log(st);

var st = "Tanver\t\tAhammed";
console.log(st.length);

var st = "I am Tanver Ahammed.";
console.log(st);
console.log(st.length);

// Indexing
var myName = "Tanver"
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);
console.log(myName[3]);
console.log(myName[4]);
console.log(myName[5]);
console.log(myName[6]);

myName = "tanver ahammed";
console.log(myName.toUpperCase());

myName = "TANVER AHAMMED";
console.log(myName.toLocaleLowerCase());

myName = "     Tanver Ahammed         ";
var temp = myName.trim();
console.log(temp);

// slice
myName = "Bohubrihi";
console.log(myName);
temp = myName.slice(1, 5);
console.log(temp);
console.log(myName.slice(-5, -1));

// substring 
myName = "Tanver Ahammed";
temp = myName.substring(2, 8);
console.log(temp);
console.log(myName.substring(2));

// replace
temp = myName.replace("Ahammed", "Aminul");
console.log(temp);

// concat
var a = "Tanver";
var b = " Ahammed";
var c = " Aminul";
var d = " Bari";

temp = a.concat(b, c, d);
console.log(temp);


