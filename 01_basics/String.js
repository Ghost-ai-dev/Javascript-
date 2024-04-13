// theree are numerous way of defining string in javascript some of them are ->
let x ="hello"
console.log(x); // hello

const y ="bro"
console.log(x+" "+y);// hello bro

// best way of declaring string ->
console.log(`Printing ${"hello"} and ${"bro"}`);
// this method is called template declaration of string 

// there exist another way we can declare string by using objects
const mygame = new String('Subham');
//console.log(mygame.substring() + ' Das'); 
console.log(mygame.charAt(3)); 
console.log(mygame.indexOf('b')); 

// through this method we can use many built in functions(prototype) like as shows
// for more content visit the console of your browser

// lets try to slice the string  by using substring more efficently
const newstring = mygame.substring(0,3); //it doesnot obey negative value
console.log(newstring);

const anotherstring = mygame.slice(-6,5);// it does
console.log(anotherstring);
  

// sometimes we dont want to have many spaces in the input so we can use trim function to easily remove the spaces 
const name = "    subham      ";
console.log(name);
console.log(name.trim());//subham
// we can use replace to replace a particular element with the desired element we want

const thing = "name of the thing";
console.log(thing.replace('of','with'));
