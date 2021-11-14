// Primitive data types-> immutable (non-modifiable)

let numOne = 3;
let numTwo = 3;

console.log(numOne === numTwo); // true

let js = "JavaScript";
let python = "python";


console.log(js === python); // false

let isSignIn = true;
let isSignOut = false;

console.log(isSignIn === isSignOut); // false


// Non-Primitive data types -> mutable(modifiable)

let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums === numbers);

let userOne = {
    name: "Matthieu",
    role: 'teaching',
    country: "France"
}
let userTwo = {
    name: "Matthieu",
    role: 'teaching',
    country: "France"
}

console.log(userTwo === userOne); // false

nums[1] = 12;
nums[2] = 5;

console.log(nums);

userOne.country = "USA";
userTwo.name = "Bernard";

console.log(userOne, userTwo);


// Numbers

let heavy = 50;
const gravity = 9.81;

let poids = heavy * gravity;

console.log( 'Le poids = ', poids, ' N');

// Math Object

const PI = Math.PI;

console.log(PI);

// Math.round
console.log(Math.round(PI)); // 3

console.log(Math.round(9.82)); // 10

console.log(Math.round(5.5)); // 6

// Math.floor
console.log(Math.floor(PI)); // 3

console.log(Math.floor(9.76)); // 9

// Math.ceil
console.log(Math.ceil(PI)); // 4

console.log(Math.ceil(2.1)); // 3

console.log(Math.ceil(8.9)); // 9

// Math.min or Math.max

console.log(Math.min(1, -10, -3, 5.7, 8, 2)); // -10

console.log(Math.max(1, -10, -3, 5.7, 8, 2)); // 8

//Math.random : create a random number between 0 and 1 (1 is not included)

console.log(Math.random())

console.log(Math.floor(Math.random() * 10)); // random number between 0 and 10 (10 is included)

// Math.sqrt : Square root 

console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Math.abs : Absolute value

console.log(Math.abs(-20)); // 20

console.log(Math.abs(15)); // 15

// Math.pow : power 

console.log(Math.pow(3, 2)); // 9

console.log(Math.pow(9, 3)); // 729

// Random number generator

console.log(Math.random()); // generate 0  to 0.999

console.log(Math.random() * 10); // gives min O and max 10.999 

console.log(Math.floor(Math.random() * 10)); // this gives between 0  and 10

// Strings

let space = ' '; // empty string

let nom = 'KONAN Koffi N\'guessan Bernard'; // with simple quotes 

let sentence = "Lorem ipsum dolor sit amet 'consectetur' adipisicing elit."; // with double quotes

let phrase = ` Dolorem, ipsam natus maiores, 'quaerat' iusto blanditiis eaque `; // with backticks

console.log(nom, space, sentence, phrase);

// string concatenation

let firstName = "Koffi N'guessan Bernard";

let lastName = "KONAN";

let fullName_1 = lastName + space + firstName; // with addition operator

let fullName_2 = `${lastName} ${firstName}`; // with ES6 template string

console.log(fullName_2);

let number_1 = 6;
let number_2 = 7;
let sum = number_1 + number_2;

console.log(`${number_1} + ${number_2} = ${sum}`);
console.log(`${number_1} is less than ${number_2}: ${number_1 < number_2}`);

let bigString = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
Cum provident nemo fugiat perspiciatis.Vitae quia quibusdam aut voluptatibus,\
quis reprehenderit! Fugiat eos aspernatur eum eveniet explicabo doloremque accusantium\
odit similique!\Dignissimos minus nihil officia! Exercitationem, sequi impedit vero quas\
quis, molestiae qui commodi optio repudiandae fuga, reiciendis veniam vitae cum! Tenetur\
architecto ipsam sed, quasi beatae tempore fuga unde dolorum ? Earum id repellat possimus\
eum voluptates placeat. Quisquam explicabo minus nemo quas eius esse minima, enim dolore\
culpa doloremque est fuga laboriosam! Veritatis maiores ab vero labore praesentium aliquid\
vel! Numquam quia, quidem a officiis commodi vero tenetur aspernatur hic soluta ab neque laborum?\ Sapiente amet repellendus in enim fugiat ex repudiandae debitis impedit architecto, voluptatibus\
voluptatem laborum, esse quisquam!";

// string methods

let string = "Javascript";

console.log(string.bold()) // <b>Javascript</b>

// length
console.log(string.length); // 10

// accessing to a character
console.log(string[0]); // J

console.log(string[2]); // v

const lastIndex = string.length - 1;
console.log(string[lastIndex]); // last character of the string

// uppercase letters

let toUpperCase = string.toUpperCase();
console.log(toUpperCase); // JAVASCRIPT

// lowercase letters

let toLowerCase = string.toLowerCase();
console.log(toLowerCase); // javascript

// function to capitalize a string
const toCapitalize = string => {
    if (string.length > 0) {
        let firstCharacter = string[0].toUpperCase();
        let otherCharacters = '';
        for (let i = 1; i < string.length; i++){
            otherCharacters += string[i].toLowerCase();
        }
        return firstCharacter + otherCharacters;
    }
    return;
};

console.log(toCapitalize("Bernard Konan"));

// substring a string 

let substr_1 = string.substr(0, 4);
let substr_10 = string.substring(0, 4);
console.log(substr_1); // Java
console.log(`substring : ${substr_10}`); // substring: Java

let substr_2 = string.substr(2, 4); //
console.log(substr_2); // vasc

// difference between substr and substring

let myUserName = "Bernardkonan10";
let useSubstr = myUserName.substr(0, 5); // berna
let useSubstring = myUserName.substring(0, 5); // berna

console.log(` useSubstr : ${useSubstr}; useSubstring : ${useSubstring}`);

let useSubstr_10 = myUserName.substr(1, 5); // ernar
let useSubstring_10 = myUserName.substring(1, 5); // erna

console.log(` useSubstr_10 : ${useSubstr_10}; useSubstring_10 : ${useSubstring_10}`);

// split a string

let sentence = "30 Days Of JavaScript";
let myName = "Bernard";
let countries = "Finland, Sweden, Norway, Denmark, Iceland";

console.log(sentence.split()); // changes to an array -> ['30 Days Of JavaScript']
console.log(sentence.split(' ')); // -> [ '30', 'Days', 'Of', 'JavaScript' ]

console.log(myName.split('')); // -> ['B','e','r','n','a','r','d']
console.log(countries.split(',')); // -> [ 'Finland', ' Sweden', ' Norway', ' Denmark', ' Iceland' ] 

// trim a string

let aSentence = "   30 Days Of JavaScript   ";

console.log(aSentence.trim()); // -> 30 Days Of JavaScript (without start and end white space)

console.log(aSentence.trim() === sentence); // true

// includes (method)

console.log(sentence.includes('Jav')); // true
console.log(sentence.includes('Days')); // true
console.log(sentence.includes('days')); // false
console.log(sentence.includes('Script')); // true
console.log(sentence.includes('script')); // false
console.log(sentence.includes('java')); // false
console.log(sentence.includes('Java')); // true

let country = 'Finland';

console.log(country.includes('Fin')); // true
console.log(country.includes('fin')); // false
console.log(country.includes(country.substring(4, country.length))); // true
console.log(country.includes('Land')); // false

// replace (method)

let lorem = "Lorem ipsum dolor sit amet ipsum adipisicing elit. Dolorem, ipsam ipsum maiores, quaerat iusto ipsum eaque quidem cupiditate vero doloribus ipsum voluptate corporis quod laudantium in possimus repellat ipsum dolorum";

let encryptText = lorem.replace('ipsum', "***"); // replace a first occurence of the oldsubstring
console.log(encryptText);

const replace = (oldSubString, newSubString)  => {
    let strResult = "";
    if (oldSubString && newSubString) {
        const arrayString = oldSubString.split(' ').map(str => {
            if (str === newSubString) {
                return '***';
            }
            return str
        })
        arrayString.forEach(str => {
            strResult += str + " ";
        })
        return strResult;
    }
}

console.log(replace(lorem, 'ipsum'));

// charAt, charCodeAt (method)

let role = "Civil engineer";

console.log(role.charAt(0)); // C
console.log(role.charAt(role.length - 1)); // r

console.log(role.charCodeAt(1)); // 105 -> code ASCII of role[1]: i 
console.log(role.charCodeAt(0)); // 67 -> code ASCII of role[0]: C

// lowercase letter and capital letter haven't the same ASCII code
console.log(role.charCodeAt(0), role.toLowerCase().charCodeAt(0)); // 67 , 99

// indexOf , lastIndexOf (method)

console.log(sentence.indexOf('Days')); // 4 (first index of the substring)
console.log(sentence.indexOf('days')); // -1 (not found)

console.log(sentence.lastIndexOf('a')); // 14 (last index of the substring)
console.log(sentence.lastIndexOf('days')); // -1 (not found)

// concat (method) -> takes many substrings and join them

let aStr = "30";
console.log(aStr.concat(' Days', ' Of ', ' JavaScript')); // -> 30 Days Of JavaScript

let subCountry = 'Fin';

console.log(subCountry.concat('land')); // Finland

// startWith, endsWith (method) -> return a boolean

console.log(sentence.startsWith('30')); // true
console.log(sentence.startsWith('Days')); // false
console.log(sentence.endsWith('JavaScript')); // true
console.log(sentence.endsWith('javascript')); // false


//search (method) -> return the index of the first match
//search value can be a regular expression

let quote = 'I love JavaScript. If you do not love JavaScript what else can you love.';

// console.log(quote.search('love')); // 2 
// console.log(quote.search(/not/gi)); // 29; g - means to search in whole text and i - case insensitive


// math (method)
/* 
    takes a substring or a regular expression pattern as an argument and it returns an array 
    if there is match if not it returns null.
*/

console.log(quote.match('love')); /* 
    [
        'love',
        index: 2,
        input: 'I love JavaScript. If you do not love JavaScript what else can you love.',
        groups: undefined
    ]
*/

let pattern = /love/gi;
console.log(quote.match(pattern));


// repeat (method) -> takes a number as argument and it returns the repeated version of the string
let love = "Love";
let jsScript = "Javascript ";

console.log(love.repeat(5)); // LoveLoveLoveLoveLove
console.log(jsScript.repeat(4)); // Javascript Javascript Javascript Javascript 


// Checking Data Types and Casting 

// checking data types -> typeof

let fName = 'Asabeneh'; // string
let lName = 'Yetayeh'; // string
let pays = 'Finland'; // string
let city = 'Helsinki'; // string
let age = 23; // string
let others = null; // object
let job; // undefined (a value was not assigned)

console.log(typeof fName); // string
console.log(typeof age); // number
console.log(typeof job); // undefined
console.log(typeof others); // object

// Casting
// String to Int

let num_1 = '10';

console.log(parseInt(num_1)); // 10

console.log(Number(num_1)); // 10

console.log(+num_1); // 10

// String to Float

let num_2 = '9.81';

console.log(parseFloat(num_2)); // 9.81

console.log(Number(num_2)); // 9.81

console.log(+num_2); // 9.81

// Float to Int

console.log(parseInt(num_2)); // 9