const marvel_heros=["thor","IronMan","SpiderMan"]
const dc_heros=["superman","flash","batman"]
 
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1n]);

const allheros= marvel_heros.concat(dc_heros)
console.log(allheros);

//another methods 
// called spread methods

// const all_newHeros=[...marvel_heros,...dc_heros]// used to concate multiple array 
// console.log(all_newHeros);


const another_array=[1,2,3,[4,5,6],7[6,7,[4,5]]]
const real_another_array= another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("Nishan"))
console.log(Array.from("Nishan"))
console.log(Array.from({name:"NishanDahal"}))//this return empty array->imtresting


//converting the value to array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))//.of ->Returns a new array from a set of elements.

