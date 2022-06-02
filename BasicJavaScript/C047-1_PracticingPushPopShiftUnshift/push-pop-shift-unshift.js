const myArray = [
    ["Erick Arias", 23, "man"],
    ["Ronald Arias", 29, "man"],
    ["Veronica Contreras", 30, "woman"]
];

console.log(myArray);

// Adding two elements at the end of the array
myArray.push(
    ["Santiago Vivanco", 23, "man"],
    ["Carla Vivanco", 25, "woman"]
);

console.log(myArray);

// Deleting the last element of the array
myArray.pop();

console.log(myArray);

// Adding two elements at the beginning of the array
myArray.unshift(
    ["Diana Sanchez", 27, "woman"],
    ["Alexis Sanchez", 20, "man"]
);

console.log(myArray);

// Deleting the first element of the array
myArray.shift();

console.log(myArray);