//const tinderUser = new Object()
const tinderUser = {
    id : "123amit",
    name : "sammy",
    isLoggedIn : false
}

//tinderUser.id = "123amit"
//tinderUser.name = "Sammy"
//tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email : "sammy@gmail.com",
    fullName:{
        userFullname:{
            firstname : "Amit",
            lastname : "Sharma",
        }
    }
}


//console.log(regularUser.fullName.userFullname);

const obj1 = {1: "a", 2: "t"}
const obj2 = {3: "m", 4: "i"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

//const obj3 = {...obj1, ...obj}

//object.assign is used to combine one or more source object to a target object and gives a modified  target object
// {} is target object and obj1 and obj2 are source object
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@google.com"
    },
    {
        id: 1,
        email: "a@google.com"
    },
    {
        id: 1,
        email: "a@google.com"
    },
    {
        id: 1,
        email: "a@google.com"
    },
]
 
users[1].email
//console.log(tinderUser);

//Object.keys arrange the object property in array
//console.log(Object.keys(tinderUser));

//Object.entries arrange every property into a different individual array and all are present in same array
//console.log(Object.entries(tinderUser));


const course =  {
    coursename : " js in hindi ",
    price : "999",
    courseInstructor : "Hitesh"

}

const {courseInstructor} = course

console.log(courseInstructor);


