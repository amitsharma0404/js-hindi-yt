// Primitive

// 7 types : String, Number, Boolean, Null, undefined, symbol, Bigint

//const score = 100
//const isLoggedIn = false
//const outTemp = null
//let useremail;

//const id = Symbol('123')
//const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber = 3736886482828n



// Reference (Non Primitive)

// array, objects, functions

//const heros = ["shaktimaan", "naagraj", "aoga"];
//let myObj = {
       // name: "Amit"
        //age : 22,
     //}

//const myFunction = function(){
  //  console.log("Hello World");
    
//}

//console.log(typeof score);
//console.log(typeof outTemp);
//console.log(typeof bigNumber);
//console.log(typeof isLoggedIn);


// ++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)
//Primitive types are stored by value
// original value remain same 
// change are happen in only copied value

let myYoutubename = "Amit Sharma";

let anothername = myYoutubename
anothername = "sarpanch gaming"

console.log(myYoutubename);

console.log(anothername);

//objects are non primitive
//stored in heap

let userOne = {
    email : "user@google.com",
    Upi: "user@ybl"
}
//no new object is created
// only reference is copied

let userTwo = userOne

userTwo.email = "amit@google.com";

console.log(userOne.email);
console.log(userTwo.email);







