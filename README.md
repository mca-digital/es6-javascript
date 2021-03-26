ES6
===
  * Var
  * Let
  * Block Scope "this"
  * Const
  * Hoisting
  * Arrow Functions
  * Default Parameters
  * Object Literals
  * Rest Operator
  * Spread Operator
  * For Of Loop
  * Template Literals
  * Destructuring

Block Scope and "let"
----------------------------

### 1. The var statement ###
  * 1_var.js
    
        var name = 'MCA';
        console.log(name);

        Output: 'MCA'

### 2. The let statement ###
  * 2_let.js

        let name = 'MCA';
        console.log(name);

        Output: 'MCA'

### 3. Block scope Error ### 
  * 3_blockscope_error.js

    > 'let' use block scope, the variable just exists in the "if" block.

        if(true){
            let age = 40;
        }
        console.log(age);

        Output: ReferenceError: name is not defined.

### 4. Block Scope ### 
  * 4_blockscope.js

        age = 33;
        if(true){
            let age = 40;
        }
        console.log(age);

        Output: 33

### 5. Block Scope ###
  * 5_blockscope.js    

        let age = 33;
        if(true){
            let age = 40;
            console.log(age);
        }
        console.log(age);
        
        Output: 40
                33

### 6. Block Scope ###
  * 6_blockscope.js    

        let age = 33;
        if(true){
            let age = 40;
            console.log(age);
        }
        console.log(age);
        age = 29;
        console.log(age);

        Output: 40
                33
                29

  * With "let" be sure the variable you use inside of a block stay inside a block.

"const"
-------

### 7. Const is a diferent thing. ###
  * 7_const.js

        const age = 33;
        console.log(age);

        Output: 33

### 8. If i set a value to age constant it gives a erros. It is a constant and may not be changed. ###
  * 8_const_error.js

        const age = 38;
        age = 33;
        console.log(age);

        Output: TypeError: Assignment to constant variable.

### 9. Emphasis that it is a constant with uppercase. ###
  * 9_constant.js

        const AGE = 38;
        console.log(AGE);

        Output: 38

### 10. Constant Array ###
  * 10_constant_array.js

        const AGES = [27,33,38];
        console.log(AGES);

        Output: [27,33,38]

### 11. Constant Array Push ###
  * 11_constant_array_push.js

        const AGES = [27,33,38];
        console.log(AGES);
        AGES.push(40);
        console.log(AGES);

        Output: [27,33,38]
                [27,33,38,40]

### 12. Constant Object ###
  * 12_constant_obj.js

        const OBJ = {
            age: 33
        };
        console.log(OBJ);
        OBJ.age = 40;
        console.log(OBJ);

        Output: { age: 33 }
                { age: 40 }

Hoisting with "let" and "const"
-------------------------------

### 13. Hoisting var ### 
  * 13_hoisting_var.js

        age = 33;
        console.log(age);
        var age;

        Output: 33

### 14. Hoisting let error ###
* 14_hoisting_let_error.js

        age = 33;
        console.log(age);
        let age;

        Output: ReferenceError: Cannot access 'age' before initialization at Object.

### 15. Hoisting let ###
  * We have to declare it before initialize.
  * 14_hoisting_let.js

        let age;
        age = 33;
        console.log(age);

        Output: 33

### 16. Hoisting let function ###
* 16_hoisting_let_function.js

        function doSmth(){
            age = 33;
        }

        let age;
        doSmth();
        console.log(age);

        Output: 33

    * You have to declare things before act using then.

Fat Arrow Functions
-------------------

### 17. Normal Function ###
  * 17_normal_function.js

        function fn(){
            console.log('Hello!');
        }

        fn();

        Output: 'Hello!'

### 18. Arrow Function ###
  * 18_arrow_function.js

        var fn = () => {
            console.log('Hello!');
        }

        fn();

        Output: 'Hello!'

### 19. Arrow Function Shorter ###
  * 19_arrow_function_shorter.js

        var fn = () => console.log('Hello!');
        
        fn();

        Output: 'Hello!'

### 20. Arrow Function Much Shorter ###
  * 20_arrow_function_much_shorter.js

        var fn = () => 'Hello!';

        console.log(fn());

        Output: 'Hello!'

### 21. It has effect as the same as example before. ###
  * 21_effect_as_the_same_as_example_before.js

        function fn(){
            return 'Hello!';
        }
        
        console.log(fn());

        Output: 'Hello!'

### 22. Arrow Function Multiply ###
  * 22_arrow_function_multiply.js

        var fn = () => {
            let a = 2;
            let b = 3;
            return a * b;
        };
        
        console.log(fn());

        Output: 6

### 23. Arrow Function Parameters ###
  * 23_arrow_function_parameters.js

        var fn = (a,b) => {
            return a * b;
        };
        
        console.log(fn(2,3));

        Output: 6

### 24. Arrow Function Parameters One Line ###
  * 24_arrow_function_parameters_one_line.js

        var fn = (a,b) => a * b;
        
        console.log(fn(2,3));

        Output: 6

### 25. Arrow Function Parameters One Argument ###
  * 25_arrow_function_parameters_one_argument.js

        var fn = (a) => a * 2;
        
        console.log(fn(2));
        
        * If you pass a second argument, will be ignored. 

        console.log(fn(2,3));

        Output: 4
                4

### 26. Arrow Function Parameters One Argument ###
  * 26_arrow_function_parameters_one_argument.js

  * When we have just one argument we can leave the paranteses

        var fn = a => a * 2;

        console.log(fn(2));

        Output: 4

### 27. Arrow Function SetTimeOut ###
  * 27_arrow_function_settimeout.js

        SetTimeOut(() => console.log('Hello!',1000));

        Output: 'Hello!' after 1 second.

Fat Arrow Functions & "this"
-------------------------------

### 28. Normal Function & "this" ###
  * 28_normal_function_this.js

        function fn(){
            console.log(this);
        }
        fn();

        Output Terminal: <ref *1> Object [global]
        Output Console Browser: Window {0: global,..}

### 29. Arrow Function & "this" ###
  * 29_arrow_function_this.js

        var fn = () => console.log(this);
        fn();

        Output Terminal: {}
        Output Console Browser: Window {0: global,..}
        Here "this" refers to global scope.

### 30. Normal Function This Button ###
  * 30_normal_function_this_button.html

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Normal Function This Button</title>
        </head>
        <body>
            <button>Test</button>
        </body>
        </html>
        <script>
            var button = document.querySelector('button');

            function fn(){
                console.log(this);
            }
            
            button.addEventListener('click',fn);

            // Output: <button>Test</button> 
            // Here "this" refers to button scope.
        </script>

### 31. Arrow Function This Button ###
  * 31_arrow_function_this_button.html

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Arrow Function This Button</title>
        </head>
        <body>
            <button>Test</button>
        </body>
        </html>
        <script>
            var button = document.querySelector('button');    
            var fn = () => console.log(this);
            button.addEventListener('click',fn);
            
            /*
            * Output: <button>Test</button>
            * Here "this" refers to global scope.
            */
        </script>

  * "this" are handleed diferent dependes the context.
  * The Fat Arrow Functions you wont´t need bind, apply or call all these workaround uses with ES5 to get "this" to the right context.
  * Just keeps the context no mather how or where you call this function.

Default Parameters
------------------

### 32. Normal Parameters ###
  * 32_normal_parameters.js

        function isEqualTo(number,compare){
            return number == compare;
        }
        console.log(isEqualTo(10,10));

        Output: true

### 33. Default Paramenters False ###
  * 33_default_paramenters_false.js

        function isEqualTo(number,compare = 0){
            return number == compare;
        }
        console.log(isEqualTo(10));

        Output: false

### 34. Default Paramenters True ###
  * 34_default_paramenters_true.js

        function isEqualTo(number,compare = 10){
            return number == compare;
        }
        console.log(isEqualTo(10));

        Output: true

### 35. Default Paramenters Two ###
  * 35_default_paramenters_both.js

        function isEqualTo(number = 10,compare = 10){
            return number == compare;
        }
        console.log(isEqualTo());

        Output: true

### 36. Default Paramenters One ###
  * 36_default_paramenters_one.js

        function isEqualTo(number = 10,compare){
            return number == compare;
        }
        console.log(isEqualTo(11));

        Output: false

### 37. Default Paramenters One Debug ###
  * 37_default_paramenters_one_debug.js

        function isEqualTo(number = 10,compare){
            console.log(number);
            console.log(compare);
            return number == compare;
        }
        console.log(isEqualTo(11));

        Output: 11
                undefined
                false

### 38. Default Paramenters Skip One ###
  * 38_default_paramenters_skip_one.js

        function isEqualTo(number,compare = 10){
            console.log(number);
            console.log(compare);
            return number == compare;
        }
        console.log(isEqualTo(11));

        Output: 11
                10
                false

### 39. Default Paramenters Calculation ###
  * 39_default_paramenters_calculation.js

        function isEqualTo(number,compare = 10 / 2){
            console.log(number);
            console.log(compare);
            return number == compare;
        }
        console.log(isEqualTo(11));

        Output: 11
                5
                false

### 40. Default Paramenters The Same ###
  * 40_default_paramenters_the_same.js

        function isEqualTo(number,compare = number){
            console.log(number);
            console.log(compare);
            return number == compare;
        }
        console.log(isEqualTo(11));

        Output: 11
                11
                true

### 41. Default Paramenters Declared Outside ###
  * 41_default_paramenters_declared_outside.js

        let a = 100;
        function isEqualTo(number,compare = a){
            console.log(number);
            console.log(compare);
            return number == compare;
        }
        console.log(isEqualTo(11));

        Output: 11
                11
                true

### 42. Default Paramenters inverted ###
  * 42_default_paramenters_inverted.js

        function isEqualTo(number = compare,compare = 10){
            console.log(number);
            console.log(compare);
            return number == compare;
        }
        console.log(isEqualTo());

        Output: ReferenceError: Cannot access 'compare' before initialization at isEqualTo
    * The error is because the compare only will be created in the second step, in first step this not exists yet.

Object Literal Extensions
-------------------------

### 43. Object Literal ###
  * 43_object_literal.js

        let obj = {
            name: 'MCA',
            age: 33
        };

        console.log(obj);

        Output: { name: 'MCA', age: 33 }

### 44. Object Literal External Assigned ###
  * 44_object_literal_external_assigned.js

        let name = 'MCA';
        let age = 33;

        let obj = {
            name,
            age
        };

        console.log(obj);

        Output: { name: 'MCA', age: 33 }
    * The object will take the values from the surrounding variables. We not specify values to initialize the object.
    It automatic look if has variables declared before the declaration object that matches the propertie names.

### 45. Object Literal Not Assigned ###
  * 45_object_literal_not_assigned.js

        let obj = {
            name,
            age
        };

        console.log(obj);

        Output: ReferenceError: name is not defined at Object.
    * The object properties need to be initialized.

### 46. Object Literal External Assigned Override ###
  * 46_object_literal_external_assigned_override.js

        let name = 'MCA';
        let age = 33;

        let obj = {
            name: 'DIGITAL',
            age
        };

        console.log(obj);

        Output: { name: 'DIGITAL', age: 33 }
    * The object properties will be override.

### 47. Object Literal Function Propertie ###
  * 47_object_literal_function_propertie.js

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

        Output: DIGITAL, 33

### 48. Object Literal Propertie String ###
  * 48_object_literal_propertie_string.js

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

        Output: DIGITAL, 33

### 49. Object Literal Propertie String Dinamic Error ###
  * 49_object_literal_propertie_string_dinamic_error.js

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

        Output: SyntaxError: Unexpected token ','
        
### 50. Object Literal Propertie String Dinamic ###
  * 50_object_literal_propertie_string_dinamic.js

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

        Output: DIGITAL, 40
                40
                40
                40

The Rest Operator
-----------------
* Rest operators return a array when passed as parameters.

### 51. The Array Parameter ###
  * 51_the_array_parameter.js

        function sumUp(toAdd){
            let result = 0;
            for(let i=0; i<toAdd.length; i++){
                result += toAdd[i];
            }
            return result;
        }

        let numbers = [1,2,3,4,5];
        console.log(sumUp(numbers));

        Output: 15

### 52. The Rest Operator ###
  * 52_the_rest_operator.js

        function sumUp(...toAdd){
            console.log(toAdd);
            let result = 0;
            for(let i=0; i<toAdd.length; i++){
                result += toAdd[i];
            }
            return result;
        }

        console.log(sumUp(100,10,20));

        Output: 130

### 53. The Rest Operator with String ###
  * 53_the_rest_operator_with_string.js

        function sumUp(...toAdd){
            console.log(toAdd);
            let result = 0;
            for(let i=0; i<toAdd.length; i++){
                result += toAdd[i];
            }
            return result;
        }

        console.log(sumUp(100,10,"20"));

        Output: "11020"

The Spread Operator
-------------------
* Spread operator does the oposite of Rest Operator.

### 54. The Spread Operator ###
  * 54_the_spread_operator.js

        let numbers = [1,2,3,4,5];

        console.log(...numbers);
        console.log(Math.max(numbers));
        console.log(Math.max(...numbers));

        Output: 1 2 3 4 5   
                NaN         
                5           

The For-of-Loop
---------------

### 55. The For-of-Loop ###
  * 55_the_for_of_loop.js
    
        let testResults = [1.23,1.10,4.1];

        for(testResult of testResults){
            console.log(testResult);
        }

        Output: 1.23
                1.1
                4.1

Template Literals
-----------------

### 56. Template Literals ###
  * 56_template_literals.js

        let name = 'MCA';
        let description = `
            Like this
        `;

        console.log(name);
        console.log(description);

        Output: MCA
                Like this
       
### 57. Template Literals Variables ###
  * 57_template_literals_variables.js

        let name = 'MCA',
            date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate();

        let description = `
            Hello, \${name} we are in \${day+'/'+month+'/'+year}
            Hello, ${name} we are in ${day+'/'+month+'/'+year}
        `;

        console.log(description);

        Output: Hello, ${name} we are in ${day+'/'+month+'/'+year}
                Hello, MCA we are in 23/2/2021

Destructuring - Arrays
----------------------

### 58. Normal Array ###
  * 58_normal_array.js

        let numbers = [1,2,3];
        let a = numbers[0];
        let b = numbers[1];

        console.log(numbers);
        console.log(a);
        console.log(b);

        Output: [ 1, 2, 3 ] 
                1 
                2 

### 59. Destructuring Array ###
  * 59_destructuring_array.js

        let numbers = [1,2,3];
        let [a,b] = numbers;
        
        console.log(a);
        console.log(b);
        console.log(numbers);

        Output: 1 
                2 
                [ 1, 2, 3 ] 

### 60. Destructuring Array Undefined ###
  * 60_destructuring_array_undefined.js

        let numbers = [1,2,3];
        let [a,b,c,d] = numbers;
        
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(numbers);

        Output: 1 
                2 
                3
                undefined
                [ 1, 2, 3 ] 

### 61. Destructuring Array Rest ###
  * 61_destructuring_array_rest.js

        let numbers = [1,2,3];
        let [a,...b] = numbers;
        
        console.log(a);
        console.log(b);
        console.log(numbers);

        Output: 1
                [ 2, 3 ]
                [ 1, 2, 3 ]

### 62. Destructuring Array Rest Error ###
  * 62_destructuring_array_rest_error.js

        let numbers = [1,2,3];
        let [a,...b,c] = numbers;
        
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(numbers);

        Output: let [a,...b,c] = numbers;
                       ^^^^
                SyntaxError: Rest element must be last element.

### 63. Destructuring Array Default ###
  * 63_destructuring_array_default.js

    * A mix of Default Values And Destructuring.

        let numbers = [1,2,"3"];
        let [a=0,b,c,d='Default'] = numbers;
        
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(numbers);

        Output: 1
                2
                "3"
                "Default"
                [ 1, 2, 3 ]

### 64. Swap Variables ###
  * 64_swap_variables.js

        let a = 5;
        let b = 10;
        let c = a;

        console.log("a: ",a);
        console.log("b: ",b);

        a = b; 
        b = c;

        console.log("a: ",a);
        console.log("b: ",b);

        Output: a:  5 
                b:  10
                a:  10
                b:  5 

### 65. Destructuring Swap Variables ###
  * 65_destructuring_swap_variables.js

        let a = 5;
        let b = 10;

        console.log("a: ",a);
        console.log("b: ",b);

        [b,a] = [a,b];

        console.log("a: ",a);
        console.log("b: ",b);

        Output: a:  5 
                b:  10
                a:  10
                b:  5 

### 66. Destructuring Array Spaces ###
  * 66_destructuring_array_spaces.js

        let numbers = [1,2,3];
        let [a, ,c] = numbers;

        console.log(a,b);

        Output: 1 3

### 67. Destructuring Create Variables ###
  * 67_destructuring_create_variables.js

        let [a,b] = [1,2,3];
        console.log(a,b);

        Output: 1 2

Destructuring - Objects
-----------------------

### 68. Destructuring - Objects ###
  * 68_destructuring_objects.js

        let obj = {
            name: 'MCA',
            age: 33
        };

        let {name,age} = obj;

        console.log(name);
        console.log(age);

        Output: MCA
                33

### 69. Destructuring - Objects Function ###
  * 69_destructuring_objects_function.js

        let obj = {
            name: 'MCA',
            age: 33,
            greet: function(){
                console.log('Hello there!');
            }
        };

        let {name,greet} = obj;

        greet();

        Output: "Hello there!"

### 70. Destructuring - Objects Function Alias ###
  * 70_destructuring_objects_function_alias.js

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

    * If will try call greet() it will give a error.
    * Outside object just exists hello() function.

        Output: "Hello there!"
                ReferenceError: greet is not defined.

### https://kangax.github.io/compat-table/es6/ ###
  * ES6 Compatibility Table

### jsbin ###
   * Test javascript.

### Academind ###
  * ES6 JavaScript Tutorial for Beginners - Getting Started
  * https://www.youtube.com/watch?v=IEf1KAcK6A8
