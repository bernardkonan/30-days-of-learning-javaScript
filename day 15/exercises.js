// Exercises session

// Exercise : Level 1 & 2

// 1 - 
class Animal {
    constructor(name, color, age, legs = 4) {
        [this.name, this.color, this.age, this.legs] = [name, color, age, legs];
    }
    runAnimal() {
        return `${this.name} is running`;
    }
    getFullInfo() {
        const infos = [this.name, this.color, this.age, this.legs];
        return infos.join(' - ');
    }
    get getAge() {
        return this.age;
    }
}

// 2 - 
class DogChild extends Animal {
    constructor(name, color, age, legs = 4) {
        super(name, color, age, legs);
    }
    shout() {
        return 'Woooh wooooh Woooh';
    }
}

class Cat extends DogChild {
    constructor(name, color, age, legs) {
        super(name, color, age, legs)
    }
    shout(bruise) {
        return `${this.name} is starting to shout ${bruise}`
    }
}

// Exercise : level 3

//1- 
const ages = [
    30, 20, 29, 23, 25, 29, 33, 36,
    30, 38, 29, 28, 27, 30, 37,
    25, 35, 31, 20, 30, 21, 33, 23,
    36
];

class Statistics {
    constructor(data) {
        this.data = data;
    }
    count() {
        return this.data.length;
    }
    sum() {
        return this.data.reduce((total, currentValue) => {
            return total + currentValue;
        }, 0)
    }
    min() {
        const sortedData = this.data.sort((a, b) => a - b);
        return sortedData[0];
    }
    max() {
        const sortedData = this.data.sort((a, b) => b - a);
        return sortedData[0];
    }
    median() {
        const sortedData = this.data.sort((a, b) => a - b);
        const length = sortedData.length;
        if (length % 2 === 0) {
            return (sortedData[length / 2 - 1] + sortedData[length / 2]) / 2;
        }
        return sortedData[Math.floor(length / 2)];
    }
    mean() {
        return this.sum() / this.count();
    }
    variance() {
        const squareData = this.data.map(d => Math.pow(d - this.mean(), 2));
        const squareReduced = squareData.reduce((total, currentValue) => {
            return total + currentValue;
        }, 0)
        return squareReduced / squareData.length;
    }
    resume() {
        console.log(`Count : ${this.count()}`);
        console.log(`Sum : ${this.sum()}`);
        console.log(`Min : ${this.min()}`);
        console.log(`Max : ${this.max()}`);
        console.log(`Mean : ${this.mean()}`);
        console.log(`Median : ${this.median()}`);
        console.log(`Variance : ${this.variance()}`);
    }
}

const st = new Statistics(ages);
st.resume();

// 2 - 