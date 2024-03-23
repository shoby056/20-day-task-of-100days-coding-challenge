// *Question 59:** Add a Special Number: Make a program that creates custom adders.
//  These adders can add a specific number to any other number you give them later.
function makeAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 5
var addSeven = makeAdder(7);
console.log(addSeven(10));
