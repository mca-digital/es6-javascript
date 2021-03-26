/*
 * 16. Hoisting let function
 * You have to declare things before act using then.
 */
function doSmth(){
    age = 33;
}

let age;
doSmth();
console.log(age);
