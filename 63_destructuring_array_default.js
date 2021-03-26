/*
 * 63. Destructuring Array Default
 */
let numbers = [1,2,"3"];
let [a=0,b,c,d='Default'] = numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(numbers);
