/*
 * 3. But if you put variable inside a block, 
 * it gives a error because 'let' use block scope.
 # That means, the variable just exists in the if block.
 */
    if(true){
        let age = 40;
    }
    console.log(age);

    // ReferenceError: age is not defined at Object.
