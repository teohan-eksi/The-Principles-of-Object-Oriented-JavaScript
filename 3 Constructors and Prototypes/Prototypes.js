


let book = {
	title: "The Tale of Two Cities"
};

console.log("hasOwnProperty" in book);//true
console.log(Object.prototype.hasOwnProperty("hasOwnPropert"));//true
//hasOwnProperty is a prototype method of Object's prototype

//Identfying a prototype property
function Person(name){
	this.name = name;
}
let person = new Person("name");

boolean isPrototypeProperty = name in person && !person.hasOwnProperty(name);
//if property is in the object and it is not an own property, then it is prototype property

//prototype property
let object = {};
let prototype = Object.getPrototypeOf(object);

console.log(prototype === Object.prototype); //true
console.log(Object.prototype.isPrototypeOf(object));//true

//changing methods
console.log(object.toString());//"[object Object]"

object.toString = function(){
	return "[object Custom]";
};

console.log(object.toString());//"[object Custom]"

delete object.toString;//own property can be deleted. Now it's left with the prototype method
delete object.toString;//prototype property can't be deleted

//using prototypes with constructors
function Person(name){
	this.name = name;
}

Person.prototype.sayName = function(){
	return this.name;
};

Person.prototype.sharedProperty = "all instances have this property.";

let person1 = new Person("Name");

person1.name; //"Name"
person1.sayName();//"Name"

Person.prototype = {
	constructor: Person, //if this is not specified, constructor is Object.
	
	toString: function(){
		return "Person " + this.name
	}
};

console.log(person1 instanceof Person);//true
console.log(person1.constructor === Person);//true

//changing prototypes
function Person(name){
	this.name = name;
}

let person1 = new Person("Name");

Object.freeze(person1);//freezes ONLY the instance person1 and own properties of that instance
					   //prototype can be changed

Person.prototype.sayHi = function (){
	console.log("hi");
};

person1.sayHi(); //logs "hi"

//Built-in Object Prototypes (can be changed)
Array.prototype.sayHi = function(){
	console.log("hi");
}

let numbers = [1,2,3,4];
numbers.sayHi(); //the array says hi.


