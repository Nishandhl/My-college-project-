
//1.stack(primitive)=stack stores copy of value,
// 2. Heap(Non-primitive)=point to same memory location

let myName="Nishan Dahal"

let anothername="Kanxa Dahal"
anothername="chai or code";

console.log(myName);
console.log(anothername);

//heap

let obj1 = {
     name: "Ram",
     email:"nishan@gmail.com"
    };
let obj2 = obj1;
obj2.name = "Shyam";
obj2.email="dahal@gmail.com";

console.log(obj1.name);
console.log(obj2.name);
console.log(obj1.email);
console.log(obj2.email);

