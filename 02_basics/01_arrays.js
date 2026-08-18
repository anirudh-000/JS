const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktimaan", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

// Array Methods

// myArr.push(6) 
// myArr.push(7) // Adds an element to the end of the array
// myArr.pop() // Removes the last element of the array

// myArr.unshift(9) // Adds an element to the beginning of the array
// myArr.shift() // Removes the first element of the array

// console.log(myArr.includes(3)) // Checks if the array includes a certain element
// console.log(myArr.indexOf(3)) // Returns the index of a certain element

const newArr = myArr.join()
// console.log(newArr) // Joins all elements of the array into a string
// console.log(myArr); 

// slice and splice 

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

// console.log(myn1); // [1, 2]
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// console.log(myn2); // [1, 2, 3]
// console.log("C ", myArr);



const marvelHeroes = ["Iron Man", "Captain America", "Thor"]
const dcHeroes = ["Batman", "Superman", "Wonder Woman"]

// marvelHeroes.push(dcHeroes) // Adds the dcHeroes array as a single element to the end of the marvelHeroes array

// console.log(marvelHeroes); // ["Iron Man", "Captain America", "Thor", ["Batman", "Superman", "Wonder Woman"]]

// const allHeroes = marvelHeroes.concat(dcHeroes) // Merges the dcHeroes array into the marvelHeroes array and returns a new array


// console.log(allHeroes); // ["Iron Man", "Captain America", "Thor", "Batman", "Superman", "Wonder Woman"]


const allNewHeroes = [...marvelHeroes, ...dcHeroes] // Merges the dcHeroes array into the marvelHeroes array using the spread operator and returns a new array


// console.log(allNewHeroes); // ["Iron Man", "Captain America", "Thor", "Batman", "Superman", "Wonder Woman"]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]]

const flatArray = anotherArray.flat(Infinity) // Flattens the array by one level. The Infinity argument flattens the array to any depth. 

// console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log(Array.isArray("Anirudh")) // false
console.log(Array.from("Anirudh")) // ["A", "n", "i", "r", "u", "d", "h"]

console.log(Array.from({name: "Anirudh"})) // [undefined] - Array.from() creates a new array instance from an array-like or iterable object. In this case, the object {name: "Anirudh"} is not iterable, so it returns an array with a single undefined element.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300] - Array.of() creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.


