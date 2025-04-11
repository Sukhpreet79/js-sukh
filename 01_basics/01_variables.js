const accountId = 144553
let accountEmail = "sukhpreet1608@gmail.com"
var accountPassword = "12345"
let accountState;
accountCity ="Jamtara"

//acountID = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "2e4929"
accountCity = "chennai"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])