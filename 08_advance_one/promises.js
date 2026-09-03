const promiseOne = new Promise(function (resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
    
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task Two');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async Two resolved');
})



const promiseThree = new Promise(function(resolve, reject){
     setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
     }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Anirudh", password: "123"})
        }else {
            reject('ERROR Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise is either Resolved or Rejected"))



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        }else {
            reject('ERROR JS went wrong')
        }
    }, 1000)
})


async function consumePromiseFive() {
    try {
        const resopnse = await promiseFive
        console.log(resopnse);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()


// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//         console.log("E: ", error);
//    }
// }

// getAllUsers()



fetch('https://api.github.com/users/anirudh-000')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))

