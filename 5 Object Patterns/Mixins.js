


//Mixins occur when one object acquires the properties of
//another without modifying the prototype chain.

function mixin(receiver, supplier){
	for(let property in supplier){
		if(supplier.hasOwnProperty(property)){
			receiver[property] = supplier[property];
		}
	}	
	return receiver;
}

function mixin(receiver, supplier){
	Object.keys(supplier).forEach(function(property) {
		let desc = Object.getOwnPropertyDescriptor(supplier, property);
		Object.defineProperty(receiver, property, descriptor);
	});
	return receiver;
}
