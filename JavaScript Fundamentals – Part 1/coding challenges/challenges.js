/*
// Coding Challenge #1

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let marksBMI = massMark / heightMark ** 2;
let johnsBMI = massJohn / heightJohn ** 2;

const markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI);
console.log(johnsBMI);
console.log(markHigherBMI);

// Coding Challenge #1 Version 2

massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

console.log(marksBMI);
console.log(johnsBMI);
console.log(markHigherBMI);

// Coding Challenge #2

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI ${(marksBMI)} is higher than John's ${(johnsBMI)}!`)
} else {
    console.log(`John's BMI ${johnsBMI} is higher than Mark's ${(marksBMI)}!`)
}

// Coding Challenge #3

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins won the trophy!");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas won the trophy!");
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both teams won!!");
}

// Bonus 1
const scoreDolphins = (97 + 112 + 101);
const scoreKoalas = (109 + 95 + 123);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins won the trophy!");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas won the trophy!");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both teams won!!");
}
// Bonus 2
const scoreDolphins = (97 + 112 + 101);
const scoreKoalas = (109 + 95 + 106);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins won the trophy!");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas won the trophy!");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both teams won!!");
} else {
    console.log("No one won");
}
*/

// Coding Challenge #4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill},the tip was ${tip},and the total value ${bill + tip}`);
