// Map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)


// Chaining

const newNums = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => {return num >= 40})

// console.log(newNums);

// Reduce 

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and Current Value: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'JS course',
        price: 2999
    },
    {
        itemName: 'PY course',
        price: 999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
