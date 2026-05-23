const accountId=144553
let accountEmail="mk4473023@gmail.com"
var accountPass="Manoj@2005"
accountCity="Jaipur"
let accountState;
// if not giving value it will show as undefined 
// accountId=2  not allowed to change const keyword
accountEmail="preeti@gmail.com"
accountPass="12345"
accountCity="Lucknow"
console.log(accountId);
/*
prefer not to use var
Because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState]);
