/* 
    ARRAYS
*/

// create empty array

// // using constructor

// let arr = Array();
// console.log(arr);

// using square brackets : recommended
let myArr = [];
console.log(myArr);

// arrays with values

const numbers = [1, 14, 18, 56, 89, 33, 16, 100]; // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon']; // array of strings
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion']; // array of strings
const animalProducts = ['milk', 'meal', 'butter', 'yoghurt']; // array of strings
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Vue', 'Angular', 'Node', 'MongoDB']; // array of strings
const countries = ['Finland', 'Sweden', 'France', 'USA', 'Denmark', 'Norway', 'IceLand']; // array of strings

const allArrays = [numbers, fruits, animalProducts, webTechs, countries]; // array of arrays

// allArrays.forEach(array => {
//     console.log("Array :", array, ` and length : ${array.length}.`);
// });

// creating an array using split()
let js = 'javascript';
const splitJsInChars = js.split('');
console.log(splitJsInChars);

let companiesString = 'Facebook, Twitter, Microsoft, IBM, Google, Apple, Oracle, Amazon';
let companies = companiesString.split(",");
console.log(companies);

// Acessing array items using index
let firstCompany = companies[0]
console.log(firstCompany); // Facebook

let lastIndex = companies.length - 1;
let lastCompany = companies[lastIndex];
console.log(lastCompany); // Amazon

webTechs[1]; // CSS
webTechs[3]; // React
webTechs[webTechs.length - 1]; // MongoDB

// modifying array element

console.log(numbers);

numbers[3] = 9;
numbers[0] = 17;

console.log(numbers);


// methods to manipulate array

// concatenating array using concat
let firstList = [1, 2, 3];
let secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList); // [ 1, 2, 3, 4, 5, 6 ]

let fruitsAndVegetables = fruits.concat(...vegetables);
console.log(fruitsAndVegetables); // ['banana', 'orange','mango', 'lemon','Tomato', 'Potato','Cabbage', 'Onion']

// getting array length

let length = fruitsAndVegetables.length; // 8

let thirdListLength = thirdList.length; // 6


// index an element in arr array

console.log(thirdList.indexOf(7)); // -1 -> means doesn't exist
console.log(thirdList.indexOf(3)); // 2
console.log(thirdList.indexOf(4)); // 3
console.log(thirdList.indexOf(10)); // -1


// check if an element if it exist in an array

let fruitIndex = fruits.indexOf('banana');

if (fruitIndex !== -1) {
    console.log('This fruit does exist in the array.');
} else {
    console.log("This fruit doesn't exist in the array.");
}

// check is the data is an array

const nums = [1, 2, 3, 4, 5];
console.log(Array.isArray(nums)); // true

const number = 100;
console.log(Array.isArray(number)); // false


// converting array in string

console.log(nums.toString()); // 1, 2, 3, 4, 5

console.log(fruits.toString()); // banana,orange,mango,lemon

console.log(numbers.toString()); // 17,14,18,9,89,33,16,100

// Joining array elements

const names = ['Elisabeth', 'Mickael', 'Jean', 'Lucie', 'Mathias'];

console.log(names.join()); // Elisabeth,Mickael,Jean,Lucie,Mathias
console.log(names.join('')); // ElisabethMickaelJeanLucieMathias
console.log(names.join(' - ')); // Elisabeth - Mickael - Jean - Lucie - Mathias
console.log(names.join("#")); // Elisabeth#Mickael#Jean#Lucie#Mathias

// slice array elements
console.log(names.slice()); // it copies all the items
console.log(names.slice(0)); // it copies all the items
console.log(names.slice(0, names.length)); // it copies all the items
console.log(names.slice(1, 4)); // ['Mickael', 'Jean', 'Lucie']
console.log(names.slice(2, 4)); // ['Jean', 'Lucie']

// splice method in array: -> delete items from startIndex to endsItem = delecount - 1;
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums2.splice(0, 1)); // delete the first item of the table
console.log(nums2.splice(1, 5)); //
console.log(nums2);
console.log(nums2.splice(0, nums2.length - 1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// addind item to an array using push -> add item to the end of the array
nums.push(1, 2, 3); // add 1, 2, 3 at the end oh the array
nums.push(...[17, 18, 19]); // add 17, 18, 19 at the end oh the array
console.log(nums);

// remove item using pop() -> remove the last item oh the array
nums.pop();
names.pop();

// remove item using shift() -> remove the beginning item on the array
nums.shift();
names.shift();

// add item at the beginning oh the array
nums.unshift(12, 13);
names.unshift(...['Bernard', 'Jacques', 'Julien']);

console.log(names);
console.log(nums);

// reverse array using reverse()
names.reverse(); // reverse names
nums.reverse(); // reverse nums

// sort array using sort()
nums.sort();
console.log(nums);
nums.sort((a, b) => b - a); // decreased sort
console.log(nums);
nums.sort((a, b) => a - b); // increased sort
console.log(nums);

// array of arrays

let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Angular', 'Redux'];
let backEnd = ['Node', 'Express', 'MongoDB', 'PhP', 'Python'];
let fullStack = [frontEnd, backEnd];

console.log(fullStack);