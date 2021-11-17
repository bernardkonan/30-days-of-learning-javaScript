/* 
    Object exercise section
*/

// Exercise 1

// 1 -
const dog = {};

// 2 - 
console.log(dog); // {}

// 3 -
dog.name = "choupy";
dog.legs = 4;
dog.color = 'dark';
dog.age = 2;
dog.bark = function () {
    return "woof woof"
}

// 4 -
console.log(Object.values(dog));


// Exercise 2
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// 1
let moreSkills = Object.entries(users)[0][1].skills.length;

Object.entries(users).forEach(user => {
    if (user[1].skills.length > moreSkills) {

    }
})

const entries = Object.entries(users);
for (let i = 1; i < Object.entries(users).length; i++) {
    if (entries[i][1].skills.length > moreSkills) {
        moreSkills = entries[i][1].skills.length;
    }
}
for (let i = 0; i < Object.entries(users).length; i++) {
    if (entries[i][1].skills.length === moreSkills) {
        console.log(Object.entries[i][0]);
    }
}