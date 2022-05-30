/*
    One of the biggest problems with declaring variables using the var keyword is that you can easily override variable declarations:

        var camper = "James";
        var camper = "David";
        console.log(camper);
*/

/* 
    If you replace var with let in the above code, it will result in an error:

        let camper = "James";
        let camper = "David";
        The error can be seen in your browser console.

    So unlike var, when using let, a variable with the same name can only be declared once.
*/

let catName = "Oliver";
let catSound = "Meow!";