/*
 * 6. Block Scope example.
 */
let age = 33;
if(true){
    let age = 40;
    console.log(age);
}
console.log(age);
age = 29;
console.log(age);
