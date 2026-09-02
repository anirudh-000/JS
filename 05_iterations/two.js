// while loop

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is: ${index}`);
//     index = index + 2
// }

let myArray = ['flash', 'batman', 'superman']

// let arr = 0

// while (arr < myArray.length) {
//     console.log(`Value is : ${myArray[arr]}`);
//     arr = arr + 1
// }

// do while 

let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);


// for of loop

// const arr = [1, 2, 3, 4, 5]

// for (const element of arr) {
//     console.log(element);
    
// }

// const greetings = "Hello world!"

// for (const greet of greetings) {
//     console.log(`Each char. is ${greet}`);
// }


// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")


// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

const myObj = {
    'game1': 'NFS',
    'game2': 'MW'
}

// object do not iterate.

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
    
// }

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by app'
}

// for (const key in myObject) {
//    console.log(`${key} for shortcut is ${myObject[key]}`);
   
// }


const programming = ['js', 'rb', 'py', 'java', 'cpp']

// for (const key in programming) {
//   console.log(programming[key]);
// }


// for each 

const coding = ['js', 'rb', 'py', 'java', 'cpp']

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function pritMe(item){
//     console.log(item);
// }

// coding.forEach(pritMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        langName: 'javaScript',
        langFile: 'js'
    },
    {
        langName: 'java',
        langFile: 'java'
    },
    {
        langName: 'ruby',
        langFile: 'rb'
    }
]

// myCoding.forEach( (item) => {
//     console.log(item.langName);
// })

// Filter Map Reduce

const codes = ['js', 'rb', 'py', 'java', 'cpp']

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item    
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)  // if open scope then use return otherwise not
// console.log(newNums);


// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// });

// console.log(newNums);


