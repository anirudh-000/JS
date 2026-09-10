class User  {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}


class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`Adding course by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "chai@fb.com", "1234")
chai.addCourse()
chai.logMe()


const masalaChai = new User("Masala Chai")

masalaChai.logMe()

console.log(chai instanceof Teacher);