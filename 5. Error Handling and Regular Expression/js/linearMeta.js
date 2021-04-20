// Linear and Meta character
let reg;
let str;

// Linear Character
reg = /Hello/;
reg = /hello/i;
reg = /lo w/i;
reg = /low/i;

// Meta characters
reg = /^hello/i;     // Meta = /^/ = Must start with hello
reg = /world$/i;     // Meta = /^/ = Must end with world
reg = /^hello$/i;    // Meta = /^$/ = Must start and end with world
reg = /^hello$/i;    // . = matched any one character
reg = /h*llo/i;      // * = 0 or more times
reg = /he?llo/i;     // ? = optional
reg = /he?a?llo/i;
reg = /hello\?/i;    // \? = escaping

str = "Hello World";
str = "Again Hello World";

str = "Hello Hello";
str = "Hello";
str = "Heeello world";

str = "Hello";
str = "Hllo";
str = "Hallo";
str = "Heallo";
str = "Hello? World";

console.log(reg.exec(str));

// calling the function
regTest(reg, str);

function regTest(re, st) {
    if (re.exec(st)) {
        console.log(`${st} matches "${re.source}"`)
    } else {
        console.log(`${st} doesn't match "${re.source}"`);
    }
}