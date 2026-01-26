


function sayMyname(){
  console.log("A");
  console.log("M");
  console.log("I");
  console.log("T");
}

//sayMyname()

// when we make definition of fuction (this is parameter)

//function addTwoNumbers(number1, number2){
    //console.log(number1 + number2);
    
//}

//addTwoNumbers(98, 32)
// when we call function (this is arguement)

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}
const result =  addTwoNumbers(5, 9)

//console.log("Result: ", result);
//console.log(result);

//function loginUserMessage(username){
    //return `${username} just logged in`
//}
//console.log(loginUserMessage("Amit"));

//function loginUserMessage(username){
  //  if(!username) {
    //    console.log("Please Enter a username");
      //  return

    //}
    //return `${username} just logged in`
//}
//console.log(loginUserMessage());



//function loginUserMessage(username = "tanisha"){
  //  if(!username) {
    //    console.log("Please Enter a username");
      //  return

//    }
  //  return `${username} just logged in`
//}
//console.log(loginUserMessage("Amit"));

function calculateCartPrice1(num1){
    return num1
}
//console.log(calculateCartPrice1(2));

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200, 300, 400, 500, 1000));

const user = {
    username : "Amit",
    price : 1999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is${anyObject.price}`);

    
}
//handleObject(user)
 
const myNewArray = [200, 300, 400, 500]
 
function returnsecondValue(getArray){
    return getArray[1]
}
 
//console.log(returnsecondValue(myNewArray));

