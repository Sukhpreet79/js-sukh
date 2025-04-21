// singleton things which are made from objects
// Object.create (constructor method)

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //to use symbol used squaqre bracket otherwise it will give you a string value
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //best for object
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com" //to cahnge the valyue
// Object.freeze(JsUser) // to lock the value
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){ // same treat it as variable
    console.log("Hello JS user"); 
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this is used to use object refernce of the same object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); // hello jsuser hitesh is the output