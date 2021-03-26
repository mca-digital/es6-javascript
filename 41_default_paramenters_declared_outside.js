/*
 * 41. Default Parameters Declared Outside
 */

let a = 100;
function isEqualTo(number,compare = a){
    console.log(number);
    console.log(compare);
    return number == compare;
}
console.log(isEqualTo(11));
