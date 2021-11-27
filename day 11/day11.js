/* 
    LEARN ABOUT DESTRUCTURING AND SPREAD OPERATORS
*/

// Destructuring Arrays

const numbers = [1, 2, 3, 4, 5];

let [numOne, numTwo, numThree, ...rest] = numbers;
console.log(numOne, numTwo, numThree, rest);

const names = ["Matilde", "Geremy", "Bernard", "Delande"];
let [firstPerson, secondPerson, ...otherPerson] = names;
console.log(firstPerson, secondPerson, otherPerson);

// Destructuring during iteration

const countries = [
    ["Ivory Coast", "Abidjan"],
    ["Finland", 'Helsinky'],
    ["France", "Paris"]
];

for (const [country, city] of countries) {
    console.log(`${country} - ${city}`);
}

// Destructuring Object
const rectangle = {
    width: 20,
    height: 10,
    area: 200
};

let {
    width,
    height,
    area
} = rectangle;
console.log(width, height, area);

const users = [{
    firstName: "Bernard",
    lastName: "Konan",
    age: 25
}, {
    firstName: "Delange",
    lastName: "Koueli",
    age: 26
}];

for (const {
        firstName,
        lastName,
        age
    } of users) {
    console.log(`${firstName} ${lastName}. I'm ${age} years old.`);
};

// Object parameter with destructuring

const calculatePerimeter = ({
    width,
    height
}) => {
    return 2 * (width + height);
}

console.log(calculatePerimeter(rectangle));

// Spread operators to copy array
const even = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...even];

const odds = [1, 3, 5, 7, 9, 11];
const oddNumbers = [...odds];

const wholeNumbers = [...even, ...odds].sort((a, b) => a - b);
console.log(wholeNumbers);

// spread operator to copy Object

const user = {
    name: "Bernard",
    title: "Programmer",
    country: "Côte d'Ivoire",
    city: "Abidjan"
};
const copyUser = {
    ...user
};
console.log(copyUser);