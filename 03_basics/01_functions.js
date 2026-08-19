function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("R");
    console.log("U");
    console.log("D");
    console.log("H");
}

// sayMyName() // calling the function to execute the code inside it

function addTwoNumbers(num1, num2) {
    let result = num1 + num2
    console.log("The result is: ", result) // logging the result of the addition
    return result // after returning the value, the function will stop executing.
}

function addTwoNumbers(num1, num2) {
    return num1 + num2 // after returning the value, the function will stop executing.
}


const result = addTwoNumbers(3, 5) // calling the function and passing arguments to it
// console.log(result) // logging the return value of the function

// console.log(addTwoNumbers()) // calling the function and passing arguments to it and logging the return value


// function loginUserMsg (username) {
//     if(username === undefined){
//         console.log("Please provide a username")
//         return
//     }
//     return `${username} has logged in.`
// }

// function loginUserMsg (username) {
//     if(!username){
//         console.log("Please provide a username")
//         return
//     }
//     return `${username} has logged in.`
// }

function loginUserMsg (username = "Anirudh") { // setting a default value for the parameter
    if(!username){
        console.log("Please provide a username")
        return
    }
    return `${username} has logged in.`
}

// console.log(loginUserMsg("Bits")) // calling the function and passing arguments to it


function calculateCartPrice (val1, val2, ...num1) {  // rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Anirudh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 900
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500]))
