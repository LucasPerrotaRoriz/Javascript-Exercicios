// EXERCISES ARE MADE IN VARIOUS DIFFERENT WAYS
/*
###############################################################
1. Write a JavaScript program to reverse the string 'w3resource'
###############################################################
*/

// 1
/*
const string = 'w3resource';
const splitString = string.split("");
console.log(splitString);
const reverseArray = splitString.reverse();
console.log(reverseArray);
const joinArray = reverseArray.join("");
console.log(joinArray); */

// 2 - Function Expressions
/*
function splitString(str) {
    return str.split("");
}

function reverseString(str) {
    return str.reverse();
}

function joinArray(str) {
    return str.join("");
}

let str = 'w3resource';
str = splitString(str);
console.log(str);

str = reverseString(str);
console.log(str);

str = joinArray(str);
console.log(str); */

// 3 - Arrow Functions
/*
let splitString = str => str.split("");

let reverseArray = (str) => {
    return str.reverse();
}

let joinArray = (str) => (
     str.join("")
);

let str = 'w3resource';
str = splitString(str);
console.log(str);

str = reverseArray(str);
console.log(str);

str = joinArray(str);
console.log(str); */

// 4 - Anonymous Functions
/*
let str = 'w3resource';

splitstr = function(str) { // Anonymous
    return str.split("");
}

reverseArray = function reverseArray(str) { // named
    return str.reverse();
}

joinArray = function joinArr() {
    return str.join("");
}

str = splitstr(str);
console.log(str);

str = reverseArray(str);
console.log(str);

str = joinArray(str);
console.log(str); */

// 5 - Arrays - For
/*
function splitReverseJoin(strArr) {
    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].split("").reverse().join("");
        console.log(strArr[i]);
    }
}

function splitReverseJoin2(strArr) {
    for(let str of strArr) {
        console.log(str.split("").reverse().join(""));
    }
}

let strArr = ['Javascript', 'Functions', 'W3resource', 'Arrays'];
splitReverseJoin2(strArr); */

/*
###############################################################
2. Write a JavaScript program to determine whether a given year is a
leap year in the Gregorian calendar.
###############################################################
*/

// 1
/*
const year = 1988;
let isLeapYear =  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
console.log(`is ${year} a leap year: ${isLeapYear ? `(Yes)` : '(No)'}`);
*/

// 2 - Function Expressions
/*
function leapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
const year = 1988;
const isLeapYear = leapYear(year);
console.log(`is ${year} a leap year: ${isLeapYear ? `(Yes)` : '(No)'}`); */

// 3 - Arrow Functions
/*
const leapYear = (year) => {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

const leapYear2 = () => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);

const year = 2015;
const isLeapYear = leapYear(year);
console.log(`is ${year} a leap year: ${isLeapYear ? `(Yes)` : '(No)'}`);
*/

// 4 - Anonymous function
/*
const leapYear = function(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

const year = 1988;
isLeapYear = leapYear(year);
console.log(`is ${year} a leap year: ${isLeapYear ? `(Yes)` : '(No)'}`);
*/

// 5 - Higher order function
/*
function repeatYearNTimes(action, year) {
    for(let i = 0; i < 123; i++) {
        let leapYear = action(year);
        console.log(`is ${year} a leap year: ${leapYear ? `(Yes)` : '(No)'}`);
        year++;
    }
}

function isLeapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

repeatYearNTimes(isLeapYear, 1900);
*/

/*
###############################################################
3. Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess
number, the program will display a message "Good Work" otherwise display a message "Not matched"
###############################################################
*/

/*
function randomNumber() {
    const random = Math.floor(Math.random() * 10) + 1;
    return random;
}

let random = randomNumber();
let num = prompt("Guess the number: ");
while(Number(num) !== random) {
    console.log("Not matched");
    num = prompt("Guess the number: ");
}
console.log("Good Work"); */

/*
###############################################################
 4. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit
###############################################################
*/

// 1
/*
let fahrenheit = 140;
let celsius = (5 / 9) * (fahrenheit - 32);
console.log(`Fahrenheit: ${fahrenheit}
Celsius: ${celsius}`);

celsius = 32;
fahrenheit = (celsius * 9 / 5 + 32);
console.log(`Fahrenheit: ${fahrenheit}
Celsius: ${celsius}`); */

// 2 - Function Expression
/*
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5 + 32);
}

function fahrenheitToCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}

let celsius = 40;
console.log("Celsius: " + celsius + " Fahrenheit: " + celsiusToFahrenheit(celsius));

let fahrenheit = 120;
console.log("Fahrenheit: " + fahrenheit + " Celsius: " + fahrenheitToCelsius(fahrenheit)); */

// 3 - Arrow Function
/*
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5 + 32);
}

const fahrenheitToCelsius = (fahrenheit) => {
    return (5/9) * (fahrenheit - 32);
}

const fahrenheit = celsiusToFahrenheit(50);
console.log(`Fahrenheit: ${fahrenheit}`);

const celsius = fahrenheitToCelsius(150);
console.log(`Celsius: ${celsius}`); */

// 4 - Anonymous function
/*
const fahrenheit = function(celsius) {
    return (celsius * 9 / 5 + 32);
}

const celsius = function fahrenheitToCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}

const fahrenheit2 = fahrenheit(32);
const celsius2 = celsius(140);
console.log(`Celsius: ${celsius2}
Fahrenheit: ${fahrenheit2}`); */

// 5 - Array
/*
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5 + 32);
}

function fahrenheitToCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}

const celsiusArray = [20, 25, 28, 32, 40];
const fahrenheitArray = [80, 95, 112, 120, 145];

for(let i = 0; i < celsiusArray.length; i++) {
    console.log(`Fahrenheit: ${celsiusArray[i]}\n`);
    console.log(`Celsius: ${fahrenheitArray[i]}\n`);
} */







