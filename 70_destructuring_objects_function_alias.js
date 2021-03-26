/*
 * 70. Destructuring Objects Function Alias
 */
let obj = {
    name: 'MCA',
    age: 33,
    greet: function(){
        console.log('Hello there!');
    }
};

let {name,greet: hello} = obj;

hello();
greet();
// * If will try call greet() it will give a error.
