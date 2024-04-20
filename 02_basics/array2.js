// some other operations are still left to learn
const array1 =[1,2,3,4]
const array2 =[9,8,7,6]
console.log([...array1,...array2]); // it will merge two arrays

//    or
 

const new_array = array1.concat(array2);
console.log(new_array);// it also do the same as above

// You can convert the input data into arrays
let a = 3;
let c = 4;
let b = 1;
console.log(Array.of(a,b,c)); // it converts the inputs into array
// like that there exist many possible usecases of array
