/*Use Array Methods: filter, map, reduce, etc to implement functions below:*/
/* 1. Create a function using function declaration named sum with one parameter of Array type, the returned result is the sum of all elements which are greater than 20.*/

function sum(elements) {
    return elements.filter(function(number, index, array) {
        return number > 20;
    }).reduce(function(accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue;
    })
}

r = sum([20, 30, 40])
console.log(r)


/* 2. Create a function using function expression named getNewArray with one parameter of String Array, return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’. */

const getNewArray = function(arr) {
    return arr.filter(function(value, index, array) {
        return value.length >= 5 && value.includes('a');
    })
}

console.log(getNewArray(['test', 'Homework', 'abs','city', 'serializable']))