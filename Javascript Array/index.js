/*
###################################################
https://www.jschallenger.com/javascript-arrays
##################################################
*/

/*
1
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

function nthElement(array, idx) {
   let element = array[idx];
   console.log(element);
}

let array = [1,2,3,4,5];
nthElement(array, 2);
*/

/*
2
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

function firstThreeElements(array) {
   for(let i = 0; i < 3; i++) {
      console.log(array[i]);
   }
}

let array = [12,5,7,91,57,58,34,22];
firstThreeElements(array);
*/

/*
3
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

function lastThreeElements() {
   for(let i = array.length - 3; i <= array.length; i++) {
      console.log(array[i]);
   }
}

let array = [12,5,7,91,57,58,34,22];
lastThreeElements(array);
*/

/*
4
// Write a function that takes an array (a) as argument
// Extract the first n elements of a
// Return the resulting array

function firstNElements(array, idx) {
   for(let i = 0; i < idx; i++) {
      console.log(array[i]);
   }
}

let array = [12,5,7,91,57,58,34,22];
let idx = prompt("Show how many elements: ");
if(idx > array.length) {
   window.alert("Index bigger than array");
} else {
   firstNElements(array, idx);
}

*/

/*
5
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

function lastNElements(array, idx) {
   for(let i = array.length - idx; i <= array.length; i++) {
      console.log(array[i]);
   }
}

let array = [12,5,7,91,57,58,34,22];
let idx = prompt("Show how many elements: ");
if(idx > array.length) {
   window.alert("Index bigger than array");
} else {
   lastNElements(array, idx);
}
*/

/*
6
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

function removeElements(array, r) {
   let i = 0;
   while(i < array.length) {
      if(array[i] === r) {
         array.splice(i, 1);
      } else {
         i++
      }
   }
   return array;
}

let array = [1, 1, 5, 5, 7, 8, 5, 4, 4, 10, 12, 9, 8, 8, 7];
//let r = prompt('Qual número remover: ');
let r = 5;
console.log(removeElements(array, r));
*/

/*
7
// Write a function that takes an array (a) as argument
// Return the number of elements in a

function length(array) {
   let l = array.length;
   return l;
}

let array = [1,2,3,4,5,7,7,8,3,2];
console.log(length(array));
*/

/*
8
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const negative = (array) => {
   let count = 0;
   for(let i = 0; i < array.length; i++) {
      if(array[i] < 0) {
         count++;
      }
   }
   return count;
}

let array = [-1, -5, 0, 0, 7, 12, -10, -4, 8, -2];
console.log(negative(array));
*/


/*
9
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

function sortedNumber(array) {
   array.sort((a, b) => a - b);
   return array;
}

let array = [5,7,2,4,9,10,12,3,1];
console.log(sortedNumber(array));
*/

/*
10
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const sortedStrings = (array) => {
   return array.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
   })
}

let array = ['hello', 'Hi', 'Bola', 'World', 'osso'];
console.log(sortedStrings(array));
*/

/*
11
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const avg = (array) => {
   let soma = 0;
   for(let value of array) {
      soma += value;
   }
   return soma / array.length;
}

let array = [1,3,6,8,4,5,9,10];
console.log(avg(array));
*/


/*
12
// Write a function that takes an array of strings as argument
// Return the longest string

function bigString(array) {
   let len = array.map(function(word) {
      return word.length;
   });

   let maior = len[0];
   let maiorIdx = 0;

   for(let i = 0; i < len.length; i++) {
      if(len[i] > maior) {
         maior = len[i];
         maiorIdx = i;
      }
   }
   console.log(array);
   console.log(len);
   return array[maiorIdx];
}

let array = ['bola', 'abelha', 'arma', 'Basketball', 'Armario'];
console.log(bigString(array));
*/


/*
13
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function isEqual(array) {
   for(let i = 0; i< array.length - 1; i++) {
      if(array[i] !== array[i+1]) {
         return false;
      }
   }
   return true;
}

const isEqual2 = (array) => {
   const base = array[0];
   return array.every(element => element === base);
}

let array = [1,1,1,1,1];
let array2 = [1,2,3,4,5];
console.log(isEqual(array));
console.log(isEqual(array2));

console.log(isEqual2(array));
console.log(isEqual2(array2));
*/


/*
14
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function mergeArray(...arrays) {
   let mergedArray = [];
   return mergedArray.concat(...arrays);
}

let array1 = [1,2,5,8,3];
let array2 = [-1, 0, -3, 5];
let array3 = [12, 32];
console.log(mergeArray(...array1, ...array2, ...array3));
*/


/*
15
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

function sortPropertyB(array) {
   array.sort((a, b) => (a.v2 > b.v2) ? 1 : ((b.v2 > a.v2) ? -1 : 0));
   return array;
}

function sortPropertyB2(array) {
   array.sort((a,b) => a.v2 - b.v2);
   return array;
}

function sortPropertyB3(array) {
   array.sort(compare);
   return array;
}

function compare(a, b) {
   if(a.v2 > b.v2) {
      return 1;
   } else if (b.v2 > a.v2) {
      return -1;
   } else {
      return 0;
   }
}

let array = [{v1: 1, v2: 3}, {v1: 5, v2: 7}, {v1:6, v2: 1}];
console.log(sortPropertyB(array));
*/

/*
16
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function mergeRemoveDuplicates(array, array2) {
   let arr = [...new Set(array)];
   let arr2 = [...new Set(array2)];
   arr.concat(arr2);
   return sortedNumber(arr);
}

function sortedNumber(array) {
   array.sort((a, b) => a - b);
   return array;
}

const mergeRemoveDuplicates2 = (array, array2) => {
   array.concat(array2);
   let mergedArray = [...new Set(array)];
   return sortedNumber(mergedArray);
}

let array = [1, 7, 3, 3, 5, 5, 10, 9, 6];
let array2 = [6, 12, 15, 1, 3];
console.log(mergeRemoveDuplicates(array, array2));
*/

/*
17
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

function sumGreaterThan(array, v) {
   let soma = 0;
   for(let value of array) {
      if(value > v) {
         soma += value;
      }
   }
   return soma;
}

let array = [2,5,6,3,9,10,7,4,15,18,20];
let v = 9;
console.log(sumGreaterThan(array, v));
*/

/*
18
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max


const minMaxRange = (min, max) => {
   for(let i = min; i <= max; i++) {
      console.log(i);
   }
}

let min = 4;
let max = 9;
minMaxRange(4, 9);
*/

/*
19
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const groupIt = (array) => {
   let resultObj = {};

   for(let i = 0; i < array.length; i++) {
      let currentWord = array[i];
      let firstChar = currentWord[0].toLowerCase();
      let innerArr = [];
      if(resultObj[firstChar] === undefined) {
         innerArr.push(currentWord);
         resultObj[firstChar] = innerArr;
      } else {
         resultObj[firstChar].push(currentWord);
      }
   }
   return resultObj;
}

let array = ['Alf', 'Alice', 'Ben'];
console.log(groupIt(array));
*/

/*
20
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

function addElement(array, value) {
   if(value > 6) {
      array.unshift(value);
   } else {
      array.unshift(0);
   }
   return array;
}

let array = [2,5,4];
let value = 7;
console.log(addElement(array, value));
*/

/*
21
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

function printEveryNthValue(array, value) {
   let cont = value - 1;
   while(cont < array.length) {
      console.log(array[cont]);
      cont += value;
   }
}

let array = [1,3,4,-7,-2,8,10,0,-1,5];
let value = 3;
printEveryNthValue(array,value);
*/

/* ------------------------------------------------------------------------------------------- */
/*
###################################################
https://www.rithmschool.com/courses/javascript/javascript-arrays-exercise
##################################################
*/
let people = ["Greg", "Mary", "Devon", "James"];

//Using a loop, iterate through this array and console.log all of the people.
/*
for(let i = 0; i < people.length; i++) {
   console.log(people[i]);
}
*/

//Write the command to remove "Greg" from the array.
/*
people.shift();
console.log(people);
*/

//Write the command to remove "James" from the array.
/*
people.pop();
console.log(people);
*/

//Write the command to add "Matt" to the front of the array.
/*
people.unshift('Matt');
console.log(people);
*/

//Write the command to add your name to the end of the array.
/*
people.push('Arthur');
console.log(people);
*/

//Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
/*
for(let value of people) {
   if(value == 'Mary') {
      break;
   } else {
      console.log(value);
   }
}*/

//Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
/*
let people2 = people.slice(2);
console.log(people2);
*/

//Write the command that gives the indexOf where "Mary" is located.
/*
console.log(people.indexOf('Mary'));
*/

//Write the command that gives the indexOf where "Foo" is located (this should return -1).
/*
console.log(people.indexOf('Foo'));
*/
//Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
/*
let people2 = ['Matt', 'Marry', 'Devon', 'Arthur'];
people2.splice(2, 1, 'Elisabeth', 'Artie');
console.log(people2);
*/

//Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
/*
let withBob = people.concat('Bob');
console.log(withBob);
*/

/* ------------------------------------------------------------------------------------------- */
/*
###################################################
https://justacoding.blog/javascript-exercises-for-beginners-part-2-arrays/
##################################################
*/

/*
1. Shuffle the array
Imagine the supplied array is like a pack of cards. Write a function to shuffle this array in to a
completely new and entirely random order, much like shuffling a pack of cards.
*/

/*
2. Evenly mix two arrays
Write a function that receives two arrays, then mix the two arrays evenly –starting with the first
item of the first array. The returned array should alternate between each array in turn, one element
at a time. So the sequence would look like:

Array 1 first element, Array 2 first element, Array 1 second element, Array 2 second element… and so
on.

The elements that make up the arrays are completely random, and the arrays can be of differing
lengths.
 */

/*
3. Order the arrays by sum, ascending or descending
Given an array of arrays (ie. a multidimensional array), each containing only numeric values,
order these arrays by the sum of the elements within.
*/


/*
4. Find the odd one out
Find the odd one out in the provided array. All array elements are equal, except one.
Your function must return this odd one out.
*/

/*
5. Find the smallest and largest numbers
Deduce the smallest and the largest number from the supplied numeric array.
Return an array containing these numbers, smallest number first.
*/

/*
6. Split the numeric array by odd/even
Write a function to separate a single array in to two separate arrays.
The supplied array will only contain numeric values. Your function should output two arrays:
one containing odd numbers, the other containing even numbers.

The returned arrays should be ordered appropriately, with distinct values only (no duplicates).
The even array should be returned first.
*/

/*
7. Return only unique values
In this JavaScript array exercise, the supplied array may contain duplicate values. Write a function to return only unique values —
values that only occur exactly one time within the provided array.
*/

/*
8. Spell out the alphabet
The supplied array is a multidimensional array composed entirely of letters, broken down into sets
of 3. The letters within each set of 3 are in random order; and the overall array pieces are in
random order, also.

The array is composed in such a way that it can be sorted in to an alphabetic order. Your function
should reorder all of these pieces to accomplish this.
*/

/*
9. Find the common words
Your function must accept 2 arrays, then return the common words from each. So, a new array
containing the words which occur at least once in each of the supplied arrays must be returned back.

Words that are most common throughout both of the arrays should be returned first.
*/

/*
10. Does the array contain all of the elements?
Write a function to accept two arrays. Does the first array contain all elements represented in the
second array?
*/

/*
11. Shift all numeric values to the beginning
   ~~~~~~ ~ ~ =´´~~~~~~~~~~~~~~~~~~~~~=´~The supplied array will contain both numeric and non-numeric characters.

Return a new array where all numeric values are positioned at the beginning of the array, in ascending order.
The non-numeric values must come after these, also ordered appropriately.
*/

/*
12. Move the element
Given an array and two indexes, move the relevant element within the array to its new position.
*/

/*
13. Build a new array by indexes
From the first array, construct a new array based on the indexes supplied.
*/