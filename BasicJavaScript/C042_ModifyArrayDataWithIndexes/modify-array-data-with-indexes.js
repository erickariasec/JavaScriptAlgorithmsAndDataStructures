/*
    Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

    Example

        const ourArray = [50, 40, 30];
        ourArray[0] = 15;
    
    ourArray now has the value [15, 40, 30].

    !Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
*/

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

console.log(myArray);