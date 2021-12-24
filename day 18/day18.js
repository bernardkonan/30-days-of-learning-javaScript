/* LEARN ABOUT PROMISE */
// -> Way to handle asynchronous operations in javascript

// Promise constructor
const skills = ['HTML', 'CSS', 'JS'];

const doPromise = new Promise((res, rej) => {
    setTimeout(() => {
        if (skills.length > 0) {
            res(skills)
        } else if (skills.includes('Node')) {
            res('Fullstack developper');
        } else {
            rej('Something wrong was append !');
        }
    }, 3000)
})

doPromise.then(value => {
    value.forEach(el => {
        console.log(el);
    });
}).catch(err => console.log(err.message));

// Fetch API

doPromise