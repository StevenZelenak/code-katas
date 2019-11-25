//http://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str)
{
    let firstLetter;
    let lastLetter;

    str = str.split('');

    firstLetter = str.shift();
    lastLetter = string.pop();

    return str.join('');
}