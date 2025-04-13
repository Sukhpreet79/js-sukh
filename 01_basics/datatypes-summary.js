//1. Primitive data type -> call by value, dont give the original value
//  it gives the copy value 
// and whahatever changes happen it happens in cvopied values.
//7 types : string, Number, boolean, null, undefined, Symbol, BigInt(big values)

const score = 100;
const scoreValue = 100.3;
const inLoggedIn = false;
const outSideTemp = null;
let userEmail; //undefined

const id = Symbol("123");
const anotherid = Symbol("123");

console.log(id == anotherid);
//output false because symbol always gives unique value

const bigNumber = 485584554654654654n //in last add n




//in js we don't defined any language(dynamic)
/*let value = 42; // Initially a number
value = "Hello";*/ // Reassigned to a string


//2.reference type(non primitive)In memory the refernce value is directly allocated
// array, objects, Functions


const heros = ["subhrajit","pradeep","kuldeep"]
let myObj ={
    name:"khushi",
     age: 21,
}

const myFucntion =function(){
    console.log("hello world");
}

