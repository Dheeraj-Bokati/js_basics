//! TypeScript

console.log("hello world");

let a = 10;

a = 78;

//a = "hello";  >> error string is not assignable to type 'number'

let b : string;
// b = 12;

//* variables declaraction method

//! let , const , var

//* datatypes
//? number
let c:number;

//? string
let d:string;

//? boolean
let e: boolean;

//? null
let f:null;

//? undefined
let g:undefined;

//!
//? any
let h: any;
h = "any";
// h = 12;
// console.log(h.toUpperCase()); //it is compiletime error

//? unknown
let i:unknown;

i="unknown";
// i=34;

//console.log(i.toUpperCase()); // it is typetime error
if (typeof i === "string"){
    console.log(i.toUpperCase());
}

//? void
let j:void;

//? never

//* array

let numbers = [1, "2", true];

numbers.push("12");

let strings : string[] = ["3", "abc"];
let abc : Array<string> = ["abc", "web", "hello"];
// strings.push(12); //! not allowed

//* tuple
//? length exactly and requirement also
// user => [name , email , age]

let tuple: [string, string, number] = ["Dheeraj", "db@gmail.com", 22];

let tuple2:[string, string, number] [] =[
    ["Dheeraj", "db@gmail.com", 22],
    ["Dheeraj", "db@gmail.com", 22],
];

//! Object

let user:{
    name: string;
    email: string;
    password: string;
} = {
    name : "john",
    email : "john@gmail.com",
    password : "12345",
}

let user1 : {
    name: string;
    email: string;
    password: string;
} = {
    email:"",
    password:"",
    name:""
}

//! interface
//? is used for object shape

interface IUser {
    name: string;
    email: string;
    password: string;
    phone?: string;     //? optional property
}

let user2: IUser ={
    name:"hello",
    email:"abc",
    password:"123"
}

let users:IUser[] // users:Array<IUser>
 = [ 
    {
        name:"",
        email:"",
        password:""
    } ,
    {
    name:"hello",
    email:"abc",
    password:"123"
}
];

//! type alias
//? is used for everything

type TUser = {
    readonly id: string;
    name: string;
    email?: string;
}

let user3: TUser ={
    id :"1",
    name: "abc"
}
user3.name = "xyz";
// user3.id = "2"; // error >> cannot assign id

type Tuple =[string, string, number];

let useTuple : Tuple =["","",1];

//! union  |
type ID = string | number;
// let id : string | number;
let id : ID = 'one';
id = 12;

//! intersection &
type TUserWithPass = TUser & {
    password:string;
}

type A={
    a:string;
    c:string;
};

type B={
    b:string;
};

type A_OR_B = A | B;
type A_AND_B = A & B;

let a_b: A_OR_B ={
    a:"",
    b:""
}

let a_and_b : A_AND_B ={
    a:"",
    b:"",
    c:""
}


//! type literal

// success, fail, error

let responseStatus : "success" | "error" | "fail";
responseStatus = "success";
// responseStatus = "1234555";

//! function type

const greet = (name:string) => {
    console.log("Good morning", name);
};

greet("Dheeraj");
//greet(123);

// type ISum = (x:number , y:number) => number;

// const SUM : ISum =(a,b) => {
//     return a+b;
// };

//! optional parameter
// const sum = (a: number, b?: number):number => {
//     return a+b;
// };

const sum = (a: number, b: number=0):number => {
    return a+b;
};
console.log(sum(12));
console.log(sum(12,12));

// getFullName(user) => user.first_name + user.last_name

type UName = (first_name:string , last_name:string) => string;

const getFullName : UName =(first,last) =>{
    return first+last;
}

console.log(getFullName("Dheeraj","Bokati"));

/*
const getFullName = (user : {
first_name: string;
last_name: string;
}): string => {
// return user.first_name+" " +user.last_name;
return `${user.first_name} ${user.last_name}`;

};
*/

// declaration merging

interface IA {
    a:string;
};

interface IA {
    b:string;
};

let obj: IA ={
    a:"",
    b:"",
};

type TA ={
    a:string;
};

// type TA={
//     b:string;
// };   //! Duplicate identifier "TA".

//! class

class User {
    public name: string;
   protected email:string;
    private password:string;

    constructor (name:string, email:string,password: string){
        this.email = email;
        this.name = name;
        this.password= password;
    }
    getPassword()   {
        return this.password;
    }

}

//! OR

class User1 {
    
    constructor (
        public name: string,
   protected email:string,
    private password:string,
                ){
        this.email = email;
        this.name = name;
        this.password= password;
                }
    getPassword()   {
        return this.password;
    }

}

const user34 = new User("","","1234455");

//! utility types

type TLogin ={
    email:string;
    password:string;
};

type TRegister = {
    name : string;
    phone?: string;

} & TLogin;

interface ILogin {
    email: string;
    password: string;
}

interface IRegister extends ILogin{
name: string;
phone?: string;
} 

let O:IRegister ={
    name :"",
    email:"",
    password:"",
}


//! every field Required
let O1: Required <IRegister> = {
name:"",
email:"",
password:"",
phone:"",
}

//! every filed Optional
let O2: Partial <IRegister>;

//! every filed ReadOnly
let O3: Readonly <IRegister>;

//! Pick


//! Omit



//! generic

// interface
interface IBox <T>{
    value: T; 
}; 

let box : IBox <string>= {
    value : '',
};

let box1 : IBox  <number> = {
    value: 1,
};

let box2 : IBox <{x: number; y:number}> = {
    value : {
        x:12,
        y:12,
    },

}; 


const wrapper = <T> (a:T): T => {
    return a;
}

wrapper<string>("web");
wrapper<number>(12);
wrapper<{a: string; b:string;}>({a:"", b:""});
wrapper<number[]> ([12,3,4,5,6,7,7]);

