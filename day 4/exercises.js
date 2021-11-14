/* 
    Conditional statements exercises section
*/

// // Exercise 1

// // 1 -
// let myAge = +prompt("Enter my age: ");

// if (myAge >= 18) {
//     console.log("You are old enough to drive.");
// } else {
//     console.log(`your are left with ${18 - myAge} years to drive.`);
// }

// // 2 - 

// let yourAge = +prompt("Enter your age: ");

// if (yourAge > myAge) {
//     console.log(`You are ${yourAge - myAge} years older than me.`);
// } else {
//     console.log(`I'm ${myAge - yourAge} years older than you.`);
// }

// 3 - 

let a = 4;
let b = 3;
// using if else
if (a > b) {
    console.log(`${a} is greater than ${b}.`);
} else {
    console.log(`${a} is less than ${b}`);
}

// using ternary operator
a > b ? console.log(`${a} is greater than ${b}.`) : console.log(`${a} is less than ${b}.`);

// 4 - 

let n1 = 54;

n1 % 2 === 0 ? console.log(`${n1} is even`) : console.log(`${n1} is odd`);


// Exercise 2

// 1- 
let scores = 79;

if (scores >= 0 && scores <= 49) {
    console.log(`Grade : F`);
} else if (scores >= 50 && scores <= 59) {
    console.log(`Grade : D`);
} else if (scores >= 60 && scores <= 69) {
    console.log(`Grade : C`);
} else if (scores >= 70 && scores <= 89) {
    console.log(`Grade : B`);
} else if (scores >= 80 && scores <= 100) {
    console.log(`Grade : A`);
} else {
    console.log("You have not a grade");
}

// 2 -

let month = "January";


if ("September" || "October" || "November") {
    console.log("The season is Autumn");
} else if ("December" || "January" || "february") {
    console.log("The season is Winter");
} else if ("March" || "April" || "May") {
    console.log("The season is Spring");
} else if ("June" || "July" || "August") {
    console.log("The season is Summer");
} else {
    console.log("The season corresponds to nothing");
}

// 3 - 
// function to capitalize a string
const toCapitalize = string => {
    if (string.length > 0) {
        let firstCharacter = string[0].toUpperCase();
        let otherCharacters = '';
        for (let i = 1; i < string.length; i++) {
            otherCharacters += string[i].toLowerCase();
        }
        return firstCharacter + otherCharacters;
    }
    return;
};

let day = "SATURDAY";

switch (day.toLowerCase()) {
    case 'monday':
        console.log(`${toCapitalize(day)} is a working day`);
        break;
    case 'tuesday':
        console.log(`${toCapitalize(day)} is a working day`);
        break;
    case 'wednesday':
        console.log(`${toCapitalize(day)} is a working day`);
        break;
    case 'thirsday':
        console.log(`${toCapitalize(day)} is a working day`);
        break;
    case 'friday':
        console.log(`${toCapitalize(day)} is a working day`);
        break;
    case 'saturday':
        console.log(`${toCapitalize(day)} is a weekend`);
        break;
    case 'sunday':
        console.log(`${toCapitalize(day)} is a weekend`);
        break;
    default:
        console.log("It is not a week day");
}