/*
 * 33. Default Parameters False
 */
function isEqualTo(number,compare = 0){
    return number == compare;
}
console.log(isEqualTo(10));
