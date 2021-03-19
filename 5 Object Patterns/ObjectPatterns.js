


//the module pattern: creates singleton objects with private data
let object =(function(){
	//private data variables
	
	return{
		//public methods and properties
	}
}());

let person = (function(){
	let age = 24; //private

	return{
		name: "Name",
		getAge: function(){
			return age;
		}
	}
}());

console.log(person.name); //"Name"
console.log(person.getAge());//24

person.age = 50; //no effect
console.log(person.getAge());//24

//private members for constructors
function Person(name){
	let age = 24; //not accessible outside the constructor
	
	this.name = name;
	
	this.getAge = function(){
		return age;
	};
}

let person = new Person("Name");

person.age = 50; //can't change from here
console.log(person.getAge());// 24

//scope safe constructors. they can be called with or without new
function Person(name){
	if(this instanceof Person){
		//that means it was called with new
		this.name = name;
	}else{//called without new
		return new Person(name);
	}
}
//when new is called with a function, the newly
//created object represented by this is already
//an instance of the custom type represented by 
//the constructor, so "this" is instance of the type
//if new is called with the constructor.









