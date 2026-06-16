console.log ("Hello World");  // output at browser console, or IDE terminal

// absolute path --> complete path from root file to current file
// relative path --> relative path from current location

// ./ --> represent same folder , ../ --> represent previous folder or parent folder (one step back)

//! variables
console.log(10);

//! variable declaration methods
// let, const, var

var a = 10; // 
a = 'xyz';  // re-assigning
console.log(a); // output: xyz


let b = 100;
b = 'abc';  // re-assigning
console.log(b); // output: abc

const c = 123;
// c = 45; // can't re-assigning : Error

// 2015's update is let and const before then only var exist
//? why update required
// Bug: var can create same named variables for more times which creates errors
var x = 10;
x = "hello";

var x = 365;
console.log(x); // output: 365

//-------------

let y = 12;
y = 45;

// let y = 23; // error : c is already declared.

console.log(y); //output: 45

//------

const d = 100;
// d= 65; // error: d is a const variable can't be changed.
// const d = 89; // error : d is already exist
// const e; // error: missing initializer in const declaration.
var g;
let f;
const e = 0;


let i = 10;
let h = 'abc';
console.log(i, h); // output: 10 abc
console.log(i + h); // output: 10abc
