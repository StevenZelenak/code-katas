// https://www.codewars.com/kata/5bd776533a7e2720c40000e5

// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum
//The Smallest element of the list of integers , must come in center position of array/list.
//The Higher than smallest , goes to the right .
//The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.

function pendulum(values) {
    let array = values.sort(function (a, b) {
        return a - b
    });
    let newArray = [];
    let left = true;
    for (let i = 0; i < array.length; i++) {
        if (left) {
            newArray.unshift(array[i]);
            left = false;
        } else {
            newArray.push(array[i]);
            left = true;
        }
    }
    return newArray;
}

function maxTriSum(numbers) {
    return [...new Set(numbers.sort((a, b) => a - b))].slice(-3).reduce((a, b) => a + b);
}