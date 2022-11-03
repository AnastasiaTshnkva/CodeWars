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
    if (Number(value) === Number(multiplication)) {
        return true;
    } else {
        return false;
    };
};


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//     It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
//     arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {

    const res = a.filter(elem => {
        for (let i = 0; i < b.length; i++) {
            elem !== b[i];
            console.log(b[i]);
        }
    });
    return res;
};
console.log(arrayDiff([0,1,1,2,4], [1, 2] ));

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }