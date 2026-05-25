// stack(Primitive), Heap(Non-Primitive)
let myYoutubename="ManojRajpootDotcom"
let anothername=myYoutubename
anothername="Chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="manoj@google.com"

console.log(userOne.email);
console.log(userTwo.email);
/*
stack primitive type hai iske andar copy banti temprarory copy
value change nahi hoti sirf ek copy pass hoti hai

Heap non-Primitive tipe ka hai isme by refrence pass hoti hai isme copy nahi original refrence jata hai
aur value change ho jati hai as example shown email get changed 
*/