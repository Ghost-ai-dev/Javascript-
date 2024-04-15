// Printing dates are bit complex so we use different method to print
let mydate = new Date();
console.log(mydate);// 2024-04-15T15:44:34.971Z

// this date is very hard to read so we use different methods to print the exact date carefully

console.log(mydate.toString()); //Mon Apr 15 2024 21:16:48 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleString());// 15/4/2024, 9:18:18 pm
console.log(typeof mydate);//objects

let date = new Date("01-12-2000");
console.log(date.toString());

let newdate = new Date();
console.log(`Date is ${newdate.getDate()} and the time is ${newdate.getUTCMinutes()}`);
