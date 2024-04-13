/*all primitive datatypes are stored in stacks
all non primitive datatypes are stored in heap*/

// for example ->
let a=23
b=a;
b=34
console.log(b); // 34
console.log(a); // 23

// here we found that changing in the second variable does not change the actual value of it

// lets see what happens when we change in the non primitive data types

let myid ={
    email: "subhamdas@google.com",
    name: "Subham",
    age: 19
}

let anotherId=myid;
anotherId.age = 20;
console.log(myid.age); // age = 20 

// here we found that when we change the age of the id from 19 to 20 
// it changes in the actual value as well 
