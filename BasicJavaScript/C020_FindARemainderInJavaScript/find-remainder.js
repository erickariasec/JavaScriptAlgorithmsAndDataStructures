/*
    El operador de resto % entrega el resto de la división entre dos números.

    Ejemplo:
        5 % 2 = 1 porque
        Math.floor(5 / 2) = 2 (Quotient)
        2 * 2 = 4
        5 - 4 = 1 (Remainder)

    Use:
    In mathematics, a number can be checked to see if it is even or odd by checking the remainder of the number divided by 2.

        17 % 2 = 1 (17 is odd)
        48 % 2 = 0 (48 is even)

    !Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but it doesn't work properly with negative numbers.
*/

const remainder = 11 % 3;

console.log(remainder);