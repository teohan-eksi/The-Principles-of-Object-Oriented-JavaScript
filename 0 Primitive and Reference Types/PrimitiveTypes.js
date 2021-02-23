


/* A variable declared with the var keyword is defined throughout the program.
 * A variable declared with the let keyword is limited to the block-scoped only.
 */

//strings
let name ="name";
//character
let ch = 'n';

//numbers
let n = 4;
let k = 8.44;

//boolean
let isTrue = true;

//null
let someObj = null;

//undefined
let flag = undefined;
let res; //automatically undefined

//assigning primitive types
let color1 = "purple";
let color2 = color1;

console.log(color1); //purple
console.log(color2); //purple

color1 = "red";

console.log(color1); //red
console.log(color2); //purple

//identifting primitive types
console.log(typeof "name");//string	
console.log(typeof 4);//number
console.log(typeof 4.8);//number
console.log(typeof false);//boolean
console.log(typeof undefined);//undefined
console.log(typeof null);//object

//determine null objects
let value = null;
console.log(value === null);//true

//comparing without coercion
console.log("5" == 5); //true. "5" is converted to 5
console.log("5" === 5); //false. no conversion

console.log(undefined == null);//true.
console.log(undefined === null);//false

//Primitive Methods
let name2 = "Name";
console.log(name2.toLowerCase());// "name"
console.log(name2.charAt(0));//'N'
console.log(name2.substring(2,5));// "me"

let count = 10;
console.log(count.toFixed(3)); //10.000
console.log(count.toString(16));// "a", converted to hex
















