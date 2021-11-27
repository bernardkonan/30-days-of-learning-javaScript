const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
};
const users = [{
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];

// Exercise : Level 1

// 1 - 
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

// 2 - 
const [fin, est, sw, den, nor] = countries;

// 3 - 
const {
    width,
    height,
    area,
    perimeter
} = rectangle;

// Exercise : Level 2

// 1 - 
console.log(`Names  Socres  Skills  Age`);
for (const {
        name,
        scores,
        skills,
        age
    } of users) {
    console.log(`${name}  ${scores}  ${skills}  ${age}`);
}
// 2 -

// let person = {};
// let skillsMin = users[0].skills.length;

// users.forEach(user => {
//     if (user.skills.length < skillsMin) {
//         skillsMin = user.skills.length;
//         person = user;
//     }
// })

// console.log(person, skillsMin);

const persons = users.filter(user => user.skills.length < 2);
console.log(persons);

// Exercise : Level 3

// 1 - 
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'],
        [98, 85, 90, 95]
    ],
    ['John', ['HTM', 'CSS', 'JS', 'React'],
        [85, 80, 85, 80]
    ]
];

students.forEach(([name, skills, scores]) => {
    console.log(name, skills, scores);
});

// 2 - 
const converArrayToObject = arr => {
    const returnTable = [];
    arr.forEach(([name, skills, scores]) => {
        returnTable.push({
            name: name,
            skills: skills,
            scores: scores
        });
    });
    return returnTable;
};
console.log(converArrayToObject(students));

// 3 - 
const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [{
                skill: 'HTML',
                level: 10
            },
            {
                skill: 'CSS',
                level: 8
            },
            {
                skill: 'JS',
                level: 8
            },
            {
                skill: 'React',
                level: 9
            }
        ],
        backEnd: [{
                skill: 'Node',
                level: 7
            },
            {
                skill: 'GraphQL',
                level: 8
            },
        ],
        dataBase: [{
            skill: 'MongoDB',
            level: 7.5
        }, ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const newStudent = {
    ...student
};

newStudent.skills.frontEnd.push({
    skill: 'Bootstrap',
    level: 8
});
newStudent.skills.backEnd.push({
    skill: 'Express',
    level: 9
});
newStudent.skills.dataBase.push({
    skill: 'SQL',
    level: 8
});
newStudent.skills.dataScience.push('SQL');

console.log(newStudent);