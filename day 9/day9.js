/* 
    LEARN ABOUT HIGHER ORDER FUNCTIONS

    - they take other functions as a parameter or return a function as a parameter.
    - the function passed as a parameter is called 'callback'
*/

// CALLBACK

const number = n => n**2

const cube = (callback,n)=>{
    return callback(n)*n;
}

console.log(cube(number, 4));

// returning as a value
const numbers = [1,2,3,4,5,6,7,8,9,10];

const sumArray = arr =>{
    let sum = 0;
    const callback = function(element){
        sum += element;
    }
    arr.forEach(callback);
    return sum;
}

// we can simplify sumArray function like this
const sumArray2 = arr =>{
    let sum = 0;
    arr.forEach(el => {
        sum += el;
    });
    return sum;
}

console.log(sumArray(numbers)); // first method
console.log(sumArray2(numbers)); // second method


// Setting time : -> execute some activities in a certain interval of time

// -> setInterval
let times = 0;
setInterval(()=>{
    times++;
    console.log("Hello");
}, 2000); // loggeg hello every 2 seconds

// log a random number of numbers array every 2 seconds

setInterval(()=>{
    let random = Math.floor(Math.random()*numbers.length);
    console.log(numbers[random]);
}, 2000);

// -> setTimeOut
let array = null;
setTimeout(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            array = json;
            console.log(array);
        })
        .catch(err => console.log(err))
}, 2000);

setInterval(() => {
    let randomN = Math.floor(Math.random()*array.length);
    console.log(array[randomN].name);
}, 3000);

// FUNCTIONAL PROGRAMMING

