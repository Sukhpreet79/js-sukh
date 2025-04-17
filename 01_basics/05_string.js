const name = "sukhpreet"
const repoCount = 50

 //console.log(name + repoCount + "value");

 console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String("Subhpreet - subhrajit - sukhpreet")

 console.log(gameName[0]);
 console.log(gameName._proto_);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('t'));

 const newString = gameName.substring(0,4) // no negative value here
 console.log(newString); //subh

 const anotherString = gameName.slice(-8, 4)
 console.log(anotherString)// ubh

 const newString1 = "      sukhpreet    "
 console.log(newString.trim()); // remove the spaces

 const url = "https://ideal-fishstick-jj5rr4vxr5772qpj9.github.dev/"
 console.log(url.replace("5772", '_')) //https://ideal-fishstick-jj5rr4vxr_qpj9.github.dev/

 console.log(url.includes("dev")); //true

 console.log(gameName.split('-')); //[ 'Subhpreet ', ' subhrajit ', ' sukhpreet' ]
