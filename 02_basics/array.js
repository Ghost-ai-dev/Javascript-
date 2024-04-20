const myarr = [4,3,1,5,6]
console.log(myarr[3]);// 5
// another way of declaring array ->
const myarr2 = new Array(4,3,1,5,6)
console.log(myarr2[3]);// 5

// some methods of using arrays ->
myarr.push(5) // it will insert an element at the last 
myarr.pop() // it will delete the last element from the array
myarr.sort() // by using sort 
console.log(myarr); // array will sort

myarr.unshift(9) //it will insert the given element at the first by shifting the array
myarr.shift()//it wil delete the first element of the array


const newarr = myarr.slice(1,4)
console.log(newarr); // slice operation deletes the elements within its val like deleting 2,3,4,5 if it slice(1,6) 
// Moreover it deletes the copy version of the array not the actual array


const newarr2 = myarr.splice(1,3)
console.log(newarr2); // splice operation deletes the elements within its val and range is also included like if we have to splice(0,3) then it delete 1,2,3
//Moreover unlike slice it does not delete the copy version of the array rather make changes in the actual array
console.log(myarr);
