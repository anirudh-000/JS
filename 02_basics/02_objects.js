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

// console.log(regularUser.fullname.userFullName.firstName); // Anirudh 


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // merging obj1 and obj2 into a new object

const obj3 = {...obj1, ...obj2} // merging obj1 and obj2 into a new object using spread operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "anirudh@example.com"
    },
    {
        id: 2,
        email: "anirudh2@example.com"
    },
    {
        id: 3,
        email: "anirudh3@example.com"
    },
    {
        id: 4,
        email: "anirudh4@example.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // returns an array of keys of the object

// console.log(Object.values(tinderUser)); // returns an array of values of the object

// console.log(Object.entries(tinderUser)); // returns an array of key-value pairs of the object

// console.log(tinderUser.hasOwnProperty("name")); // returns true if the object has the specified property, false otherwise

const course ={
    name: "JavaScript",
    price: 999,
    courseInstructor: "Anirudh",
    courseContent: ["JavaScript Basics", "JavaScript Advanced", "JavaScript Frameworks"]
}
// course.courseInstructor // to access the value of courseInstructor property

const {courseInstructor} = course // destructuring the course object to get the value of courseInstructor property

const {courseInstructor: instructor} = course // renaming the variable while destructuring 


console.log(courseInstructor); // Anirudh
console.log(instructor); // Anirudh

//json

// {
//     "name": "ANirudh",
//     "price": "free",
//     "courseInstructor": "Anirudh",
// }