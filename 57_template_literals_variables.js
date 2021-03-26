/*
 * 57. Template Literals Variables
 */
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
