/*
#############################################
https://justacoding.blog/javascript-exercises-for-beginners-part-1-strings/
#############################################
*/
/*
1. Reverse that string
This one is a classic. Simply reverse the string without using reverse().
*/

/*
2. Is it a palindrome?
Another classic. You can apply your previous solution to help with this one.

Does the given string spell out the same word when written out backwards? For example kayak.
*/

/*
3. Remove specific characters from a string
What’s the most efficient way to strip specific characters from a string? Without using replace().

Your function must strip multiple different characters from the provided string.
*/

/*
4. Find the most common character within the string
Given any string, find the most commonly occurring character.

If there are 2 or more most commonly occurring characters; return the character which comes first
alphabetically.

For instance:

xybbbefaaag

Would return a, as a and b both occur 3 times each, respectively, but a comes before b alphabetically.
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
Similarly, what’s the most efficient way to check if a string is in alphabetic order?
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

“[QUOTE]” – [author]

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

/* ------------------------------------------------------------------------------------------- */
/*
Exercise-1 with Solution
Write a JavaScript function that reverse a number.
Sample Data and output:
Example x = 32243;
Expected Output : 34223
*/

/*
Exercise-2 with Solution
Write a JavaScript function that returns a passed string with letters in
alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Note: Assume punctuation and numbers symbols are not included in the passed
string..
*/

/*
Exercise-3 with Solution
Write a JavaScript function that accepts a string as a parameter and counts the
number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do
not count 'y' as vowel here.
Sample Data and output:
Example string : 'The quick brown fox'
Expected Output : 5
*/

/*
Exercise-4 with Solution
Write a JavaScript function to remove specified number of characters from a
string.
Test Data :
document.write(truncate_string("Robin Singh",4));
"Robi"
*/

/*
Exercise-5 with Solution
Write a JavaScript function that accepts a string as a parameter and converts the
first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox
*/

/*
Exercise-9 with Solution
Write a JavaScript function to capitalize the first letter of each word in a string.
Test Data :
document.write(capitalize_Words('js string exercises'));
"Js String Exercises"
*/