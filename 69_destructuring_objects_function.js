/*
 * 69. Destructuring Objects Function
 */
let obj = {
    name: 'MCA',
    age: 33,
    greet: function(){
        console.log('Hello there!');
    }
};

let {name,greet} = obj;

greet();
