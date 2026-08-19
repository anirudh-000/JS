// const user = {
//     username: "Anirudh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to our website.`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) // in node env. this represents an empty object


// const chai = function () {
//     let username = "Anirudh"
//     console.log(this.username)
// }

const chai = () => {
    let username = "Anirudh"
    console.log(this)
}

// chai()

// normal arrow function (explicit)

const addTwo = (num1, num2) => {
    return num1 + num2
}

// implicit return arrow function

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "Anirudh"})


console.log(addTwo(3, 5))


const myArray = [2, 3, 4, 5]

// myArray.forEach(function() {})
// myArray.forEach(() => {})
    
