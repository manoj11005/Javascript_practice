const name="Manoj"
const repoCount=50
// console.log(name+repoCount+"value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String('Preeti-Manoj-rohit');
console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t')) ;
const newString=gameName.substring(0,4);
console.log(newString);
const anotherString=gameName.slice(-6,3);
console.log(anotherString);
const newStringOne="  Manoj  "
console.log(newStringOne);
console.log(newStringOne.trim());
const url="https://manoj.com/manoj%20rajpoot"
console.log(url.replace('%20','_'));
console.log(url.includes('preeti'));
console.log(gameName.split('-'));