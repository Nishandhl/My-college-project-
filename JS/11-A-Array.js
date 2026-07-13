//Array
const myArr=[0,1,2,3,4,5,6,]
const myHeros=["batman","IronMan","CaptainAmerica"]
 
const myArr2=new Array(1,2,3,3);
// console.log(myHeros[2])
// console.log(myArr2[3]) 


// myArr.push(8)// used to push value in array
// myArr.push(9)
// myArr.pop()// used to pop last value of array

// myArr.unshift(9)// not good to do because it shift all value and it took 1st place
// myArr.shift()

// console.log(myArr.includes(3));// check the value 3 in array give ans in true or false
// console.log(myArr.indexOf(3))

// const newArr=myArr.join()// Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);// checking the array 



// slice , splice

console.log("A", myArr);

const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3);

console.log("C",myArr);
console.log(myn2);


