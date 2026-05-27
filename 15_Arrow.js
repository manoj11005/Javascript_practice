const user={
    username:"manoj",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        // this current context ko refer krta hai
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.username="sam"
// abhi context me hamne name change kr diya na 
// to chnage ho jayega this context ke according chalya hai na
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username="Manoj"
//     console.log(this.username);
    // this.username function ke andar undefined show ho rha hai hum sirf object ke andar isko use kr pa rhe hai
// }
// chai()

// const chai=function(){
//     let username="Manoj"
//     console.log(this.username);
// }
// chai()

const chai=()=> {
    let username="Manoj"
    console.log(this);
}
// chai()


// ARROW FUNCTIION
// const addTwo=(num1,num2) => {
//     return num1+num2
// }

// const addTwo=(num1,num2) => num1+num2
// const addTwo=(num1,num2) => (num1+num2)
// implicit return

const addTwo=(num1,num2)=>({username:"manoj"})
console.log(addTwo(3,5));

