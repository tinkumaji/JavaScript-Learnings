const accountId = 1212
let accountEmail = "tinkumaji02@google.com"
var accountPassword = "123098"
accountCity = "Kolkata"
let accountState;

// accountId = 1231 // not allowed

accountEmail = "tm.03@tinku.com"
accountPassword = "09876"
accountCity = "Bengaluru"

/*
Don't use var
Because issuse in block scope and function scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);