//singleton 
// Object.create // constructor function 

// object literal

const mySym = Symbol("key1")

const jsUser = {
    name: "Anirudh",
    age: 22,
    [mySym]: "mykey1",
    location: "India",
    email: "anirudh@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(jsUser.name) // Anirudh
// console.log(jsUser["email"])
// console.log(jsUser[mySym]) // mykey1


jsUser.email = "anirudh.new@example.com" // updating the value of email property

// Object.freeze(jsUser) // freezes the object, making it immutable. No new properties can be added, and existing properties cannot be removed or changed.

jsUser.email = "anirudh@xyz.com" // This will not change the email property because the object is frozen

// console.log(jsUser);

jsUser.greeting = function() { 
    console.log("Hello, " + this.name + "!");
}

// console.log(jsUser.greeting); // [Function: greeting]
// console.log(jsUser.greeting()); // Hello, Anirudh!


// const tinderUser = new Object() // creating an object using the Object constructor

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Anirudh"
tinderUser.isLoggedIn = false


// console.log(tinderUser); // { id: '123abc', name: 'Anirudh', isLoggedIn: false }

const regularUser = {
    email: "anirudh@example.com",
    fullname: {
        userFullName: {
            firstName: "Anirudh",
            lastName: "Kumar"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName); // Anirudh 