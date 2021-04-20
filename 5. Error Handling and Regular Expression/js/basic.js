// Error Handing

console.log(`Before Error`)

try {
    // test();
    undefined.test();
} catch (err) {
    console.log(err);
    console.log(err.message);
    console.log(err.name);
    console.log()
} finally {
    console.log(`I am inside Final.`)
}

console.log(`After Error`);

// Generrating Error
let val = 10;

try {
    if (val > 15) throw `Too Big`;
    else if (val <= 15) throw `Too Small`;
} catch (err) {
    console.log(err);
}
