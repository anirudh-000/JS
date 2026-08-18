const name = 'Anirudh'
const repoCount = 50

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('Anirudh-webdev')

// console.log(gameName[0]);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('R'));


const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherSring = gameName.slice(-4, 4)
// console.log(anotherSring);

const newStringOne = '   Anirudh  '
console.log(newStringOne);
console.log(newStringOne.trim());

const url ='https://anirudh.com/anirudh%20raghuvanshi'

console.log(url.replace('%20', '-'))

console.log(url.includes('anything'))


console.log(gameName.split('-'))
