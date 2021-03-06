/*
#############################################
https://justacoding.blog/javascript-exercises-for-beginners-part-1-strings/
#############################################
*/
/*
1. Reverse that string
This one is a classic. Simply reverse the string "I'm am a string" without using reverse().

function reverseString(string) {
    let reverse = "";
    for(let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
}

console.log(reverseString("I am a string"));
*/

/*
2. Is it a palindrome?
Another classic. You can apply your previous solution to help with this one.

Does the given string spell out the same word when written out backwards? For example kayak.


const isPalindrome = (string) => {
    const len = string.length;

    for(let i = 0; i < len / 2; i++) {
        if(string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(isPalindrome("mom"));
console.log(isPalindrome("osso"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("apple"));
*/

/*
3. Remove specific characters from a string

let s = "I am an example string";
console.log(s.replaceAll("a", "x"));
*/

/*
4. Find the most common character within the string
Given any string, find the most commonly occurring character.

If there are 2 or more most commonly occurring characters; return the character which comes first
alphabetically.

For instance:

xybbbefaaag

Would return a, as a and b both occur 3 times each, respectively, but a comes before b alphabetically.


let string = "abcddefg";
let string2 = "heggbdeff";

const mostCommonCharacter = (string) => {
    const results = string.split('').reduce((tally, val) => {
        if (tally[val]) {
          tally[val]++;
        } else {
          tally[val] = 1;
        }
        return tally;
      }, {});
      console.log(results);
}

console.log(mostCommonCharacter(string));
console.log(mostCommonCharacter(string2));
*/

/*
5. Find the repeating characters
Return an array containing all repeating characters that occur in the provided string.

Your function should accept a second parameter that defines how many times the target
character should repeat before it is returned.
*/

/*
6. Is the nth letter a vowel or a consonant?
Determine whether the letter at the supplied index in the provided string is either a vowel or
a consonant.
*/

/*
7. Sort the string alphabetically
Return the supplied string in alphabetical order. Your function must be able to sort the string in
either direction; so either ascending or descending alphabetical order.
*/

/*
8. Is the string in alphabetic order?
Similarly, what???s the most efficient way to check if a string is in alphabetic order?
Your function must be able to verify reverse-alphabetic order, also.
*/

/*
9. Capitalize the first letter of each word
Write a function to capitalize the first letter of each word in the provided string.
*/

/*
10. Search for a string within a string
Does the target string contain the provided string? No use of indexOf() or similar functions is allowed.
*/

/*
11. Shuffle the string
Write a function to completely randomize a given string. The string should be scrambled entirely,
in a random a manner as possible.
*/

/*
12. Alternating caps
Return the supplied string, but every other letter should be capitalized.
*/

/*
13. Quote extractor
Given a quote in a format like this:

???[QUOTE]??? ??? [author]

Return an array containing both the quote text and the author. Both components (quote, author)
could also contain hyphens (-).
*/

/*
14. Verify the email address
In this JavaScript exercise, write a function to determine whether an email address is valid or not.
*/

/*
15
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
*/

/*
16
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
*/

/*
17
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
*/

/*
18
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
*/

/*
19
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
*/

/*
20
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
*/

/*
21
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
*/

/*
22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
*/

/*
23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
*/