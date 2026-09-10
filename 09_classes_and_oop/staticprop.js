class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const chai = new User("Chai")
// console.log(chai.createId());

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
}

const iPhone = new Teacher("iPhone", "iphone@fb.com", "5678")
console.log(iPhone.logMe())

