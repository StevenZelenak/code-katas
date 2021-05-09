//https://www.codewars.com/kata/5aa1bcda373c2eb596000112

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

function maxTriSum(numbers) {
    return Array.from(new Set(numbers.sort((a, b) => a - b))).slice(-3).reduce((acc, val) => acc + val);
}

function maxTriSum(numbers) {
    return [...new Set(numbers.sort((a, b) => a - b))].slice(-3).reduce((a, b) => a + b);
}