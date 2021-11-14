/* 
    We will make our all exercises in this file.
    Each exercise will organize in a section so that to separate it to another one.
*/

// // Exercise 1

// // 1 - variable and assignation
// let challenge = "30 Days of JavaScript";

// // 2 - log in console
// console.log(challenge); // 30 Days of JavaScript

// // 3 - print length of the string named challenge
// console.log(challenge.length); // 21

// // 4 - change all the string characters to capital letters
// console.log(challenge.toUpperCase()); // 30 DAYS OF JAVASCRIPT

// // 5 - change all the string characters to lowercase letters
// console.log(challenge.toLowerCase()); // 30 days of javascript

// // 6 - slice out the first word of the string
// console.log(challenge.substr(0, 2)); // 30

// // 7 - slice out the phrase 'Days Of JavaScript' from '30 Days of JavaScript'
// console.log(challenge.substring(3, challenge.length)); // Days Of JavaScript

// // 8 - check if the string contains a word 'Script'
// console.log(challenge.includes('Script')); // true

// // 9 -  split the string in an array
// console.log(challenge.split()); // [ '30 Days of JavaScript' ]

// // 10 - split the string in an array at the space
// console.log(challenge.split(' ')); // [ '30', 'Days', 'of', 'JavaScript' ]

// // 11 - split the following string at the comma
// let string = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon,Aliba,Space-X";
// let companies = string.split(',');
// console.log(companies); // ['Facebook',  'Google','Microsoft', 'Apple','IBM','Oracle','Amazon','Aliba','Space-X']

// // 12 - Change '30 Days of JavaScript' in '30 Days of Python'
// console.log(challenge.replace("JavaScript", "Python")); // 30 Days of Python

// // 13 - what is character at index 15 of '30 Days of JavaScript' string ?
// console.log(challenge.charAt(15)); // S

// // 14 - What is the character code of 'J' in '30 Days of JavaScript' string;
// console.log(challenge.charCodeAt(challenge.indexOf('J'))); // 74

// // 15 - determine the position of the first occurrence of 'a' in '30 Days of JavaScript'
// console.log(challenge.indexOf('a')); // 4

// // 16 - determine the position of the last occurrence of 'a' in '30 Days of JavaScript'
// console.log(challenge.lastIndexOf('a')); // 14

// // 17 - use indexOf() find the position of the first occurrence of the word 'because'
let rule = "You cannot end a sentence with because because because is a conjunction";
// console.log(rule.indexOf('because')); // 31

// // 18 - use lastIndexOf() to find the position of the last occurrence of the word 'because'
// console.log(rule.lastIndexOf('because')); // 47

// // 19 - use search() find the position of the first occurrence of the word 'because'
// console.log(rule.search('because')); // 31
// console.log(rule.search(/because/gi)); // 31

// // 20 - Use trim() to remove any trailing whitepace at the beginning anf the end of a string
// let withWithSpace = "  You cannot end a sentence with because because because is a conjunction  ";
// console.log(withWithSpace.trim()); // You cannot end a sentence with because because because is a conjunction

// // 21 - Use startsWith() method with 'You cannot end a sentence with because because because is a conjunction' to make the result true
// console.log(rule.startsWith('You')); // true

// // 22 - Use endsWith() method with 'You cannot end a sentence with because because because is a conjunction' to make the result true
// console.log(rule.endsWith('conjunction')); // true

// // 23 - Use match() method to find all the a's is '30 Days of JavaScript'
// const searchPattern = /a/gi;
// let letters = challenge.match(searchPattern);
// console.log(letters);

// // 24 - Use concat() and merge '30 Days of ' and 'JavaScript' to a single string

// let oneStr = '30 Days of ';
// let secondStr = 'JavaScript';

// let completeStr = "".concat(oneStr, secondStr);
// console.log(completeStr); // '30 Days of JavaScript';

// // 25 - Use repeat() method to print '30 Days of JavaScript' 2 times
// console.log(challenge.repeat(2)); // '30 Days of JavaScript30 Days of JavaScript'



// Exercice Level 2

// 1- print a sentence
let phrase = 'There is no exercise better for the heart than reaching down and lifting people up.';
console.log(phrase);

// 2 - print Mother Teresa quote
let teresaQuote = "Love is not patronizing and charity isn't about pity, it is about love. \
Charity and Love are the same -- with charity you give love, so don't just give money but \
reach out your hand instead.";
console.log(teresaQuote);

// 3 - check if  typeof '10' is equal to 10 if not make it exactly equal with 10; 
console.log(typeof +'10' === typeof 10); // tere

// 4 - check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10;
console.log(Math.ceil(parseFloat('9.8')) === 10); // true

// 5 - check if 'on' is found in both 'python' and 'jargon'
console.log('python'.includes('on') === 'jargon'.includes('on'));// true

// 6 - check is 'jargon' in the sentence
let str = 'I hope this course is not full of jargon';
console.log(str.includes('jargon')); // true

// 7 - Generate a random number between 0 and 100
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

// 8 - Generate a random number between 50 and 100
let rnd = Math.floor(Math.random() * (100 - 50 + 1) + 50);
console.log(rnd);

// function which generates a random integer between max and min
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 9 - Generate a random number between 0 and 255
console.log(randomInt(0, 255));

// 10 - Access to the 'JavaScript' string characters using a random number
let js = 'JavaScript';
console.log(js[Math.floor(Math.random() * js.length)]);

// 11 - print a string chaine

let strChaine = "1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125";
console.log(strChaine);

// 12 - slice out a substring

console.log(rule.substr(rule.indexOf('b'), 'because'.length * 3 + 2));



// Exercise 3

// 1 - Count the number of all word 'love' in the following sentence
let phrase1 = "Love is the best thing in this world. Some found their love \
and some are still looking for their love";

console.log(phrase1.match(/love/gi).length); // 3

// 2 - Use match() to count the number of all 'because' in rule (sentence)
console.log(rule.match(/because/gi).length); // 3

// 3 - extract all numbers to this sentence
let st = 'He earns 5000 euro from salary per month, 10000 euro annual bonus,\
15000 euro online courses per month';

let salaries = st.match(/\d+/gi);
let earns = salaries.reduce((t, value) => {
    return +t + +value;
})
console.log(earns);