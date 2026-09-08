let myName = "Anirudh   "

// console.log(myName.trim().length);

// console.log(myName.truelength);

// myName.prototype.truelength = function(){

// }


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey Power is ${this.spiderman}`);
    }
}

Object.prototype.Anirudh = function(){
    console.log('Anirudh is Everywhere');
}


Array.prototype.heyAnirudh = function(){
    console.log(`Hey Anirudh`);
}

// heroPower.Anirudh()
myHeroes.Anirudh()
myHeroes.heyAnirudh()
// heroPower.heyAnirudh()



// Inheritance 

const user = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVider: true
}


const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAsignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user 



// Modern Syntaxt 

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsename = "ChaiaurCode    "

String.prototype.trueLength = function(){
    // console.log(`${this.name}`);
    console.log(`${this}`) 
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsename.trueLength()
"Anirudh".trueLength()
"IceTea".trueLength()