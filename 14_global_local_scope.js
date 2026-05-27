let a=300;
if(true){

    let a=10
    const b=20
    // var c=30
    // console.log("INNER:",a);

}
// console.log(a);
// console.log(b);
// console.log(c);


/*
generally we do not use var because scope problem 
even it is inside loop which should not be accesseble still 
it is accessed outside the block
*/
function one(){
    const username="Manoj"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()
if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);



// +++++++++++++++ interesting +++++++++++++
console.log(addone(5));
function addone(num){
    return num+1
}

// console.log(addtwo(5));
// this above line gives error because method of 
// declaration of function is different and we are 
// storing value of function in some variable that 
// is why it is not calling becuase it do not na ki is type ka koi variable bhui declrae hua h
const addtwo=function(num){
    return num+2;
}
console.log(addtwo(5));