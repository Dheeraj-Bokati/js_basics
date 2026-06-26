console.log("Hello World");

// js engine
// se

// v8 engine + 
// libuv
// os, fs, path + ...

//! module
//* local module
//?   1. commonJS   --> default : require()
//?   2. es module  --> import/export

//* third party module / npm library
//* core module

// const add = (a,b) => {
//     return a+b;
// };

//! commonJS module
/* const math = require("./math.js"); 

// const {add,sub} = require("./math.js")
// console.log(add(21,97));
// console.log(sub(23,4));

console.log(math);

console.log(math.add(21,97));
console.log(math.sub(23,4));
*/

//! es Module

// import x from "./math.js";  //! default import
// console.log(x(10,10));

// import {add, sub } from "./math.js"; //! named import
// console.log(add(12,8));

import add, {sub} from "./math.js"; //! both default & named import

console.log(add(21,97));
console.log(sub(23,4));

//? npm -> node package manager

//* npm init -> initialize node project / package.json
// npm init -y
//* npm install <package_name> / npm i <package_name>
//* npm install <package_name>@version / npm i <package_name>@version
//* npm install  / npm i 
//* npm uninstall <package_name>
//* npm run <script_name>
