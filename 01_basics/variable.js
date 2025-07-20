const account_Id = 12345 
let accountEmail = "janvi@gmail.com"
var accountPassword ="913702"
accountCity = "jaipur"

//  account_Id = 2   :not allowed
// let accountEmail = "bindu@gmail.com"
var accountPassword ="2856"
accountCity = "beggaluru"
let accountState;

console.log(account_Id);

console.table([accountEmail, accountPassword, accountCity ,account_Id, accountState]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/