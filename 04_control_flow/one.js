//if
// const isUserloggedIn = true
// const temperature = 91

// if(temperature<50){
//     console.log(`${temperature} is less than 50`);
    
// }
// else{
//     console.log("temperature is greater than 50");

// }
// <, >, <=, >=, ==, !=, ===, !==

// const score = 2000

// if(score>100){
//     const power = "fly"
//     console.log(`User power : ${power}`);
    
// }


// const balance = 1000

// if(balance> 500) console.log("test");
 
// if(balance<500){
//     console.log(`${balance} is less than 500`);
    
// }else if(balance>1000){
//     console.log(`${balance} is greater than 1000 `);
    
// }else if (balance<200){
//     console.log(`${balance} is less than 2000`);
    
// }else{
//     console.log(`${balance} is greater than 1000`);
    
// }

const userLoggedIn = true
const debitcard = true
const name = "Amit"
const loggedInFromGoogle = false
const loggedInFromGmail = true

if (userLoggedIn && debitcard || loggedInFromGoogle || loggedInFromGmail ){
    console.log(`${name} you are allowed to buy our course`);
    
}

    

else{
    console.log(`${name} yor are not allowed to buy our cousre`);
    
}