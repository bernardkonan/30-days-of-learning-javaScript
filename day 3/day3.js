// /* 
//     BOOLEAN
// */

// let isLightOn = true;
// let isMarried = false;

// let trueValue = 4 > 3; // true
// let falseValue = 4 < 2; // false

// console.log(trueValue, falseValue);

// // truthy values

// /*
//     All numbers(negative and positive) are truthy except zero
// */

// if (-3) console.log('true'); // true
// if (!0) console.log('false'); // false
// if (2) console.log('true');

// // all strings are truthy 

// if ('me') console.log("true"); // true
// if ("ok") console.log("true"); // true
// if ('') console.log('true');

// // the boolean true is truthy
// if (true) console.log("true"); // true

// /* 
// Falsy values : 0, undefined, null, NaN, false, '',"", ``
// */

// if (0) console.log("false");
// else if (undefined) console.log("false");
// else if (null) console.log("false");
// else if (NaN) console.log("false");
// else if (false) console.log("false");
// else if ('') console.log("false");
// else if ("") console.log("false");
// else if (``) console.log("false");
// else {
//     console.log("All are falsy values");
// }

// // undefined value

// let firstname;
// console.log(firstname); // undefined : it is not assigned to a value yet.

// const hello = str => {
//     if (str) {
//         return str;
//     }
//     return;
// }
// console.log(hello('')); // undefined : '' is falsy value

// // null value

// let empty = null;
// console.log(empty); // null -> means no value

// // Ternary operators
// let isRaining = true;

// isRaining ? console.log("You need a rain coat") : console.log('No need for a rain coat'); // You need a rain coat

// !isRaining ? console.log("You need a rain coat") : console.log('No need for a rain coat') // No need for a rain coat

// let number = 10;
// number > 0 ? console.log(`${number} is a positive number.`) : console.log(`${number} is a negative number`);

// number = -5;
// number > 0 ? console.log(`${number} is a positive number.`) : console.log(`${number} is a negative number`);

// Windows methods

let message = "Welcome to 30DaysOfJavaScript";

// alert ()
//alert(message); // display the message in window with a ok button

// // prompt()
// const isEven = number => {
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// };

// let number = prompt("Enter a number : ");

// if (!isNaN(+number)) {
//     isEven(+number) ? alert(`${number} is even.`) : alert(`${number} is odd.`);
// } else {
//     alert("Is not your entry");
// }

// let age = prompt(" your age : ");
// let confirmAge = confirm(`${age} is your age ?`);

// if (confirmAge) alert(`You're ${age}.`);
// else alert("Is not your old.");


/* Date object */

const now = new Date();
console.log(now);

// Getting full year

console.log(now.getFullYear()); // 2021

// Getting month year
console.log(now.getMonth()); // 10 month(0 - 11)

// Getting date
console.log(now.getDate()); // 12 because the day of the month is 12

// Getting day
console.log(now.getDay()); // 5 [days of the week [1-7]]

// Getting minutes
console.log(now.getMinutes()); // 16

// Getting seconds
console.log(now.getSeconds()); // 18

// Getting time
console.log(now.getTime());

