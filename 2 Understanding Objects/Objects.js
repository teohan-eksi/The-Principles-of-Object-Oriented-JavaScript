


//defining properties
let person = {
	name: "Name",
	sayName: function(){
		return this.name;
	}
};

person = new Object();
person.name = "Name";

person.age = 44;

//detecting properties
console.log("name" in person);//true
console.log(person.hasOwnProperty("name"));//true
console.log("age" in person);//true
console.log("birthday" in person); //false

console.log("toString" in person);//true
console.log(person.hasOwnProperty("toString"));//false

//removing properties
console.log("name" in person);//true
delete person.name;
console.log("name" in person);//false
console.log(person.name);//undefined

//enumeration
let property;
for(property in object){//also enumerates prototype properties
	return "name: " + property + " " + "value: " + object[property]:
}

//Object.keys() returns only own(instance) properties as enumerable
let properties = Object.keys(person);

console.log("length" in properties);//true
console.log(properties.propertyIsEnumerable("length"));//false

//property attributes
//common attributes
let person = {
	name: "Name"
};

Object.defineProperty(person, "name", {
	enumerable: false
});

let properties = Object.keys(person);
console.log(properties.length);// 0, because name is not enumerable.

Object.defineProperty(person, "name", {
	configurable: false
});

delete person.name;
console.log("name" in person); //true, because name is not configurable.

//a nonconfigurable property can't be made configurable again.
Object.defineProperty(person, "name", {
	configurable: true
});
//won't work.

//data property attributes
//specify all of the attributes, because they are false by default
Object.defineProperty(person, "name", {
	value: "Name",
	enumerable: true,
	configurable: true,
	writable: true
	
});

//accessor property attributes
let person = {
	_name: "Name",

	get name(){
		return this._name;
	},

	set name(value){
		this._name = value;
	}
};

//defining multiple properties

let person = {};

Object.defineProperty(person, {
	
	_name: {
	value: "Name",
	enumerable: true,
	configurable: true,
	writable: true
	},
	
	name: {
		get: function(){
			return this._name;
		}
		set: function(value){
			this._name = value;
		},
		enumerable: true,
		configurable: true
	}
	
});

//preventing object modification
//preventing extentsions
let person = {
	name: "Name"
};

Object.preventExtensions(person);
console.log(Object.isExtensible(person));//false

person.sayName = function(){
	return this.name;
}

console.log("sayName" in person);//false

//sealing objects. can't add or remove properties but exsisting ones can be changed.
Object.seal(person);

person.sayName = function(){
	return this.name;
}

console.log("sayName" in person);//false

person.name = "anotherName"; //name is changed.

delete person.name; //doesnt work

//freezing object. can't add or remove properties and can't change exsisting ones.
Object.freeze(person);

person.sayName = function(){
	return this.name;
}

console.log("sayName" in person);//false

person.name = "anotherName"; //name can't be changed.

delete person.name; //doesnt work





