/*
 * 65. Destructuring Swap Variables
 */
let a = 5;
let b = 10;

console.log("a: ",a);
console.log("b: ",b);

[b,a] = [a,b];

console.log("a: ",a);
console.log("b: ",b);