// primitive data types

// 7 types : String, Number, BigInt, Boolean, Null, Undefined, Symbol

const score = 100; // number
const scoreValue = 100.3 // number
const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol('123'); // symbol
const anotherId = Symbol('123'); // symbol

console.log(id === anotherId); // false



// Reference data types (non-primitive data types)

// Array, Object, Function, (Date, RegExp, Error)

const heros = ['shaktiman', 'naagraj', 'doga']; // array
const myObj = {
    name: 'Anirudh',
    age: 21,
}; // object

const myFunction = function() {
    console.log('Hello World');
} // function

console.log(typeof(myObj)); // object

// Memory in JS
// Stack memory and Heap memory
// Stack (Primitives) and Heap (Non-Primitive / Reference types)

// Stack => Gives a copy of the variable and stores it in a new memory location.
// Heap => Gives a reference of the variable and stores it in the same memory location.

// Primitive data types are stored in stack memory. Stack memory is used to store primitive data types and function calls. It is a simple memory allocation method where the memory is allocated in a linear fashion. It is faster than heap memory.

// Reference data types are stored in heap memory. Heap memory is used to store reference data types. It is a complex memory allocation method where the memory is allocated in a non-linear fashion. It is slower than stack memory.   

// ===================================
// EXAMPLES - Stack vs Heap Memory
// ===================================

// PRIMITIVE DATA TYPES (Stack Memory - Copy Behavior)
console.log("--- PRIMITIVES (Stack Memory - Copy) ---");

let a = 10;
let b = a; // b gets a COPY of the value

b = 20; // changing b does NOT affect a
console.log("a:", a); // 10
console.log("b:", b); // 20

// Both a and b have their own copies in stack memory
// Changing one doesn't affect the other

let name1 = "Alice";
let name2 = name1; // name2 gets a COPY of the string

name2 = "Bob"; // changing name2 doesn't affect name1
console.log("name1:", name1); // Alice
console.log("name2:", name2); // Bob


// REFERENCE DATA TYPES (Heap Memory - Reference Behavior)
console.log("\n--- REFERENCES (Heap Memory - Reference) ---");

const person1 = {
    name: "Alice",
    age: 25
};

const person2 = person1; // person2 gets a REFERENCE to the same object in heap

person2.age = 26; // changing person2 DOES affect person1 (same object)
console.log("person1.age:", person1.age); // 26
console.log("person2.age:", person2.age); // 26

// Both person1 and person2 point to the same object in heap memory
// Changing one affects the other


// ARRAYS (Reference Type)
console.log("\n--- ARRAYS (Heap Memory - Reference) ---");

const fruits1 = ["apple", "banana"];
const fruits2 = fruits1; // fruits2 points to the same array

fruits2.push("orange"); // changes affect both
console.log("fruits1:", fruits1); // ["apple", "banana", "orange"]
console.log("fruits2:", fruits2); // ["apple", "banana", "orange"]

// To create an independent copy:
const fruits3 = [...fruits1]; // spread operator creates a shallow copy
fruits3.push("mango"); // this doesn't affect fruits1
console.log("fruits1:", fruits1); // ["apple", "banana", "orange"]
console.log("fruits3:", fruits3); // ["apple", "banana", "orange", "mango"]


// REASSIGNMENT vs MODIFICATION
console.log("\n--- REASSIGNMENT vs MODIFICATION ---");

const obj1 = { value: 100 };
const obj2 = obj1;

obj2.value = 200; // MODIFY the object - both obj1 and obj2 see the change
console.log("obj1.value:", obj1.value); // 200

// obj2 = { value: 300 }; // This would cause an error! Can't reassign const

let obj3 = { value: 100 };
let obj4 = obj3;

obj4.value = 200; // modify
console.log("obj3.value:", obj3.value); // 200

obj4 = { value: 300 }; // reassign to a NEW object (this works with let)
console.log("obj3.value:", obj3.value); // 200 (unchanged, still points to old object)
console.log("obj4.value:", obj4.value); // 300 (now points to new object)

