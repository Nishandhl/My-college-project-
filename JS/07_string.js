
let obj={
    item:"pen",
    price:10,
}

console.log(`the cost of ${obj.item} is ${obj.price} rupees`)// by using ->Template Literals most efficient way to write a code

console.log("the cost of", obj.item,"is",obj.price,"rupees");// normal way to print 


const name=" nishan"
const repoCount= 50

//console.log(name + repoCount+"value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName=new String("Nishan-Dhl");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));

// console.log(gameName.indexOf('D'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-9,4);
console.log(anotherString);

const newStringOne ="  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim()-> to remove whiteSpace

const url= "https://nishan.com/nishan%20dahal"
console.log(url.replace('%20','-'));

console.log(url.includes('nishan'))
console.log(url.includes('ram'))






