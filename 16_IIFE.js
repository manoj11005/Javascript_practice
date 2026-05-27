// immediately invocked function expressions(IIFE)
function chai(){
    console.log(`DB CONNECTED`);
}
// chai()
// global scope ke pollution se bachne ke liye IIFE use krte hai
(function chai(){
    // named IIFE
    console.log(`DB connected`);
}) ();

(function aurcode(){
    console.log(`db connected two`);
})();

((name)=>{
    console.log(`db connected to ${name}`);
})("manoj")