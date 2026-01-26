const user = {
    username : "Amit",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }
   

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "Amit"
//     console.log(this.username);
    

// }
// chai()

// const chai = function chai(){
//     let username = "Amit"
//     console.log(this.username);
    

// }
// chai()


// arrow function is shorter way to write a function

// const chai = () => {
//     let username = "Amit"
//     console.log(this.username);
    

// }
// chai()

//{} return required 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,6));

//implisit return
//() return not required
const addTwo = (num1, num2) =>  num1 + num2

console.log(addTwo(4, 2));


