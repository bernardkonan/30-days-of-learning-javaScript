/* 
    LEARN ABOUT LOOP -> use to make something repetitively
*/

// for Loop

// ascendant print
for (let i = 0; i <= 5; i++) {
    console.log(i);
} // ouput : 0 1 2 3 4 5 

console.log("----------------------------------------------------------");

// descendant print
for (let i = 5; i >= 0; i--) {
    console.log(i);
} // ouput : 5 4 3 2 1 0

console.log("----------------------------------------------------------");

// square of number
for (let i = 1; i < 6; i++) {
    console.log(`${i} x ${i} = ${i*i}`);
}

console.log("----------------------------------------------------------");

// countries to uppercase
const countries = ['finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

const newCountries = [];

for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    newCountries.push(country.toUpperCase());
}

console.log(newCountries);

console.log("----------------------------------------------------------");

// adding all elements in the array
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`sum of numbers = ${sum} .`);

console.log("----------------------------------------------------------");

// creating  array based on existing array

let squares = [];
for (let i = 0; i < numbers.length; i++) {
    squares.push(i ** 2);
}
console.log(squares);

console.log("----------------------------------------------------------");

// while Loop -> it's executed while a condition is true
let i = 0;
let cube = [];
while (i < numbers.length) {
    cube.push(Math.pow(numbers[i], 3));
    i++;
}
console.log(cube);

console.log("----------------------------------------------------------");

// do while Loop -> it is executed at least once
let j = 0;
do {
    console.log(`${j+1}- Hello world`);
    j++;
} while (j < 5);

console.log("----------------------------------------------------------");

// for of Loop 
/*
it uses on an array if we are not interested in the index of each element of the array
*/

let nums = [0, 3, 5, 7, 11, 13, 17, 23, 29, 31];

let sumNums = 0;
for (let num of nums) {
    sumNums += num;
}
console.log(sumNums);

console.log("----------------------------------------------------------");



for (let tech of webTechs) {
    console.log(tech.toUpperCase());
}

console.log("----------------------------------------------------------");

// break -> it is used to interrupt a loop

let k = 1;
while (k < 100) {
    console.log(`${k}- ${k}`);
    if (k % 3 === 0 && k % 5 === 0) {
        break; // interrupt the loop
    }
    k++;
}

console.log("----------------------------------------------------------");

// continue -> it is used to skip a certain interations
let odds = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        continue
    }
    odds.push(i);
}
console.log('odds = ', odds);

console.log("----------------------------------------------------------");