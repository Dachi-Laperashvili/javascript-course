'use strict'

// coding challenge #1

// function to calculate average of three given scores
const calcAverage = (a, b, c) => a + b + c / 3;

// average scores of each team
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

// function to check winner by comparing averages
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins Won! (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas Won! (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No One Won... (${avgDolphins} vs. ${avgKoalas})`);
    }
};
console.log(checkWinner(scoreDolphins, scoreKoalas));

// coding challenge #2

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(calcTip(100));

let bills = [125, 555, 44];
let tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);