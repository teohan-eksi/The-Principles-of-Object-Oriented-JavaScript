


let book = {
	title: "The Tale of Two Cities"
};

let prototype = Object.getPrototypeOf(book);

console.log(prototype === Object.prototype);// true
//book inherits from Object

/* methods inherited from the Object.prototype
 * hasOwnProperty
 * propertyIsEnumerable
 * isPrototypeOf
 * valueOf
 * toString */

//Object inheritance
let person1 = {
	name: "Name",
	sayName: function(){
		return this.name;
	}
};

let person2 = Object.create(person1, {
	name: {
		configurable: true,
		enumerable: true,
		value: "Name2",
		writable: true
	}
});

person1.sayName(); //"Name"
person2.sayName(); //"Name2"

person1.isPrototypeOf(person2);//true
person2.hasOwnProperty("sayName");//false, so it was inherited from person1
//person1 has inherited from Object.prototype

//constructor inheritance
function YourConstructor(){

}

//how YourConstructor inherits its prototype from Object.prototype 
//behind the scenes
YourConstructor.prototype = Object.create(Object.prototype,
	constructor: {
		configurable: true,
		enumerable: true,
		value: YourConstructor,
		writable: true
	}
);
//YourConstructor is a subtype of Object.

//example to better understand
function Rectangle(length, width){
	this.length = length;
	this.width = width;
}

Rectangle.prototype.getArea = function(){
	return this.length * this.width;
};

Rectangle.prototype.toString = function(){
	return "Rectangle";
};

//square
function Square(size){
	this.length = size;
	this.width = size;
}

Square.prototype = new Rectangle();//square inherits from rectangle
Square.prototype.constructor = Square;

Square.prototype.toString = function(){
	return "Square";
};

let rect = new Rectangle(4, 8);
let squ = new Square(4);

console.log(rect.getArea()); //32
console.log(squ.getArea()); //16

console.log(rect.toString());//"Rectangle"
console.log(squ.toString());//"Square"

console.log(rect instanceof Rectangle);
console.log(rect instanceof Object);

console.log(squ instanceof Square);//true
console.log(squ instanceof Rectangle);//true, because its prototype is Rectangle.prototype, but constructor is Square
console.log(squ instanceof Object);//true

//constructor stealing
function Square(size){
	Rectangle.call(this, size, size); //you thief!
	
	//add new properties or overwrite existing one here
}

Square.prototype = Object.create(Rectangle.prototype, {
	constructor: {
		configurable: true,
		enumerable: true,
		value: Square,
		writable: true
	}
});


