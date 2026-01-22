// arrays 
// it is defined as multiple item can store in one variable
// zero indexed
// shallow copies

const myArr = [0, 1, 2, 3, 4, 5]
const myheros = ["shaktimaan", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);
//console.log(myheros);
//console.log(myArr2);


// Array methods
//myArr.pop()
// pop removes last value of the array

//myArr.push(7, 9)
// push add the value in the array

//myArr.pop()

//myArr.unshift(8)
// unshift add the value in the starting of the array

//myArr.shift()
// shift removes the first value in the array


//console.log(myArr.includes(9));
//includes check the given value is present in the array

//console.log(myArr.indexOf(2));
// indexof check the value position

const newArr = myArr.join()
// join changes the type of the array into string 


//console.log(myArr);
//console.log(newArr);

// slice, splice


// slice does not include range and does not change the array

// splice include range and remove those value from the array which is mentioned in range 
console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);

console.log(myn2);

