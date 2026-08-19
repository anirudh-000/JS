var c = 300

if (true) { 
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a) 
// console.log(b)
// console.log(c)


function one() {
    const username = "Anirudh"

    function two() {
        const website = "bits"
        console.log(username) // accessing the variable from the parent function
    }
    // console.log(website) // trying to access the variable from the nested function
    two()
}    

// one()

if (true) {
    const username = "Anirudh"
    if (username === "Anirudh") {
        const website = " bits"
        // console.log(username + website) // accessing the variable from the parent block
    }
    // console.log(website) // trying to access the variable from the nested block
}

// console.log(username) // trying to access the variable from the parent block


// Intresting //

console.log(addOne(5)) // calling the function and passing arguments to it


function addOne(num){    // basic function
    return num + 1
}

// addTwo(5) 

const addTwo = function(num){   // expression/variable function 
    return num + 2
}

