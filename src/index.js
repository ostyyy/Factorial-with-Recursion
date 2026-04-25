'use strict';

function getFactorial(num) {
    if (!Number.isFinite(num) || !Number.isInteger(num) || num < 0) {
        return null;
    }

    if (num === 0 || num === 1) return 1;

    return num * getFactorial(num - 1);
}
const result = getFactorial(4);

if (!result) {
    console.log('invalid input!');
} else {
    console.log(result);
}
