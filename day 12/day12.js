/* 
    LEARN ABOUT REGULAR EXPRESSION - > small programming language that helps to find pattern in data.
    -> flag: g, i, m, s, u, y.
        g : global search
        i : case insensitive
        m : multiligne
        s: dotAll
        u: unicode
        y : adherence
    -> A regular expression takes two parameters.One required search pattern and an optional flag.
*/

// Creating a pattern with regex constructor

let regEx = new RegExp('love', 'gi');

// Creating a pattern without regEx constructor

let regExp = /love/gi;

// RegExp objects methods

// test() : Test a match and return true or false
const str = 'I love JavaScript';
const test = regEx.test(str);
console.log(test); // true

const string = "I love programming with javascript and i love all learn React js";
const isIn = /js/gi.test(string);
console.log(isIn);

// match() : return an array containing all the match
const result = string.match(/love/gi);
console.log(result); // ['love', 'love']

// search():  Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
const searchResult = string.search(/love/gi);
console.log(searchResult);
if (searchResult === -1) {
    console.log("Not found");
} else {
    console.log("pattern exist in string");
}

// replace()
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language';
const matchReplace = txt.replace(/python/gi, 'javascript');
console.log(matchReplace);

const texte = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple';
const matchTexte = texte.replace(/%/g, '');
console.log(matchTexte);

// match test
const phrase = "Hello world 0769454335";
console.log(phrase.match(/\D/gi).join(''));