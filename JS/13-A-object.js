//singleton->construtor bata banayo vane matra singleton banxa
// literals -> yasbata singleton bandaina

//object leterals

const mySym=Symbol("key1")


const JsUser={// this is object
    name:"Nishan", /// name is key and Nishan is value
    "full name":"Nishan Dahal",
    [mySym]:"mykey1",
    age:22,
    email:"nishandahal@gmail.com",
    location:"Kathmandu",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
//  console.log(JsUser.email)
//  console.log(JsUser["email"]) // alternate method, mathi ko full name lai (.) bata access garna mildaina so hamile yo method use garnu parxa
//  console.log(JsUser["full name"])
//  console.log(JsUser[mySym])

 //to access key value and to change value in object

 JsUser.email="dahal107@gmail.com"
//  Object.freeze(JsUser);
 JsUser.email="dahal1072323@gmail.com"
//  console.log(JsUser);

 //function in object

 JsUser.greeting=function(){
    console.log("Hello Js User")
 }
  JsUser.greetingTwo=function(){
    console.log(`Hello Js User,${this.name}`)
  }
 console.log(JsUser.greeting())
 console.log(JsUser.greetingTwo())



