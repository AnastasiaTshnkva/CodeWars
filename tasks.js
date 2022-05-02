//Create a function that takes an integer as an argument and returns "Even"
// for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
    if (number % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    };
};

//Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
    const arr = x.split(' ').join('');
    return arr;
};

//Complete the solution so that it reverses the string passed into it.
function solution(str){
    return str.split('').reverse().join('');
};

//Write a program that finds the summation of every number from 1 to num.
//The number will always be a positive integer greater than 0.
var summation = function (num) {
    let sum = 0;
    for (i = 0; i <= num; i++) {
        sum += + i;
    };
    return  sum;
};

//Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
    let result =  weight / (height ** 2);
    if (result <= 18.5) {
        return 'Underweight';
    } else if (result <= 25) {
        return 'Normal';
    } else if (result <= 30) {
        return 'Overweight';
    } else if (result > 30) {
        return 'Obese';
    };
};

// In this simple exercise, you will create a program that will take two lists of
// integers, a and b. Each list will consist of 3 positive integers above 0, representing
// the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless
// of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume
// of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.
function findDifference(a, b) {
    return Math.abs(a.reduce((acc, elem) => {return acc = acc * elem}) - b.reduce((acc, elem) => {return acc = acc * elem}));
};

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
const quarterOf = (month) => {
    if (month <=3) {
        return 1;
    } else if (month <= 6) {
        return 2;
    } else if (month <= 9) {
        return 3;
    } else if (month <= 12) {
        return 4;
    };
};


//palindrome
function isPalindrome(line) {
    const str = line.toString().split('').reverse().join('');
    return (line.toString() === str) ? true : false;
};

//n NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game,
// subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played
// the full 48 minutes.
// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns
// a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0
function pointsPer48(ppg, mpg) {
    if (ppg === 0 || mpg === 0) {
        return 0;
    } else {
        return Number(((ppg / mpg) * 48).toFixed(1));
    };
};

