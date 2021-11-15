/* 
    Function exercise section
*/

// Exercise : length 1

// 1 - 
function fullName() {
    console.log("Konan Koffi N'guessan Bernard");
}
fullName()

// 2 - 
function fullname(firstName, lastName) {
    return `${lastName} ${firstName}`;
}

// 3 - 

function addNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

// 4 - 
function areaRectangle(width, height) {
    return width * height;
}

// 5 - 
function perimeterRectangle(width, height) {
    return 2 * (width + height);
}

// 6 - 
function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}

// 7 - 
const areaOfCircle = r => Math.PI * r * r;

// 8 -
const circumferenceOfCircle = r => 2 * Math.PI * r;

// 9 -
const density = (mass, volume) => mass / volume;

// 10 -
const speed = (distance, time) => distance / time;

// 11 - 
const findMax = (...args) => {
    let max = args[0];
    for (let number of args) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}
console.log(findMax(1, 17, 15, 9, 100, 500, 23, 10));


// exercise : Level 2

//1 -
const solveQuadEquation = (a, b, c) => {
    // solve ax^2 + bx + c = 0
    const disc = b ** 2 - 4 * a * c;
    if (disc < 0) {
        return "no solution in R";
    } else if (disc === 0) {
        return -b / (2 * a)
    } else {
        return {
            x1: (-b - Math.sqrt(disc)) / (2 * a),
            x1: (-b + Math.sqrt(disc)) / (2 * a)
        }
    }
}

// 2 -
function swap(x, y) {
    let intermediate = x;
    x = y;
    y = intermediate;
    return {
        x,
        y
    }
}

// 3
const reverseArray = arr => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// 4
const removeItem = (arr, index) => {
    if (index >= arr.length) {
        return 'impossilbe to remove this item';
    } else {
        arr.splice(index, 1);
        return arr;
    }
}
console.log(removeItem([2, 6, 7, 8, 4, 9], 3));

/* 
    All others exercises are similar to these i did.
*/