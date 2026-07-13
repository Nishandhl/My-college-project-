// forof
const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
}
// for string
const greetings="hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// maps=> The map holds the key-value pair and remembers the original insertion of the keys.

const map =new Map()
map.set("IN","India")
map.set("NP","Nepal")
map.set("PK","Pakistan")
map.set("NP","Nepal") // dublicate value print gardaina

// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key,value] of map) {
    // console.log(key,':-',value);
}
//////
const myObject={
      game1:'nfs',
      game2:'spiderman'
}
// for (const [key,value] of myObject) { // it dosenot work object
    // console.log(key,':-',value)// not iterable
// }


/////////////// forin loop is used for Object
const myObject1={
    js:"JavaScript",
    cpp:"C++",
    rb:"rubby"
}
for (const key in myObject1) {
//    console.log(`${key} shortcut is ${myObject1[key]}`);  
}
// const programming=["js","rb","py","java","cpp"]

// for (const key in programming) { 
//     console.log(programming[key])   
// }
//////////////////////////////////////////////// for each Loop
const coding=["js","rb","py","java","cpp"]

coding.forEach( function (val){
    console.log(val);
})
coding.forEach((item)=>{
    console.log(item);
})
