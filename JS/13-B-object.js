//const tinderUser=new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false


// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"nishan",
            lastname:"dahal"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// const obj4=Object.assign({},obj1,obj2)
const obj4={...obj1, ...obj2}//another way 
// console.log(obj4);

// console.log(Object.keys(tinderUser));// 
// console.log(Object.values(tinderUser));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

console.log(course.courseInstructor);// long format to print
const {courseInstructor}=course
console.log(courseInstructor);// doing destructure, short formate to print