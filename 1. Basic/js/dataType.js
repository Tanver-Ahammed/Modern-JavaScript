// undefined, Empty value, null, NaN
// undefined
var a;
console.log(a)

console.log(a == undefined)

console.log(a === undefined)

// null
a = null

console.log(a)

console.log(null == undefined)

console.log("null === undefined: " + (null === undefined))

// Empty
var b = "";
console.log(b)
console.log(b == a)
console.log(undefined == b)

// NaN
var c = "abc" / 10;
console.log(c)
console.log(c == null)
console.log(c == undefined)
console.log(c == "")