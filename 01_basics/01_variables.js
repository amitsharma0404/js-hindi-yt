const accountId = 144553
let accountEmail = "amit@google.com"
var acconutPassword = "12345"
accountcity = "Jaipur"
let accountState
//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
acconutPassword = "21212121"
accountcity = "Bengaluru"

console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, acconutPassword, accountEmail, accountcity, accountState])