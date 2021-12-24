// Exercise 1
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// // 1 -
// fetch(countriesAPI)
//     .then(resp => resp.json())
//     .then(json => console.log([json[0].name, json[0].capital, json[0].languages, json[0].population, json[0].area]));

// // 1-1 
// const fetchCountries = async (urlAPI) => {
//     const response = await fetch(urlAPI);
//     const json = await response.json();
//     const country = json[0];
//     console.log(country);
// }
// fetchCountries(countriesAPI);

// 2 -

// fetch(catsAPI)
//     .then(resp => resp.json())
//     .then(json => {
//         json.forEach((cat, index) => {
//             if (index <= 10) {
//                 console.log(cat.name);
//             }
//         })
//     })

// 3

const findAverage = async (url) => {
    const resp = await fetch(url)
    const json = await resp.json();
    return json;
}

const findLargestCountries = () => {
    findAverage(catsAPI)
        .then(json => console.log(json[0].weight))
}

findLargestCountries(catsAPI);

// closures

const makeOperations = () => {
    const result = 10;
    const times = () => {
        return 10 * result;
    }
    return result + times();
}

makeOperations();


const api = (url) => {
    const res = async (url) => {
        return await fetch(url).then(res => res.json())
    }
    res(url).then(json => console.log(json))
}

api(catsAPI);