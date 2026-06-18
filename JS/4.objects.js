//! Objects
// let user_name = "John";
// let user_age = 30;

//* object constructor
const obj = new Object();
obj.name = "John";
obj.age = 30;
console.log(obj);

//* object literal {}
const obj1 = {
    name: "John",
    // "full name" : "John";
    age: 30,
};
console.log(obj1);

//! accessing/reading object propertoes
console.log(obj1.name);     //? dot notation
//// console.log(obj1.full name); 
console.log(obj1["name"]);  //? bracket notation
// console.log (obj1["full name"]);

let key = "age";
console.log(obj1[key]);
// // console.log (user.key);

//! adding new properties

obj1.email = "john@gmail.com";

const new_key = "id";
const new_val = 12345;
obj1[new_key] = new_val;

console.log(obj1);

//! modify object properties

obj1.name = "Jane";
console.log(obj1);

//! destructing
// let name = obj1.name;
// let age = obj1.age;

let {name, age} = obj1;
console.log(name, age);

let {name: user_name, age: user_age} = obj1;
console.log(user_name, user_age);


//! rest op ...

let {age,...rest } = obj1;
console.log(age, rest);

//! spread op ...

let o1 = {
    name: "John",
    age: 30,
};

let o2 = {
    email: "john@gmail.com",    
};

let o3 = {...o1, ...o2};
console.log(o3);


//! nested object
const user1 = {
    name: "John",   
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    },
};
const user2 = {
    name: "Jane",   
    age: 25,
};


//! optional chaining [?.]
console.log(user1.address?.city);    // Output: "New York"
console.log(user2.address?.city);   // Output: undefined

//It can be solve using if else statement but it is not practically posible for huge data. So we can use nullish coalescing operator [??] to provide a default value if the left-hand side is null or undefined.

//! nullish coalescing operator [??]

console.log(user1.address?.city ?? "City not found");   // Output: "New York"
console.log(user2.address?.city ?? "City not found");   // Output: "City not found
