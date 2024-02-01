const accountId = 13452;
let accountEmail = "shiavm7@gmail.com";
var accountPassword = "98765";
accountCity = "Mumbai";
let accountState;

// accountId = 2 // not allowed

accountEmail = "amit@gmail.com";
accountPassword = "54321";
accountCity = "Delhi";

console.log(accountId);

/*
    Prefer not to use var
    because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
