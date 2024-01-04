// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);
// console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
// console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"

const myDate = new Date();
let dd = myDate.getDate();
let mm = myDate.getMonth()+1;
let yy = myDate.getFullYear();
let tt = myDate.toUTCString();
// console.log(dd);
// console.log(mm);
// console.log(yy);

console.log(`Date is ${dd} , month is ${mm} and the year is ${yy} and the time right now is ${tt} `);
