'use strict';
/*
// lecture 33: functions

// define function
function logger() {
    console.log('My name is Dachi');
}

// running function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 2));

function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}
console.log(describeCountry('Finland', 6, 'Helsinki'));
console.log(describeCountry('Georgia', 3, 'Tbilisi'));
console.log(describeCountry('Japan', 125, 'Tokyo'));

// lecture function declarations and expressions

// this is a function declaration

function calcAge(birthyear) {
    return 2022 - birthyear;
}
// this is a function expression
const ageCalc = function (birthyear) {
    return 2022 - birthyear;
}
console.log(ageCalc(1990));

// lecture assigments
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percGeorgia = percentageOfWorld1(3);
const percFinland = percentageOfWorld1(6);
const percJapan = percentageOfWorld1(125);

console.log(percGeorgia, percFinland, percJapan);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percGeorgia2 = percentageOfWorld2(3);
const percFinland2 = percentageOfWorld2(6);
const percJapan2 = percentageOfWorld2(125);

console.log(percGeorgia2, percFinland2, percJapan2);

// arrow functions assigments

const percentageOfWorld3 = population => (population / 7900) * 100;

const percGeorgia3 = percentageOfWorld3(3);
const percFinland3 = percentageOfWorld3(6);
const percJapan3 = percentageOfWorld3(125);

console.log(percGeorgia3, percFinland3, percJapan3);

function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// functions inside functions assigments
const percentageOfWorld3 = population => (population / 7900) * 100;

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld3(population);
    return `${country} has ${population} million people,which is ${percentage} of the world`;
}
console.log(describePopulation('China', 1441));
console.log(describePopulation('Georgia', 3));
console.log(describePopulation('Japan', 125));

// reviewed functions
function calcAge(birthYear) {
    return 2022 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has alerdy retired`);
        return -1;
    }

}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Dachi'));

// introduction to arrays

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const population = [125, 1000, 15, 200];

console.log(population.length === 4);

const percentages = [
    percentageOfWorld1(population[0]),
    percentageOfWorld1(population[1]),
    percentageOfWorld1(population[2]),
    percentageOfWorld1(population[3])
]
console.log(percentages);

// Array operations

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // Adds last element
console.log(friends);
console.log(newLength);

friends.unshift('John'); // Adds first element
console.log(friends);

// Remove elements
friends.pop(); // Removes last element
const popped = friends.pop();

console.log(popped);
friends.shift(); // Removes first element

console.log(friends.indexOf('Steven'));
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Bob')) {
    console.log('You have a friend called Bob');
}

// Array operators assigments
const neighbours = ['Russia', 'Azerbaijan', 'Armenia'];

// Added Utopia at the end of array
neighbours.push('Utopia');
console.log(neighbours);

// Removed Utopia from the end of array
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Russia')] = 'Republic of Russia';
console.log(neighbours);

// Introduction to Objects

const myCountry = {
    country: 'Georgia',
    capital: 'Tbilisi',
    language: 'Georgian',
    population: 3,
    neighbours: ['Russia', 'Azerbaijan', 'Armenia', 'Turkey']
}

// Dot vs Break notation

// Jonas has 3 friends,and his best friend is called michael

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(`${jonas.firstName} has ${jonas.friends.length} friends,and his best friend is called ${jonas.friends[0]}`);

// Assigment
const myCountry = {
    country: 'Georgia',
    capital: 'Tbilisi',
    language: 'Georgian',
    population: 3,
    neighbours: ['Russia', 'Azerbaijan', 'Armenia', 'Turkey']
}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry['population']);

*/

// Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
}
console.log(jonas.getSummary());

// Assigment
const myCountry = {
    country: 'Georgia',
    capital: 'Tbilisi',
    language: 'Georgian',
    population: 3,
    neighbours: ['Russia', 'Azerbaijan', 'Armenia', 'Turkey'],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
}
console.log(myCountry.describe());
console.log(myCountry.checkIsland());