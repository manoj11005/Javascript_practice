// Primitive

// 7 types: String , Number, Boolean, null, undefined, symbol, BigInt

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
const bigNumber=34556780988734353566n
console.log(id===anotherId);

// Reference (Non primitive)

// Array, Objects, Functions

const heros=["shaktiman","naagraj","doga"];

let myObj={
    name:"Manoj",
    age:21,
}

const myFunction=function(){
    console.log("Hello world");
}
console.log(typeof scoreValue);
console.log(typeof myFunction);