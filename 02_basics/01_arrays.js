// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //add
// myArr.push(7)
// myArr.pop() // remove last value

// myArr.unshift(9) //shift all the values (add in first)
// myArr.shift()//remove the 9

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(3)); //3

// const newArr = myArr.join() //adds all elemnts into a string cahnge by type

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // return a section af an array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //splice change the original array it includes the last range value too
console.log("C ", myArr);
console.log(myn2);