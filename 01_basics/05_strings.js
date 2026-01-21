const name = 'Amit'
const repCount = 1

// console.log(name + repCount);

//console.log(`hello my name is ${name} and my repo count is ${repCount}`);

const gameName = new String('amit-sharma')


//console.log(gameName);
//console.log(gameName[5]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(4));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Amit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://amit.com/amit%20sharma"

console.log(url.replace('%20', '-'));

console.log(url.includes('amit'));

console.log(gameName.split('-'));

