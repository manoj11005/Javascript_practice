// const isuserLoggedIn=true;
// if(2==="2"){
//     console.log("executed");
// }
// this === sign strict equal consider data typ[es also if two different data ttypes will not consider]


// const temp=41
// if(temp<50){
//     console.log("temp is less than 50");
// }else{
//     console.log("temp is more than 50");

// }

// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power:${power}`);
// in above line power is not accesseble because that is in the if loop so access is not possible


// const balance=1000;
// if(balance>500) console.log("test");

// const userLoggedIn=true;
// const debitCard=true;
// const loggedInFromGoogle=false;
// const loggedInFromEmail=true;
// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }
// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("User logged in");
// }

// const month=3
// switch(month){
//     case 1:
//         console.log("january");
//         break;

//     case 2:
//         console.log("february");
//         break;
    
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("defaut");
//         break;
// }


// const userEmail=""
// const userEmail=[]
// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }
// falsy values-> false,0,-0,BigInt 0n,"",null,undefined,NaN
// truthy values-> "0",'false'," ",[],{},function(){}


// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null undefined
let val1;
// val1=5??10
// val1=null ?? 10
// val1=undefined ?? 15
val1=null ?? 10 ?? 30
// values ke comparision me jo value phle ayegi wo assign ho jayegi
// console.log(val1);

//  terniary operattor
// condition ? true : false;
const iceTeaPrice=100
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80");