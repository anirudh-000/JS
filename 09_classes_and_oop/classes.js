// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        console.log(`Encrypting password for ${this.username}abc`);
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const chai = new User("Chai", "chai@fb.com", "1234")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scenes

// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password

//     return this
// }

// User.prototype.encryptPassword = function(){
//     console.log(`Encrypting password for ${this.username}abc`);
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const tea = new User("tea", "tea@fb.com", "1234")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());
