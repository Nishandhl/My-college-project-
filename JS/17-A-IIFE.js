//Immediately Invoked Function Expression(IIFE).......()()



(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();

//unnammed IFEE
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Nishan')