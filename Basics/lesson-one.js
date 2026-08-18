const accountId = 144553
let accountEmail = "anirudh@example.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

//accountId = 12  // not allowed because accountId is a constant

//console.log(accountId);

console.table({accountId, accountEmail, accountPassword, accountCity, accountState});


/*
prefer not to use var because it is function scoped and can lead to unexpected behavior. Use let and const instead for block scoping. 
*/

