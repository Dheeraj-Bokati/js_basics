//! commonJS module

// const add = (a,b) => {
//     return a+b;
// };

// //console.log(add(12,7));

// // module.exports = add;



// const sub = (a,b) => {
//     return a-b;
// };

// module.exports = {
//     add,
//     sub,
// }

/*
exports.add = (a,b) => {
    return a+b;
};


exports.sub = (a,b) => {
    return a-b;
};
*/

//! es Module

const sum = (a,b) => {
    return a+b;
}


//* Export                      //* Import
//? default export              //? default import
//? named export                //? named import

// export default sum;  // only one can be export on default

// export {add, sub}; //? named export
//! named export

// export const add = (a,b) => {
//     return a+b;
// };


// export const sub = (a,b) => {
//     return a-b;
// };

export const add = (a,b) => {
    return a+b;
};


export const sub = (a,b) => {
    return a-b;
};

export default add;