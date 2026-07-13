// function addTwoNumbers(number1,number2){//parameter number1 and number2
// console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){//parameter number1 and number2
//  let result=number1+number2;
//  return result;
return number1 +number2;
 
}

const result=addTwoNumbers(3,4)// 3,5 are argument

// console.log("result: ", result)



function loginUserMessage(username){
    if(username===undefined){//   or if(!username)
        console.log("please enter a username")
        return
    }
    return `${username} just logged in` 
}
// console.log(loginUserMessage("Nishan"));
// console.log(loginUserMessage());



function calculateCartPrice(...num1){ // ... is the rest operator or seperade operator
    return num1
}


// console.log(calculateCartPrice(200,300,400));


const user={
    username:"Nishan",
    price:122
}
function handleObject(anyobject){
    console.log(`username is ${anyobject .username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username:"sam",
    price:399
})


const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));