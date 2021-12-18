/*
    LEARN ABOUT CLASS 
*/

// // defining a class
// class Person1 {

// }
// class Car {

// }

// // Class instantiation -> create an object from a class.
// const person = new Person1();
// console.log(person);

// const car = new Car();
// console.log(typeof car); // object

// // class constructor
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFullName() {
//         const fullName = this.firstName + ' ' + this.lastName;
//         return fullName;
//     }
// }
// const pers = new Person();
// console.log(pers); //Person { firstName: undefined, lastName: undefined }

// // pass value to each property
// pers.firstName = "Koffi N'guessan Bernard";
// pers.lastName = "Konan";

// console.log(pers); // Person { firstName: "Koffi N'guessan Bernard", lastName: 'Konan' }

// // add more properties

// pers.age = 25;
// pers.country = "Côte d'ivoire";
// pers.city = "Yamoussoukro";

// console.log(pers);

// // add default value to a class constructor
// class Car1 {
//     constructor(nbDeRoues = 4, marque = "Toyota v507", couleur = "Rouge", constructeur = "Toyota") {
//         this.nbDeRoues = nbDeRoues;
//         this.marque = marque;
//         this.couleur = couleur;
//     }
// }

// const car1 = new Car1();
// const car2 = new Car1(4, 'Renault', "Bleu", "Toyota");

// console.log(car1, car2);


// // Class Methods -> could be a regular method or setter/getter
const toCapitalize = (str) => {
    const string = str.trim().toLowerCase();
    return string[0].toUpperCase() + string.slice(1, string.length);
}

console.log(toCapitalize("ferNand"));

class Person2 {
    constructor(firstName, lastName, age, country) {
        [
            this.firstName,
            this.lastName,
            this.age,
            this.country
        ] = [firstName, lastName, age, country];
        this.skills = ['Javscript', 'React', 'Node', 'Mongo', 'AWS'];
        this.city = '';
        this.score = 0;
    }
    getFullName() {
        return `${toCapitalize(this.firstName)} ${this.lastName.toUpperCase()}`;
    }
    getSkillsList() {
        this.skills.length > 0 ? console.log("You have some skills") : (console.log("You've not skills"));
    }

    set setSkills(skill) {
        this.skills.push(skill);
    }

    // static methods : -> no need to instantiate a class before method
    static favouriteSkill(skills) {
        if (skills.length > 0) {
            let index = Math.floor(Math.random() * skills.length);
            return skills[index];
        }
    }
}

const per = new Person2('bernard', 'Konan', 15, "Côte d'Ivoire");
console.log(per.getFullName());
per.getSkillsList();

// Getter and Setter

// Getter -> Allow us to access to a value of a property

class House {
    constructor(name, nbRooms) {
        this.name = name;
        this.nbOfRooms = nbOfRooms;
    }

    get getHouseName() {
        return this.name;
    }
    get getNbOfRooms() {
        return this.nbOfRooms;
    }
}
class Circle {
    constructor(rayon) {
        this.rayon = rayon;
    }
    get getRayon() {
        return this.rayon;
    }
}

console.log(Person2.favouriteSkill(['Node', "Mongo", "Express", "React"]));

// inheritance : -> Allow to access all the properties and methods of the parent class

// ChildClassName -> inheritance of Person2

class ChildClassName extends Person2 {
    constructor(firstName, lastName, age, country, gender) {
        super(firstName, lastName, age, country);
        this.gender = gender;

    }
    getFullName(smiley) {
        return `${this.firstName} ${this.lastName} ${smiley}`
    }
    saySomething() {
        return "Hi everyone";
    }
}
const child = new ChildClassName('bernard', 'Konan', 25, "Côte d'Ivoire", 'male');
console.log(child.saySomething());
console.log(child.getFullName(' )>')); // Override a method