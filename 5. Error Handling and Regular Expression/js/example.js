// Example
let reg;
let str;

// postal code
reg = /^[0-9]{4}$/;
str = "4000";

// phone number
// 01788888888 +8801788888888 8801788888888
reg = /^(\+)?(88)?01[0-9]{9}$/;
str = "+8801788888888";

// email
// tanver322001@gmail.com  tanvermbstuit16@gmail.com
// bahubrihi8.learn5@edu.com.bd

reg = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/

str = "bahubrihi8learn5@edu.com.bd";
str = "tanver322001@gmail.com";
str = "tanvermbstuit16@gmail.com";


console.log(reg.test(str));