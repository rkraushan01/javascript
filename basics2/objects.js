//object literals
const mySymbol = Symbol("Key1")

const myObj = {
    name:"Rkkkkkk",
    age:18,
    [mySymbol] : "key1",
    email:"rkkkkk@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday", "Saterday"]
}
// console.log(myObj.email)
// console.log(myObj["age"])
// console.log(myObj.isLoggedIn)
// console.log(myObj[mySymbol])
// console.log(typeof  myObj[mySymbol])
// Object.freeze(myObj)
// myObj.email = "raushan@microsoft.com"
// console.log(myObj)
myObj.greeting = function()
{
    console.log("Hello Mr. MERN Developer");
}
myObj.greeting2 = function()
{
    console.log(`Hello Mr. MERN Developer ${this.name} your emailId is ${this.email} and you are current age is ${this.age}`);
}
// console.log(myObj.greeting())
console.log(myObj.greeting2())


