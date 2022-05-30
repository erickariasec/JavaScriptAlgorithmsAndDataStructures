/*
    The let keyword is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

    const has all the amazing features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

        const FAV_PET = "Cats";
        FAV_PET = "Dogs";

    The console will show an error due to the reassignment of the value of FAV_PET.

    You should always name variables that you don't want to reassign using the const keyword. This helps when you accidentally try to reassign a variable that is meant to remain constant.

    Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). You will learn more about immutable and mutable objects, arrays, and values in later challenges. Also in later challenges, you'll see examples of uppercase, lowercase, or camelCase variable identifiers.
*/

const FCC = "freeCodeCamp"; // Change only this line
let fact = "is cool!"; // Change only this line
fact = "is awesome!"; 
console.log(FCC, fact); // Change only this line