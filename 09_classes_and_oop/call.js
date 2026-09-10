function SetUsername(username){
    this.username = username
    console.log("Called");
    
    return this
}

function CreateUser(username, email, password){
    SetUsername.call(this, username)
    
    this.email = email
    this.password = password
}

const chai = new CreateUser("Chai", "chai@fb.com", "1234")
console.log(chai);


