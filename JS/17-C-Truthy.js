// const userEmail="Nishan.ai"
// const userEmail=""
 const userEmail=[]


if (userEmail){
    console.log("Got user email")

}else{
    console.log("Don't have user email")
}
// falsey values
// false, 0, -0, BigInt, 0n,"", null,undefined, Nan other than this are true

// truthy value
//"0","false"," ", [],{},function(){}

//Nullish Coalescing Operator(??)

let val1;
// val1=5??10
// val1=null ?? 10
// var1=undefined ?? 15
val1=null ?? 10 ?? 20



console.log(val1);