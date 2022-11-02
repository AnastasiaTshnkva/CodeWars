// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

function narcissistic(value) {
    const arr = value.toString().split('');
    const numArr = arr.map(elem => {
       return Number(elem);
    });
    const multiplication = numArr.reduce((accum, item, ) => {
        return accum + (item ** numArr.length);
    }, 0);
    console.log(arr, numArr, multiplication);
    if (Number(value) === Number(multiplication)) {
        return true;
    } else {
        return false;
    };
};

console.log(narcissistic(153));
