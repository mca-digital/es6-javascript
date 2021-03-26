/*
 * 40. Default Parameters The Same
 */
function isEqualTo(number,compare = number){
    console.log(number);
    console.log(compare);
    return number == compare;
}
console.log(isEqualTo(11));
