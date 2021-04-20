var marks = prompt(`Enter your Marks: `);

// casting
marks = parseInt(marks);

var result = null;

// start if statement
if ( marks > 100 || marks < 0 ) {
    result = `INVALID MARKS!!`;
} else if ( marks >= 80 ) {
    result = `A+`;
} else if (marks >= 70 ) {
    result = `A`;
} else if ( marks >= 60 ) {
    result = `A-`;
} else if ( marks >= 50 ) {
    result = `B`;
} else if ( marks >= 40 ) {
    result = `c`;
} else if ( marks >= 33 ) {
    result = `D`;
} else {
    result = `FAILED!!`;
}

console.log(`Your grade is: ${result}`)