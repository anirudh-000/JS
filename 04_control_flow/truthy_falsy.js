const userEmail = "anirudhxyz.com"

if (userEmail){
    // console.log("Yes Right");
} else{
    console.log("No Not good.");
    
}

// falsy values

/*

false
0
-0
BigInt 0n
""
null
undefined
NaN

*/

// truthy values

/*

"0"
'false'
""
[]
{}
function(){}

*/


// const myEmail = []

// if (myEmail.length === 0) {
//     console.log("Array is Empty");
// }

const myObj = {}

if (Object.keys(myObj).length === 0){
    // console.log("Object is empty");
}

/*

false == 0
true

false == ""
true

0 == ""
true 

*/


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1);


// Ternery Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


