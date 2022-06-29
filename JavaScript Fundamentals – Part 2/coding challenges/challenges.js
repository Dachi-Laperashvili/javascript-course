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