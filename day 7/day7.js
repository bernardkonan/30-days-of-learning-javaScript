/* 
    LEARN ABOUT FUNCTION -> reusable block of code to perform a certain task
*/


// Function without parameters and return
function square() {
    let num = 2;
    let sq = num * num;
    console.log(sq);
}
square(); // 4

function addition() {
    const num1 = 10;
    const num2 = 20;
    const add = num1 + num2;
    console.log(add);
}
addition(); // 30
console.log("---------------------------------------------");

// function returning value

function getFullName() {
    let firstName = " Bernard";
    let lastName = "Konan Koffi n'guessan";

    let fullName = lastName + firstName;

    return fullName;
}
console.log(getFullName()); // Konan koffi n'guessan Bernard

function isPrime() {
    let num = 1;
    let isPrimeNumber = true;
    if (num <= 1) {
        isPrimeNumber = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrimeNumber = false;
            }
        }
    }
    return isPrimeNumber;
}

console.log(isPrime());

function pgcd() {
    let number_1 = 18;
    let number_2 = 2;

    let r = number_1 % number_2;
    while (r !== 0) {
        number_1 = number_2;
        number_2 = r;
        r = number_1 % number_2;
    }
    return number_2;
}
console.log(`Le pgcd de ${18} et ${2} = ${pgcd()}`);

console.log("---------------------------------------------");

// function with parameters

function areaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function rectangleSquare(Long, larg) {
    return Long * larg;
}

function printFullName(lastName, firstName) {
    return `${lastName} ${firstName}`;
}

function sumArrayValues(arr) {
    let sum = 0;
    for (let value of arr) {
        sum += value;
    }
    return sum;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Sum of ${arr.toString().replace(/\d ,/gi,', ')} = ${sumArrayValues(arr)}`);

console.log("---------------------------------------------");

// function with unlimited number of parameters
// in regular function
function sumAllNumbers() {
    console.log(arguments);
}
sumAllNumbers(1, 3, 4, 5); // [Arguments] { '0': 1, '1': 3, '2': 4, '3': 5 }


function allStudentsNames() {
    console.log(arguments);
}
allStudentsNames("Steven", "Gerrard", "Mathias", "Bernard", );
/* [Arguments] {
  '0': 'Steven',
  '1': 'Gerrard',
  '2': 'Mathias',
  '3': 'Bernard'
} */

// unlimited number of parameters in arrow function

const allStudents = (...args) => {
    console.log(args);
}
allStudentsNames("Stephen", "Konan", "Matthieu", "Curris")

const sumAllNums = (...args) => {
    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    return sum;
}

console.log(sumAllNums(1, 2, 3, 4, 5));

console.log("---------------------------------------------");

// Anonymous function -> have no name. we store it in a variable

// expression function 
let squareNum = function (num) {
    return num * num;
}
console.log(squareNum(4)); // -> 

// // fetch data
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(resp => resp.json())
//     .then(data => {
//         const ul = document.querySelector('ul');
//         data.forEach(d => {
//             const li = document.createElement('li');
//             const span = document.createElement('span');
//             span.innerHTML = d.username;
//             li.appendChild(span);
//             li.innerHTML += d.name;
//             ul.appendChild(li);
//         })
//     })
//     .catch(err => console.log(err.message))

// self invoking functions

const trible = (function (n) {
    return n ** 3;
})(10);

console.log(trible);

console.log("---------------------------------------------");

let i = 0;
while (i < 10) {
    let n1 = Math.floor(Math.random() * 100);
    let n2 = Math.floor(Math.random() * 100);

    (function (a, b) {
        if (a > b) {
            console.log(`${a} is greater than ${b}`);
        } else {
            console.log(`${a} is less than ${b}`);
        }
    })(n1, n2);

    i++;
}

console.log("---------------------------------------------");

// Arrow functions

const changeArrayToUpperCase = (arr => {
    let newArr = [];
    for (let value of arr) {
        newArr.push(value.toUpperCase());
    }
    console.log(newArr);;
})(["Bernard", "Konan", "Koffi"]);

const toCapitalize = str => {
    const chars = str.trim().split('');
    let result = '' + chars[0].toUpperCase();
    for (let i = 1; i < chars.length; i++) {
        result += chars[i].toLowerCase();
    }
    return result;
}

const changeArrayToCapitalize = arr => {
    let newArr = [];
    for (let str of arr) {
        newArr.push(toCapitalize(str));
    }
    return newArr;
}
console.log(changeArrayToCapitalize(["Bernard", "Konan", "Matthieu", "Curris"]));

// Funtion with default parameters

const printMyName = ((nom = "bernard") => {
    console.log(`Hello ${nom}`);
})();

const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N';

console.log(weightOfObject(200), );