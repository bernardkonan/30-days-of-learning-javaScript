// /*
//     LEARN ABOUT HIGHER ORDER FUNCTIONS

//     - they take other functions as a parameter or return a function as a parameter.
//     - the function passed as a parameter is called 'callback'
// */

// // CALLBACK

// const number = (n) => n ** 2;

// const cube = (callback, n) => {
//   return callback(n) * n;
// };

// console.log(cube(number, 4));

// // returning as a value
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumArray = (arr) => {
//   let sum = 0;
//   const callback = function (element) {
//     sum += element;
//   };
//   arr.forEach(callback);
//   return sum;
// };

// // we can simplify sumArray function like this
// const sumArray2 = (arr) => {
//   let sum = 0;
//   arr.forEach((el) => {
//     sum += el;
//   });
//   return sum;
// };

// console.log(sumArray(numbers)); // first method
// console.log(sumArray2(numbers)); // second method

// // Setting time : -> execute some activities in a certain interval of time

// // -> setInterval
// let times = 0;
// setInterval(() => {
//   times++;
//   console.log("Hello");
// }, 2000); // loggeg hello every 2 seconds

// // log a random number of numbers array every 2 seconds

// setInterval(() => {
//   let random = Math.floor(Math.random() * numbers.length);
//   console.log(numbers[random]);
// }, 2000);

// // -> setTimeOut
// let array = null;
// setTimeout(() => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => {
//       array = json;
//       console.log(array);
//     })
//     .catch((err) => console.log(err));
// }, 2000);

// setInterval(() => {
//   let randomN = Math.floor(Math.random() * array.length);
//   console.log(array[randomN].name);
// }, 3000);

// FUNCTIONAL PROGRAMMING

// forEach -> Iterate an array elements
/*
    array.forEach((element, index, array)=>{

    })
*/

const artists = ["NiNho", "Adele", "Niska", "Aya Nakamura", "John Legend"];
artists.forEach((artist, index) => {
  console.log(`Artist N ${index + 1} - ${artist}`);
});

// transform each country in uppercase character
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
countries.forEach((country) => {
  console.log("\n" + country + "\n");
});

// map -> Iterate an array elements and modify the array elements

// capitalize a string
const capitalize = (string) => {
  const lower = string.toLowerCase();
  return lower[0].toUpperCase() + lower.slice(1, lower.length);
};

artists.map((artist) => {
  console.log(capitalize(artist));
});

const numbers = [1, 8, 5, 9];
const square = numbers.map((number) => number * number);
console.log(square);

// -------------------------------------------------------
const countriesToUppercase = countries.map((country) => country.toUpperCase());
const countryThreeFirstLetters = countriesToUppercase.map((country) =>
  country.slice(0, 3)
);
console.log(countriesToUppercase);
console.log(countryThreeFirstLetters);

// filter -> Filter out items which full fill filtering conditions and return a new array.

// filter countries containing land
const countriesContainingLand = countries.filter((country) => {
  return country.includes("land");
});
console.log(countriesContainingLand); // [ 'Finland', 'Ireland' ]

const countriesEndsByia = countries.filter((country) => {
  return country.endsWith("ia");
});
console.log(countriesEndsByia); // [ 'Albania', 'Bolivia', 'Ethiopia' ]

const countriesShortName = countries.filter((country) => country.length <= 5); // [ 'Japan', 'Kenya' ]
console.log(countriesShortName);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEight = scores.filter((score) => {
  return score.score >= 80;
});
console.log(scoresGreaterEight);

scoresGreaterEight.forEach((score, index) => {
  console.log(`N${index}: score ${score.name} - ${score.score}`);
});

// reduce
/* 
  The call back function takes accumulator, current, and optional initial value as a parameter
  and returns a single value
*/

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(`Sum values : ${sum}`);

const times = numbers.reduce((acc, cur) => {
  return acc * cur;
}, 1);
console.log(`Times values : ${times}`);

// every -> Check if all the elements are similar in one aspect. It returns boolean
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = names.every((name) => {
  return typeof name === "string";
});
console.log(areAllStr); // true

const bools = [true, true, true, true];
const areAllTrue = bools.every((b) => b === true);
console.log(areAllTrue); // true

const ages = [24, 22, 25, 32, 35, 18];
const areAllAdult = ages.every((age) => age >= 18);
console.log(areAllAdult); // true

// find -> return the first element which satisfies the condition

const age = ages.find((age) => age <= 20);
console.log(age); // 18

const user = scores.find((user) => user.score >= 85);
console.log(user); //{ name: 'Asabeneh', score: 95 }

// findIndex -> Return the position of the first element which satisfies the condition
const nums = [24, 22, 25, 32, 35, 18];
const index = nums.findIndex((num) => num >= 25);
console.log(index);

// some is almost similar to every
const booleans = [true, true, true, true];

const areSomeTrue = booleans.some((b) => b === true);

console.log(areSomeTrue); //true

// sort
/* The sort methods arranges the array elements either ascending or descending order */

// Sorting string  values
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort());

// sorting numeric values
const numbs = [9.81, 3.14, 100, 37];
// ascending
numbs.sort((a, b) => {
  return a - b;
});
console.log(numbs);
// descending
numbs.sort((a, b) => {
  return b - a;
});
console.log(numbs);

// sorting Object Arrays

const users2 = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyo", age: 100 },
  { name: "Elias", age: 22 },
];
// descending
users2.sort((a, b) => {
  if (a.age < b.age) return 1;
  if (a.age > b.age) return -1;
  return 0;
});
console.log(users2);
// ascending
users2.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users2);
