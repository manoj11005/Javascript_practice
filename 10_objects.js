// singleton
// object.create

// object literals
const mySym=Symbol("key1")
const JsUser={
    name:"Hitesh",
    "full name":"Manoj Kumar",
    [mySym]: "mykey1",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// JsUser.email="manoj@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="Manoj@google.com"
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo=function(){
    console.log(`Hello Js useer,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
