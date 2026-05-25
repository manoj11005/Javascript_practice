// Dates
let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);
// let myCreatedDate=new Date(2023,0,23,5,3)
// in javascript months count startr from 0
// let myCreatedDate=new Date("2023-01-12")
let myCreatedDate=new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// will get in millisecond
// console.log(Math.floor(Date.now()/1000));
// now will get values in seconds

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday: "long",
})