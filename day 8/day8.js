/* 
    LEARN ABOUT OBJECT -> 
*/


// window scope -> concern these variables which are declared without let,var and const 

a = "30 days of javascript"; //window scope
b = 10; //window scope

function letLearnScope() {
    console.log(a, b);
    if (true) {
        console.log(a, b);
    }
}
letLearnScope();
console.log(b, a); //we can accessing to these variables everywhere

//Global scope -> Can be accessed everywhere in the same file
// it can be global to the file or some block of codes

let myFullName = "Leandre Dubois";

function fullName() {
    console.log(myFullName);
    if (true) {
        let d = 10;
        let c = 20;
        console.log(c, d);
    }
    // console.log(c,d); // ReferenceError 
}
fullName()

//Local scope -> can be accessed only in certain block of code
let num = 5;
if (true) {
    console.log(num);
    let num1 = 10;
    let num2 = 15;
}

// object -> object = { }
// empty object 
const object = {};

//Object with values
const rectangle = {
    width: 100,
    height: 60
};

const rectangleArea = rect => rect.width * rect.height;
const rectangleAreaPerimeter = rect => 2 * (rect.height + rect.width);

console.log(`rect area : ${rectangleArea(rectangle)}`);
console.log(`rect perimeter : ${rectangleAreaPerimeter(rectangle)}`);


const person = {
    firstName: "Lea",
    lastName: "Dubois",
    age: 30,
    country: "France",
    city: "Paris",
    skills: [
        // "HTML",
        // "CSS",
        "JavaScript",
        "React",
        "Node",
        "MongoDB",
        "Python",
        "D3.js"
    ],
    isMarried: true,
    // creating methods
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    phoneNumber: '+3584545454545'
};

// manipulate object
const persFullName = pers => `${pers.firstName} ${pers.lastName}`;
const congratulations = pers => {
    if (pers.isMarried) {
        console.log(`Congratulations ${persFullName(pers)} for your wedding.`);
    }
}
const isIn = (ob, skill) => {
    let result = false
    ob.skills.forEach(sk => {
        if (sk === skill) {
            result = true
        }
    })
    return result;
}
const isFullStack = pers => {
    let isIt = false;
    if (isIn(pers, 'HTML') && isIn(pers, 'CSS') && isIn(pers, 'React') && isIn(pers, 'Node') && isIn(pers, 'MongoDB')) {
        isIt = true
    }
    false
}

congratulations(person)

if (isFullStack(person)) {
    console.log("You are a great web developper");
} else {
    console.log("You have to learn more technologies");

}

//setting new key for an object

person.nationality = "Ivorian";
person.title = "Comedian";
person.skills.push('Meteor');
person.isMarried = false;

console.log(person);

// object Methods

// Object.assign -> to copy an object without modifying the original object
const similarPerson = Object.assign({}, person);
console.log(similarPerson);

// Getting object keys with using object.keys()
const personProperties = Object.keys(similarPerson);
console.log(personProperties);

// Getting object values with using object.values()
const valuesPerson = Object.values(similarPerson);
console.log(valuesPerson);

// Getting keys and values using Object.entries()
const valuesAndKeys = Object.entries(similarPerson);
console.log(valuesAndKeys);

// check an existing property in an object
const itExist = similarPerson.hasOwnProperty('firstName');
if (itExist) console.log("You've a first name");