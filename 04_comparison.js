// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);
console.log("2">1);
console.log("02">1);
console.log(null>0);
console.log(null==0);
console.log(null>=0);
/*
the reason is that an equality check==and omparison> < >= <= work
differently.
Comparison convert null to a number treating it as 0 Thats why (3) null>=0 is true and 1 null>0 is a false.
*/
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
