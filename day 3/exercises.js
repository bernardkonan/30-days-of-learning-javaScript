/* 
    EXERCISE SECTION
*/

// Exercise 1

// 1- declare some variables and check data types

let firstName = "Bernard";
let lastName = "Konan";
let country = "Côte d'Ivoire";
let city = "Abidjan";
let age = 25;
let isMarried = false;
let year = new Date().getFullYear();

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

// 2 - 
console.log(typeof '10' === typeof 10); // true

// 3 - 
console.log(typeof '9.8' === typeof 9.8); // true

// 4 - 
    // 1 - 
4 > 3;// true
'2' == 2; // true
'hello' === "hello"; // true
    // 2 - 
4 < 3;// false
'2' === 2; // false
'hello' != "hello"; // false

// 5 - 
4 > 3; // true
4 >= 3; // true
4 < 3; // false
4 <= 3; // false
4 == 4; // true
4 != 4; // false
4 !== 4; // false
4 != '4'; // true
4 == '4'; // true
4 === '4'; // false

let pythonLength = "python".length;
let jargonLength = "jargon".length;

pythonLength !== jargonLength; // false

// 6 - 
4 > 3 && 10 < 12; // true
4 > 3 && 10 > 12; // false
4 > 3 || 10 < 12; // true
4 > 3 || 10 > 12; // true
!(4 > 3); // true
!(4 < 3); // false
!(false); // true
!(4 > 3 && 10 < 12); // false
!(4 > 3 && 10 > 12); // true
!(4 === '4'); // true

// 7 - 
let date = new Date();
// 1
date.getFullYear();
// 2
date.getMonth();
// 3
date
// 4
date.getDay();
// 5
date.getHours();
// 6
date.getMinutes();
//7
date.getTime();


// Exercise 2

// 1 
let base = prompt("Enter base : ");
let height = prompt("Enter height: ");
alert(`The area oh the triangle is ${0.5 * (+base) * (+height)} .`);

// 2
let sideA = prompt("Enter side a: ");
let sideB = prompt("Enter side b: ");
let sideC = prompt("Enter side c: ");

alert(`The perimeter of the triangle is ${+sideA + +sideB + +sideC} .`);

// 3
let length = +prompt('Enter length of rectangle : ');
let width = +prompt('Enter width of rectangle : ');
alert(`The perimeter of rectangle is ${2 * (length + width)}`);

// 4
let radius = +prompt("Enter the radius: ");
alert(`The area of a circle is ${2 * Math.PI * Math.pow(radius, 2)} and the circumference of a circle is ${2 * Math.PI * radius} .`);

