/*
 * 50. Object Literal Propertie String Dinamic
 */
let name = 'MCA';
let age = 33;
let ageField = "age";

let obj = {
    "name": 'DIGITAL',
    [ageField]: 40,
    "greet me"(){
        console.log(this.name + ', ' + this.age);
    }
};

obj["greet me"]();
console.log(obj.age);
console.log(obj[ageField]);
console.log(obj["age"]);