'use strict';

function factorial(num) {
    if (!Number.isFinite(num) || !Number.isInteger(num) || num < 0) {
        return null;
    }

    if (num === 0 || num === 1) return 1;

    return num * factorial(num - 1);
}
const result = factorial(4);

if (!result) {
    console.log('invalid input!');
} else {
    console.log(result);
}
