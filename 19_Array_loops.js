const arr=[1,2,3,4,5]
for(const num of arr){
    // console.log(num);
}

const greetings="Hello world!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

// Maps 
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
// console.log(map);
// maps unique value store krte hai and order ko bhi maintain krte hai

for(const [key,value] of map){
    // console.log(key,':-',value);
}

// const myObject={
//     game1:'NFS',
//     game2:'Spiderman'
// }
// for(const [key,value] of myObject){
//     console.log(key,':-',value);
// }
// object se map ki trh iterate krke print nahi krwa skte not iteratable



const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const prog=["js","cpp","py","java","rb"]
for(const key in prog){
    // console.log(`${prog[key]}`);
}

// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// for(const key in map){
    // console.log(key);
    // map iteratable nahi h
// }


// forEach operation
const coding=["js","ruby","java","python","cpp"]
// coding.forEach(function(val){
//     console.log(val);

// })

// coding.forEach((item)=>{
//     console.log(item);

// })

// another method
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// we can access item with index and array also
// })

const myCoding=[
    // array ke andar objects hai
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})