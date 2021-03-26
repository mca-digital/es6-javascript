/*
 * 39. Default Parameters Calculation
 */
function isEqualTo(number,compare = 10 / 2){
    console.log(number);
    console.log(compare);
    return number == compare;
}
console.log(isEqualTo(11));
