let a = 800
//var c = 400

if(true){
    let a = 10 
    const b = 20
    //console.log("INNER : ", a);
    

}

//console.log(a);
//console.log(b);
//console.log(c);


function one (){
    const username = "Amit"

    function two(){
        const website = "youtube"
        console.log(username);
        
        
    }
    //console.log(website);

    two()

}

//one()  
if(true){
    const username = "Amit"
    if(username === "Amit"){
        const website = " youtube"
        //console.log(username + website);
    
    }


}

//  +++++++++++++++ interesting +++++++++++++++++

// we can call function before declaration this is called hoisting
console.log(addone(5))
function  addone (num){
    return num + 1
}


// if we declare function with in the variable then hoisting is not possible

const addtwo = function(num){
    return num + 2
}
console.log(addtwo(9));
console.log(typeof(addtwo))
