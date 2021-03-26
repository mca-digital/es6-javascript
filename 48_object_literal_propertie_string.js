/*
 * 48. Object Literal Propertie String
 */
let name = 'MCA';
let age = 33;

let obj = {
    "name": 'DIGITAL',
    age,
    "greet"(){
        console.log(this.name + ', ' + this.age);
    },
    "greet me"(){
        console.log(this.name + ', ' + this.age);
    }
};

obj["greet"]();
obj["greet me"]();