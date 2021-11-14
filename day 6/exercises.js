/* 
    loop : exercises section
*/
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];

// Exericse : Level 1

// 1 - 
// using for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log("------------------------------------");
// using do while loop
let k = 0;
do {
    console.log(k);
    k++
} while (k <= 10)
console.log("------------------------------------");
// using while loop
let j = 0;
while (j <= 10) {
    console.log(j);
    j++
}
console.log("----------------------------------------------------------");

// 2-
// using for loop
for (let i_ = 10; i_ >= 0; i_--) {
    console.log(i_);
}
console.log("------------------------------------");

// using do while loop
let k_ = 10;
do {
    console.log(k_);
    k_--;
} while (k_ >= 0)
console.log("------------------------------------");

// using while loop
let j_ = 10;
while (j_ >= 0) {
    console.log(j_);
    j_--;
}

console.log("----------------------------------------------------------");

// 3 - 
let n = 20;
for (let i = 0; i <= 20; i++) {
    console.log(i);
}

console.log("------------------------------------");

// 4-
let i = 1;
do {
    console.log('#'.repeat(i));
    i++;
} while (i < 7);

console.log("------------------------------------");

// 5 - 
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

console.log("------------------------------------");

// 6 - 

console.log('i', '   i^2', '  i^3');
for (let i = 0; i <= 10; i++) {
    console.log(i, `    ${i ** 2}`, `    ${i ** 3}`);
}

console.log("------------------------------------");

// 7 -

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    continue;
}

console.log("------------------------------------");

// 8-

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    continue;
}

console.log("------------------------------------");

// 9 - 
for (let i = 0; i <= 100; i++) {
    if (i <= 1) {
        continue;
    } else {
        let num = i;
        let isPrime = true;
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(num);
        }
    }
}

console.log("------------------------------------");

// 10 - 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`sum = ${sum}`);

console.log("------------------------------------");

// 11-
let oddSum = 0;
let evenSum = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum += i
    } else {
        oddSum += i
    }
}
console.log(`evenSum = ${evenSum}\noddSum = ${oddSum}`);

console.log("------------------------------------");

// 12 -
let evenSum_2 = 0;
let oddSum_2 = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum_2 += i
    } else {
        oddSum_2 += i
    }
}
console.log([oddSum_2, evenSum_2]);

console.log("------------------------------------");

// 13 -
let arrayRandom = [];
for (let i = 0; i < 5; i++) {
    arrayRandom.push(Math.floor(Math.random() * 100));
}
console.log(arrayRandom);

console.log("------------------------------------");

// 14 -
let arr = [];
while (true) {
    let rndNumber = Math.floor(Math.random() * 10);
    if (arr.length === 0) {
        arr.push(rndNumber);
    } else {
        let times = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === rndNumber) {
                times++;
            }
        }
        if (times < 1) {
            arr.push(rndNumber);
        }
        if (arr.length === 5) {
            break;
        }
    }

}
console.log("unique arr = ", arr);

console.log("------------------------------------");

// 15 -

let alphabetChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let digits = "0123456789";
let completeChars = alphabetChars + alphabetChars.toLowerCase() + digits;

let randomStr = "";
while (true) {
    let randomId = Math.floor(Math.random() * completeChars.length);
    randomStr += completeChars[randomId];
    if (randomStr.length === 6) {
        break;
    }
}
console.log(randomStr);

console.log("------------------------------------");

// Exercise : Level 2

// 1-
let rndId = Math.floor(Math.random() * completeChars.length);
console.log()
let rndStr = "";
while (true) {
    let rId = Math.floor(Math.random() * rndId);
    rndStr += completeChars[rId];
    if (rndStr.length === rndId) {
        break;
    }
}
console.log(rndStr);

console.log("------------------------------------");

//2 -
// document.getElementById('color').addEventListener('click', function (e) {
// })
let hexaStr = 'abcdef' + digits;
let hexadecimalNumber = '#';
for (let i = 0; i < 6; i++) {
    let rd = Math.floor(Math.random() * hexaStr.length);
    hexadecimalNumber += hexaStr[rd];
}
// this.style.backgroundColor = hexadecimalNumber;
// this.innerHTML = hexadecimalNumber;
console.log(hexadecimalNumber);

console.log("------------------------------------");

// 3 -
let rgb = [];
for (let i = 0; i < 3; i++) {
    let rd = Math.floor(Math.random() * 256);
    rgb.push(rd);
}
console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);

console.log("------------------------------------");

// 5 -
let newCountries = [];
while (true) {
    let rdnN = Math.floor(Math.random() * countries.length);
    if (newCountries.length === 0) {
        newCountries.push(countries[rdnN]);
    } else {
        let times = 0;
        for (let i = 0; i < newCountries.length; i++) {
            if (newCountries[i] === countries[i]) {
                times++;
            }
        }
        if (times < 1) {
            newCountries.push(countries[rdnN]);
        }
        if (newCountries.length === countries.length) {
            break;
        }
    }
}

console.log(newCountries);

console.log("------------------------------------");