

//creating objects
let object1 = new Object();
let object2 = object1;//assigns the pointer to object1

//adding or removing properties
object1.name = "name";
console.log(object2.name);// "name"
object1.name = null;
console.log(object2.name);// null

//dereferencing objects
object1 = null;
console.log(object1 === null); //true

//Instantiating Built-in Types
let items = new Array();
let time = new Date();
let error = new Error("error message");
let func = new Function("function body");
let re = new RegExp("\\d+");

//Object and Array Literals
let book = {
	name: "A Tale of Two Cities",
	year: 1859
};

let sameBook = {
	"name of the book": "A Tale of Two Cities"
	"year of the book": 1859
};

let colors = ["red", "purple"];
console.log(colors[0]); //red

let sameColors = new Array("red", "purple");
console.log(colors[0]); //red

//function literals
function reflect(value){
	return value;
}

let sameReflect = new Function("value", "return value;");

//RegExp literals
let numbers = /\d+/g;
let sameNumbers = new RegExp("\\d+", "g");

//property access
let array = [];
array.push(44);

let sameArray = [];
array["push"](44);

let sameArray2 = [];
let method = "push";
array[method](44);

//Identifying reference types
let items = [];
let object = {};

function reflect(value){
	return value;
}

console.log(items instanceof Array);//true
console.log(items instanceof Object);//true

console.log(object instanceof Object);//true

console.log(reflect instanceof Function); //true
console.log(reflect instanceof Object); //true

//Identfying arrays
let items = [];
console.log(Array.isArray(items));//true








