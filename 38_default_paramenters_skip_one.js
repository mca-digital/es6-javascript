/*
 * 38. Default Parameters Skip One
 */
function isEqualTo(number,compare = 10){
    console.log(number);
    console.log(compare);
    return number == compare;
}
console.log(isEqualTo(11));
