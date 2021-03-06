'use strict'

/*
// Coding challenge #1

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

// Coding challenge #2

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

console.log(bills, tips, total);

// Coding challenge #3

// Marks stats
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

// Johns stats
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}
*/

// Coding challenge #4

// Created array for bills,tips and totals

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

// Function to calculate tip based on bill value

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Looping through each bill to return and push tips and totals based on it

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

// Bonus addition to calculate average value of arrays

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        return sum += arr[i];
    }
    console.log(sum / arr.length);
};
console.log(calcAverage(totals));