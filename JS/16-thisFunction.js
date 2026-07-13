const user ={
    username : "Nishan",
    price:999,

    welcomeMessage:function(){
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
    }
}

// user.welcomeMessage()
// user.username='Dahal'
// user.welcomeMessage()
// console.log(this);


// const chai=function(){
//     let username="Nishan"
//     console.log(this.username);
// }


// function chai(){ /// this dosenot work in function
//     let username="Nishan"
//     console.log(this.username);
// }
// chai()


//=========Arrow Function=============

const chai=() => {// arrow function
    let username="kriti"
    console.log(this.username);
}
chai()


// const addtwo=(num1 , num2) =>{
//     return num1 + num2
// }
// console.log(addtwo(3,4))

//====another method to return value without using (return)(implict method)
// const addtwo=(num1 , num2) => (num1 + num2)

//=========returning object
const addtwo=(num1,num2) =>({username:"Nishan"})

console.log(addtwo(3,4))
