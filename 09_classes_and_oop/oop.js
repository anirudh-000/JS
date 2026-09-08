const user = {
    username: 'Anirudh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got details from DB");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


// Constructors


// const promiseOne = new promise()
// const date = new Date()

function User(username, loginCount, IsLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.IsLoggedIn = IsLoggedIn
    this.greetings = function(){
        console.log(`Haapy Day ${this.username}`)
    }

    return this
}

const userOne = new User("Anirudh", 7, true)
const userTwo = new User("Chai", 9, false)
console.log(userOne.constructor);
console.log(userTwo);

