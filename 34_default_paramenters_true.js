/*
 * 34. Default Parameters True
 */
function isEqualTo(number,compare = 10){
    return number == compare;
}
console.log(isEqualTo(10));
