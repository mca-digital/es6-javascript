/*
 * 49. Object Literal Propertie String Dinamic Error
 */
let name = 'MCA';
let age = 33;
let ageField = "age";

let obj = {
    "name": 'DIGITAL',
    [ageField],
    "greet me"(){
        console.log(this.name + ', ' + this.age);
    }
};

obj["greet me"]();
