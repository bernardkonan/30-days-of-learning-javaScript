/* 
    array : exercises section
*/
let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Angular', 'Redux'];
let backEnd = ['Node', 'Express', 'MongoDB', 'PhP', 'Python'];

const countries = ['ALbania', 'Finland', 'Sweden', 'France', 'USA', 'Denmark', 'Norway', 'IceLand'];
let webTechs = frontEnd.concat(backEnd);

// Exercise : Level 1

// 1 - 
let arr = [];

// 2 - 
let nums = [1, 2, 3, 4, 5, 6, 7];

// 3 -
console.log(nums.length);

// 4 - 
let firstItem = nums[0];
let middleItem = null;
if (nums.length % 2 === 0) {
    middleItem = undefined;
} else {
    middleItem = nums[Math.floor(nums.length / 2)];
}
let lastItem = nums[nums.length - 1];

console.log(firstItem, middleItem, lastItem);

// 5 - 
let mixedDataTypes = ['Hello', [1, 2, 3], 12, {
    me: 'Bernard'
}, ' ', true, false];

console.log(mixedDataTypes.length);

// 6 -
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7 - 
console.log(itCompanies);

// 8 -
console.log(itCompanies.length);

// 9 - 
console.log(itCompanies[0]);

// 10 - 
itCompanies.forEach(company => console.log(company));

// 11 - 
itCompanies.forEach(company => console.log(company.toUpperCase()));

// 12 - 
console.log(itCompanies.toString());

// 13 -
let company = "IBM";
if (itCompanies.indexOf(company) != -1) {
    console.log(`${company} does exist in the itCompanies`);
} else {
    console.log(`A company not found`);
}


// 14 - 
let moreThanOne = [];
itCompanies.forEach(company => {
    let os = company.match(/o/gi);
    if (os == null) {
        os = [];
    } else {
        if (os.length > 1) {
            moreThanOne.push(company);
        }
    }
})
console.log(moreThanOne.toString());

// 15 - 
itCompanies.sort();

// 16 - 
itCompanies.reverse();

// 17 - 
const itComp = itCompanies.slice(0, 3);
console.log(itComp);

// 18 - 
const it = itCompanies.slice(itCompanies.length - 3, itCompanies.length);
console.log(it);

// 19 -
const itC = itCompanies.slice(0, Math.floor(itCompanies.length / 2));
console.log(itC);

// 20 -
itCompanies.shift();

// 21 - 
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);

// 22 - 
itCompanies.pop();

//
itCompanies.splice(0, itCompanies.length);

console.log(itCompanies);