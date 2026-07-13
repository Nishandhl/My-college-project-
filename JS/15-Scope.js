let a=10
const b=20
var c=30

{}//scope
if (true){
    let a=10
  const b=20
   var c=30
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="Nishan"
    function two(){
        const website="youtube"
        // console.log(username);
    }

    // console.log(website);

    two()
}
one()


if (true){
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);



//++++++++++++++++++++++++intresting++++++++++++++++

// addone(5) //can be done this way
function addone(num){
   return num+1;
}
addTwo(5)


//another way
// addTwo(5)//cannort be done this way
const addTwo=function(num){
    return num + 2
}
addTwo(5)