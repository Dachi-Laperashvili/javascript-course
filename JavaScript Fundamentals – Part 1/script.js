/*

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log(js);
console.log(23);

let firstName = "Bob";
console.log(firstName);
console.log(lastName);

let threeYears = 3;
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 23;
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);

console.log(typeof null);
// lecture 13 : let,const and var assigments

const myCountry = "Georgia";
const continent = "Euroasia";
console.log(myCountry, continent);

const isIsland = false;
let myLanguage;
console.log(typeof isIsland);
console.log(typeof myLanguage);
myLanguage = "Georgian";
// lecture 14: basic operators assigments

let myPopulation = 3;
myPopulation = myPopulation / 2;
myPopulation++;
console.log(myPopulation);

let populationFinland = 6;
console.log(myPopulation > populationFinland);

let average = 33;
console.log(myPopulation < average);

const portugal = 'Portugal';
const continent = 'Europe'
const population = '11 million';
let description = portugal + ' is in ' + continent + ",and it's " + population + ' people speak portuguese';
console.log(description);

//lecture 17: strings and template literals
description = `${portugal} is in ${continent},and it's ${population} people speak portuguese`;
console.log(description);

// lecture 18: if/else conditions

const population = 130;

if (population > 33) {
    console.log(`Georgia's population is ${population - 33} million above average`);
} else {
    console.log(`Georgia's population is ${33 - population} million below average`);
}


// lecture 20: type conversion and coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// lecture 21: falsy and truthy values

//5 falsy values: 0,'',undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Money won't buy you happines");
} else {
    console.log("Get A Job!");
}

// lecture 22 : equality operators assigments

let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders')
}
// lecture 24: logical operators
const country = "Georgia";
const language = "georgian";
const population = 3;
const isIsland = true;

if (language === "english" && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
// lecture 26: switch statements
const language = 'Georgian';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');

}

// lecture 27: expressions and statements

expression is piece of code that produces a value eg:
23 is an expression 
5 + 5 is an expression

statement is piece of code that should be executed and doesn't produce a value on itself
if/else is a statement
switch is a statement
*/
const country = "Georgia";
const population = 3;
// population > 33 ? console.log("Georgia's population is above average") : console.log("Georgia's population is below average");
console.log(`${counry}'s population is ${population > 33 ? 'above' : 'below'} average`);