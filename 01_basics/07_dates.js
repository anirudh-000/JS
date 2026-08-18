let myDate = new Date();
// console.log(myDate.toString()); // Outputs the current date and time
// console.log(myDate.toDateString()); // Outputs the current date in a readable format
// console.log(myDate.toTimeString()); // Outputs the current time in a readable format
// console.log(myDate.toISOString()); // Outputs the current date and time in ISO format
// console.log(myDate.toUTCString()); // Outputs the current date and time in UTC format
// console.log(myDate.toLocaleString()); // Outputs the current date and time in the local format

// console.log(typeof myDate); // Outputs 'object'

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 30, 0); // Year, Month (0-indexed), Day, Hour, Minute, Second
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");


// console.log(myCreatedDate.toLocaleString()); // Outputs the created date and time

let myTimeStamp = Date.now(); // Gets the current timestamp in milliseconds
// console.log(myTimeStamp); // Outputs the current timestamp
// console.log(myCreatedDate.getTime()); // Outputs the timestamp of the created date in milliseconds

console.log(Date.now()); // Outputs the current timestamp in milliseconds

console.log(Date.now()/1000); // Outputs the current timestamp in seconds
console.log(Math.floor(Date.now()/1000)); // Outputs the current timestamp in seconds (rounded down)

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); // Outputs the current month (0-indexed)
console.log(newDate.getMonth() + 1); // Outputs the current month (1-indexed)
console.log(newDate.getDay()); // Outputs the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

newDate.toLocaleString('default', {
    weekday: 'long',
})




