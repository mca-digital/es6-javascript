/*
 * 47. Object Literal Function Propertie
 */
let name = 'MCA';
let age = 33;

let obj = {
    name: 'DIGITAL',
    age,
    greet(){
        console.log(this.name + ', ' + this.age);
    }
};

obj.greet();
