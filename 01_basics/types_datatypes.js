// data types are of two types 
// primitive and non primitive

// primitive -> string,number,bigint,boolean,symbol,null,undefined

const id = Symbol('1,2,3')
const anotherId = Symbol('1,2,3')
console.log(id === anotherId); // returns false which means its completely different from each other


//Non primitive -> Arrays,Objects,function

const arr = [2,3,4,5];
console.log(typeof arr);// returns objects;

let myobj = {
    name : "Subham",
    age : 22,
}
console.log(typeof myobj); // it returns object
console.log(typeof myobj.name); // returns string 

const myfunc = function () {
    console.log("Hello world");
}
console.log(myfunc ());
console.log(typeof myfunc); // it returns function or functional object


