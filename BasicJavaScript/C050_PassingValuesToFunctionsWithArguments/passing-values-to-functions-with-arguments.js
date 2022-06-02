/*
    Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

    Here is a function with two parameters, param1 and param2:

        function testFun(param1, param2) {
        console.log(param1, param2);
        }

    Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World. Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

    ?1. Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
    ?2. Call the function with two numbers as arguments.
*/

function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
}

functionWithArgs(7, 9);

functionWithArgs(2, 1);

functionWithArgs(1259, 15879);


function multiplyTwoNumbers(num1, num2) {
    console.log(num1 * num2);
}

multiplyTwoNumbers(7, 7);

multiplyTwoNumbers(9, 12);

multiplyTwoNumbers(250, 4);