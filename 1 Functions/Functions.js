


//function decleration
function add(num1, num2){
	return num1+num2;
}

//function expression
let add = function(num1, num2){
	return num1+num2;
}

//function declerations are hoisted.
//only function declerations are hoisted, not expressions.
//a function can be defined AFTER it was used in code.
let res = add(4,8);

function add(num1, num2){
	return num1+num2;
}

//functions as values
function sayHi(){
	console.log("hi");
}
let sayHi2 = sayHi;
sayHi2(); // "hi"

let sayHi = new Function("console.log(\"hi\");");
let sayHi2 = sayHi;
sayHi2(); // "hi"

//parameters
function reflect(value){
	return value;
}
console.log(reflect("hi"));//"hi"
console.log(reflect("hi", 4));//"hi"
console.log(reflect.length);// 1 -> number of parameters

reflect = function(){
	return arguments[0];
};
console.log(reflect("hi"));//"hi"
console.log(reflect("hi", 4));//"hi"
console.log(reflect.length);// 0 -> number of parameters

//function that accepts any number of parameters
function sum(){
	let result = 0,
		i = 0,
		argLen = arguments.length;
	
	while(i<len){
		result += arguments[i];
		i++;
	}
	return result;
}

//overloading: ability of a single function to have multiple signatures
function sayMessage(msg){
	console.log(msg);
}

function sayMessage(msg){
	console.log("second definition");
}

sayMessage("hi"); // "second definition"

//overload with arguments
function sayMessage(msg){
	if(arguments.length === 0){	
		console.log("default message");
	}

	console.log(msg);
}

//object methods
let person = {
	name: "Name",
	sayName: function(){
		return person.name;
	}
};

person.sayName();//returns "Name"

// "this" object
let person = {
	name: "Name",
	sayName: function(){
		return this.name;
	}
};

person.sayName();//returns "Name"

//more on this
function sayNameGlobal(){
	return this.name;
}

let person = {
	name: "Name",
	sayName: sayNameGlobal 
};

person.sayName(); // "Name"

let name = "global name";
sayNameGlobal(); //"global name"

//changing "this"
//the call() method
function sayNameForAll(objectName){
	return objectName + " " + this.name;
}

let person = {
	name: "Name"
};

let globalName = "gName";
sayNameForAll.call(this, "global"); //returns "global gName"
sayNameForAll.call(person, "person"); //returns "person Name"

//the apply() method. If you have array, use apply.
function sayNameForAll(objectName){
	return objectName + " " + this.name;
}

let person = {
	name: "Name"
};

let globalName = "gName";
sayNameForAll.apply(this, ["global"]); //returns "global gName"
sayNameForAll.call(person, ["person"]); //returns "person Name"

//the bind() method
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

