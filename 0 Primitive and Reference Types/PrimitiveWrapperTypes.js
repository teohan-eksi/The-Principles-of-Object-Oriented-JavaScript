


let name = "Name";
let firstChar = name.charAt(0);// "N"

//what happens behind the scenes:
let name = "Name";
let temp = new Strin(name);
let firstChar = temp.charAt(0);i// "N"
temp = null;

let name = "Name";
name.last = "Lastname";
console.log(name.last);// undefined, because name is not a regular object.
//what happens behind the scenes:
let name = "Name";
let temp = new String("Name");
temp.last = "Lastname";
temp = null;

let temp = new String();
console.log(temp.last);//undefined
temp = null;

//checking primitive values
let name = "Name";
let count = 4;
let isTrue = true;

console.log(name instanceof String);//false
console.log(count instanceof Number);//false
console.log(isTrue instanceof Boolean);//false

let name = new String("Name");
let count = new Number(4);
let isTrue = new Boolean(true);

console.log(typeof name);//"object"
console.log(typeof count);//"object"
console.log(typeof isTrue);//"object"

//a fact about primitive wrapper types
let found = new Boolean(false);
if(found){//evaluates to true, because objects are 
		  //always considered to be true in conditional statements.
	//do
}
