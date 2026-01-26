// Immediately Invoked Function Expression (IIFE)
// immediate execute and to prevent from global scope pollution

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()
(function chai(){
    console.log((`DB CONNECTED`));
    
})();
(function chai(){
    console.log((`DB CONNECTED`));
    
})();


((name) => {
    console.log((`DB CONNECTED ${name}`));
    
})("Amit")