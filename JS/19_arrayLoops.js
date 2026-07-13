// for of 
 

const arr=[1,2,3,4,5,6,]

for (const num of arr) {
    // console.log(num);
}

// for string
const greetings="hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


//  maps=> The map holds the key-value pair and remembers the original insertion of the keys.


const map=new Map()
map.set('NP',"Nepal")
map.set('IN',"India")
map.set('PK',"Pakistan")

// console.log(map);

for (const key of map) {
    // console.log(key)
} 

// destructuring above loops
for (const [key,value] of map) {
    // console.log(key,':-',value);
}


const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",

}
for (const key in myObject) {// forin loops
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`)

}
 

const coding=["js","rubby","java","python","cpp"]

// coding.forEach( function(item){
//     console.log(item)
// })

// coding.forEach((item) => {// another method
//     console.log(item)
// });


function printMe(item){
    console.log(item);
}
coding.forEach(printMe);