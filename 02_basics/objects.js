// objects are also one of the important data types in javascript
// there are two ways of declaring objects 
// i)  through literals
// ii) through strings
// let's see using literals


const mysym = Symbol("key")
const mydetails = {
    name: "Benjamin",
    age: 19,
    [mysym] : "mykey",
    email: "das@gmail.com"
}
console.log(mydetails[mysym]);

// this is the way of defining objects in literals
console.log(mydetails.email);

mydetails.greetings= function() {
    console.log(`hello ${this.name}, buddy`);// please note when you want to use the same objects as a reference then we have to use "this"
    console.log(`Your age is ${this.age}`);
    console.log(`Your email is ${this.email}`);
}
console.log(mydetails.greetings());
// We can freeze the user from making any changes
Object.freeze(mydetails);
//then changing any thing related to the object "mydetails" will not occur as we have freeze the Object
mydetails["email"]  = "hello@gmail.com";
console.log(mydetails.email);
// By printing you will see that nothing has been changed in the object