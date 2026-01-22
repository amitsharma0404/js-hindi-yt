// Objects are used to store data in key value pairs
// There are two ways to declare objects
// 1. Literal
// 2. Constructor - give singleton object

// Important : In arrays we only define values but in objects we define both keys and values

// object literals

const mySym = Symbol("key1")
// symbol always come in [] otherwise it is considered as a string
// in terminal js stores the actual symbol value not a variable value

const JsUser = {
    name : "Amit",
    "Full Name" : "Amit Sharma",
    age : 21,
    [mySym] : "mykey1",
    location : "Bhiwani",
    email : "amit@google.com",
    isLoggedIn : false,
    lastLoggindays : ["Monday", "Saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["Full Name"]);
//console.log(JsUser[mySym]);
//console.log(typeof mySym);


// freeze means we can't add, delete, and modify new property


JsUser.email = "amit@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "amit@ms.com"
//console.log(JsUser);
//console.log(Object.keys(JsUser));

JsUser.greeting = function(){
    console.log("Hello Js Users");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js Users, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





