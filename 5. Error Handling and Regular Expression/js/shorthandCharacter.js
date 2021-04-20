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

// character set using brackets[]
reg = /h[eai]llo/i;
reg = /[HA]ello/i;
reg = /[^ha]ello/i;    // anything except without inside this bracket
reg = /^[ha]ello/i;    // must start with h or a
reg = /[A-Z]ello/i;    // start with range
reg = /^[A-Z]/;        // first letter must be upper case
reg = /^[a-z]/;        // first letter must be lower case
reg = /[A-Za-z]/;
reg = /[0-9]ello/i;
reg = /^[0-9]ello/i;
reg = /[^0-9]ello/i;     // Not digit
reg = /^[0-9][0-9][0-9]hello/;

// Quantifier ==> braches {}
reg = /hel{3}o/i;      // Must occer execute 2 times
reg = /hel{2,5}o/i;    // must occer execute 2-5 times
reg = /hel{2,}o/i;    // Atleast 2 times

// Grouping ==> parentheses ()
reg = /^([0-9]){3}/i;
reg = /^([0-9]){5}ello/i;
reg = /^([0-9]x){3}/;
str = "0x5x7x";

// Bangladesh phone number
// total 11 digit
reg = /^\+8801([0-9]){9}$/;
str = "+8801788888888";

// shorthand Character classess
reg = /\w/;       // word character - alpha numeric or _
reg = /\w+/;      // + one or more
reg = /\W/;      // non word character
reg = /\W+/;
reg = /\d/;
reg = /\d+/;     // digit character
reg = /\D/;      // non-digit
reg = /\s/;      // space
reg = /\S/;      //non-space
reg = /Hello\b/;      // word boundary

// Assertion
reg = /x(?=yz)/;    // matches x only stay before y
reg = /x(?!yz)/

str = "dsjk0xyz6kjnaskn";
str = "dsjk0x8yz6kjnaskn";


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