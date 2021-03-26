/*
 * 37. Default Parameters One Debug
 */
function isEqualTo(number = 10,compare){
    console.log(number);
    console.log(compare);
    return number == compare;
}
console.log(isEqualTo(11));
