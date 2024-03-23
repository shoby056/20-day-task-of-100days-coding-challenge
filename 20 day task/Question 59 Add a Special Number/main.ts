// *Question 59:** Add a Special Number: Make a program that creates custom adders.
//  These adders can add a specific number to any other number you give them later.

function makeAdder(valueToAdd: number): (number) => number {
 // This is the magic box. It takes a number and adds your special number to it
 return function(number: number): number {
 return number + valueToAdd;
 };
}

// Making a magic box that adds 5
let addSeven = makeAdder(7);
console.log(addSeven(10));