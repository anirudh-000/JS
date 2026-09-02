// if

// if (condition){
//   // if condition is true then this scope will execute otherwise not.  
// }

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 41){
//     console.log('Less that 50');
// } else {
//     console.log("tempreature is higher than 50");
// }


/*

<
>
<=
>= 
==     equality check
!=     not equal check
===    equal with type also
!==

*/


// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }


const balance = 1000

// if (balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 850){
//     console.log("less than 850");
// }else {
//     console.log("Less then 1200"); 
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allowed to buy");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");
}

