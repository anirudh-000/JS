console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// strict comparison operator
console.log(2 === 1); // false
console.log(2 !== 1); // true

// loose comparison operator
console.log(2 == "2"); // true
console.log(2 != "2"); // false

// strict comparison operator
console.log(2 === "2"); // false
console.log(2 !== "2"); // true

// comparison operator and equality operator work differently. Comparison operator compares the values and equality operator compares the values and data types as well.

// triple equal operator (===) is used to compare both value and data type. It returns true if both are same, else it returns false.

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

