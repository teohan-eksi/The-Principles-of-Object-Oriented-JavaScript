


function Person(){
}

let person1 = new Person();
console.log(person1 instanceof Person);//true
console.log(person1.constructor === Person);//true

function Person(name){
	this.name = name;
	this.sayName = function(){
		return this.name;	
	};
}

let person1 = new Person("Name");
console.log(person1.name); // "Name"
person1.sayName();// "Name"

function Person(name){
	Object.defineProperty(this, "name", {
	get: function(){
		return name;	
	},
	set: function(value){
		name = value;
	},
	enumerable: true,
	configurable: true
	
	this.sayName = function(){
		return this.name;
	}
	});
}
