// const sentence="The quick brown fox jumps over the lazy dog.";
// let index = 5;
// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// // output:An index of 5 returns the character u
// console.log(`An index of ${index} returns the character ${sentence.at(-7)}`);



const myString ="Every green bus drives fast.";

// using length property and charAt() method
const lengthWay =myString.charAt(myString.length-2);
console.log(lengthWay);

// another way console.log(myString.charAt(3));



//using slice() method
const sliceway= myString.slice(-2,-1);
console.log(sliceway);

// Using at() method
const atWay = myString.at(-2);
console.log(atWay);


//concat()

const str1 ="hello";
const str2 ="world";
const str3=" nishandahal"

 console.log(str1.concat(" ",str2));
 console.log(str1.concat(",",str2));
 console.log(str1.concat(str2,str3));

 // using valueOf
 const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"

