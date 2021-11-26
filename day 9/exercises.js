const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: 0 },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: 0 },
];

/* Exercise : Level 1 */

// 2 -

const logCountry = (country) => console.log(country);
countries.forEach(logCountry);

const logNames = (name, index) => `${index}- ${name}`;
const modifyNames = names.map(logNames);
console.log(modifyNames);

const filterProduct = (product) => product.price >= 6;
const filterProducts = products.filter(filterProduct);
console.log(filterProducts);

const sum = (acc, curr) => {
  return acc + curr;
};
const sumNumbers = numbers.reduce(sum, 0);
console.log(`sum = ${sumNumbers}`);

// 3 -
countries.forEach((country) => console.log(country));

// 4 -
names.forEach((name) => console.log(name));

// 5 -
numbers.forEach((number) => console.log(number));

// 6 -
const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

// 7 -
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

// 8 -
const squareNumbers = numbers.map((number) => number * number);
console.log(squareNumbers);

// 9 -
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

// 10 -
const productsPrices = products.map((product) => product.price + "");
console.log(productsPrices);

// 11 -
const countriesContainingLand = countries.filter((country) =>
  country.toLowerCase().includes("land")
);
console.log(countriesContainingLand);

// 12 -
const countriesHaveSixChar = countries.filter((country) => {
  return country.length === 6;
});

console.log(countriesHaveSixChar);

// 13 -
const countriesHaveSixCharAndMore = countries.filter((country) => {
  return country.length >= 6;
});
console.log(countriesHaveSixCharAndMore);

// 14 -
const countriesStartWithE = countries.filter((country) => {
  return country.toLowerCase().startsWith("E");
});
console.log(countriesStartWithE);

// 15 -
const productsHavePriceGreaterThanO = products.filter((product) => {
  return product.price > 0;
});
console.log(productsHavePriceGreaterThanO);

// 16 -
const getStringLists = function (arr) {
  return arr.filter((item) => typeof item === "string");
};
const arr = [15, "Hello", 48, "It's me"];
console.log(getStringLists(arr));

// 17 -
const sumN = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(`sum of numbers value : ${sumN}`);

// 18 -
const phrase = countries.reduce((acc, curr, index) => {
  if (index === countries.length - 1) {
    return acc + " and " + curr + " are north European countries.";
  }
  return acc + curr + ",";
}, "");
console.log(phrase);

// 20 -
const isGreaterThanSeven = names.some((name) => {
  return name.length >= 7;
});
console.log(isGreaterThanSeven);

// 21 -
const isContaingLand = countries.every((country) => {
  return country.toLowerCase().includes("land");
});
console.log(isContaingLand);

// 23 -
const firstContryContainingSixLetters = countries.find(
  (country) => country.length === 6
);
console.log(firstContryContainingSixLetters);

// 24 -
const indexOfContryContainingSixLetters = countries.find(
  (country) => country.length === 6
);
console.log(indexOfContryContainingSixLetters);

// Exercises: Level 2

// 1 -

const totalPrice = products
  .filter((product) => {
    return typeof product.price == "number";
  })
  .reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

console.log(totalPrice);

// 2 -
const productsPrice = products.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

console.log(productsPrice);

// 3 -
const categorizeCountries = function (arr, pattern) {
  return arr.filter((item) => {
    return item.toLowerCase().includes(pattern);
  });
};

console.log(categorizeCountries(countries, "ia"));

// 5 -

const getFirstTenCountries = countries.filter((country, index) => {
  if (index < 10) {
    return country;
  }
});

console.log(getFirstTenCountries);

// 6 -
const languages = [
  { country: "English", count: 91 },
  { country: "French", count: 45 },
  { country: "Arabic", count: 25 },
  { country: "Portuguese", count: 9 },
  { country: "Spanish", count: 24 },
  { country: "Dutch", count: 8 },
  { country: "Russian", count: 9 },
  { country: "Chinese", count: 5 },
  { country: "German", count: 7 },
  { country: "Swahili", count: 4 },
];

const mostNumberSpoken = (lang, times) => {
  if (!(times > lang.length)) {
    return lang
      .sort((a, b) => {
        return b.count - a.count;
      })
      .slice(0, times);
  }
  return -1;
};

console.log(mostNumberSpoken(languages, 4));

// 7 -
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const Statistics = {
  count: function (arr) {
    return arr.length;
  },
  sum: function (arr) {
    return arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  },
  min: function (arr) {
    return Math.min(...arr);
  },
  max: function (arr) {
    return Math.max(...arr);
  },
  mean: function (arr) {
    return this.sum(arr) / this.count(arr);
  },
};
