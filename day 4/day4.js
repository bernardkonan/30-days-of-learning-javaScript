/*
    CONDITIONAL STATEMENTS
*/

// if statement

let number = 5;

if (number > 0) console.log(`${number} is positive`);
else console.log(`${number} is negative`);


let isRaining = true;

if (isRaining) console.log("Remember to take your rain coat.");


// if else statement

let myOld = 10;

if (!(myOld < 18)) {
    console.log("You are the adult");
} else {
    console.log("You are the tenager");
}


if (isRaining) console.log("Remember to take your rain coat.");
else console.log("No need for rain coat");


let number2 = 21;

const isEven = number => {
    if (number % 2 === 0) return true;
    return false;
}

if (isEven(number2)) {
    console.log(`${number2} is even`);
} else {
    console.log(`${number2} is odd`);
}


// else if else if statement

let old = 26;

if (old <= 0) {
    console.log("You are not still born.");
} else if (old > 0 && old <= 12) {
    console.log("You are the small boy.");
} else if (old > 12 && old < 18) {
    console.log("You are the tenager.");
} else {
    console.log("You are the adult.");
}


let weather = 'cloudy';

if (weather === 'rainy') {
    console.log("You need a rain coat.");
} else if (weather === 'cloudy') {
    console.log("It might be cold. You need a jacket.");
} else if (weather === 'sunny') {
    console.log("Go out freely.");
} else {
    console.log("No need for rain coat.");
}


// switch statement

let todayDate = "wednesday";

switch (todayDate) {
    case 'monday':
        console.log('Today is monday');
        break;
    case 'tuesday':
        console.log("Today is tuesday");
        break;
    case 'wednesday':
        console.log("Today is wednesday");
        break;
    case 'thirsday':
        console.log("Today is thirsday");
        break;
    case 'friday':
        console.log("Today is friday");
        break;
    case 'saturday':
        console.log("Today is saturday");
        break;
    case 'sunday':
        console.log("Today is sunday");
        break;
    default:
        console.log("It is not a week day");
}

let weather2 = "sunny";

switch (weather2) {
    case 'cloudy':
        console.log("It might be cold. You need a jacket.");
        break;
    case 'rainy':
        console.log("You need a rain coat.");
        break;
    case 'sunny':
        console.log("Go ou freely");
        break;
    default:
        console.log("No need for rain coat");
}

// ternary statement

let num = 19;

let isOdd = num % 2 === 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);


