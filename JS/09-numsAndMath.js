// const score= 400;
// console.log(score);//output:400

// const balance = new Number(100);
// console.log(balance);//output:[Number: 100]

// console.log(balance.toString());//output:100
// console.log(balance.toString().length);//output:3
// console.log(balance.toFixed(2));//output:100.00

// const otherNumber=123.854546;

// console.log(otherNumber.toPrecision(3))//output:124

// const hundreds=1000000;
// console.log(hundreds.toLocaleString())//output:1,000,000
// console.log(hundreds.toLocaleString('en-IN'));//output:10,00,000



//+++++++++++ MATHS +++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//output:4
console.log(Math.round(4.6));//output:5
console.log(Math.ceil(4.2));//output:5
console.log(Math.floor(4.9));//output:4
console.log(Math.min(4,5,6,3,3,5,1));// output:1
console.log(Math.max(4,5,7,8,1,2,9));// outputL:9

console.log(Math.random());// gives value 0 to 1;

console.log((Math.random()*10)+1); //output 1 vanda mathi dinxa kinavane 1 add garde paxi if 1 add garena vane 0 to 10 sama dinxa
console.log(Math.floor(Math.random()*10)+1);


const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min + 1)) + min );//10 and 10 ko bicha ma valu dinxa floor ma