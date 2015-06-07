//inheritance ********************************

//prototype chaining  -------------
function SuperType() {
	this.property = true;
}
SuperType.prototype.getSuperValue = function () {
	return this.property;
};
function SubType() {
	this.subproperty = false;
}
//inherit from SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
	return this.subproperty;
};
var instance = new SubType();
console.log(instance.getSuperValue()); //true

//reference issues
function SuperType() {
	this.colors = ['red', 'blue', 'green'];
}
function SubType() { }
SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors); //'red,blue,green,black'
var instance2 = new SubType();
console.log(instance2.colors); //'red,blue,green,black'

//we cannot pass parameters to the super constructor without affecting all instances.


//constructor stealing  ----------------
function SuperType(name) {
	this.name = name;
	this.colors = ['red', 'blue', 'green'];
}
function SubType(name) {
	//inherit from SuperType
	SuperType.apply(this, arguments);
}
var instance1 = new SubType('John');
instance1.colors.push('black');
console.log(instance1.colors); //'red,blue,green,black'
var instance2 = new SubType('Stuart');
console.log(instance2.colors); //'red,blue,green


//Combination inheritance  ---------------
function SuperType(name) {
	this.name = name;
	this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function () {
	console.log(this.name);
};
function SubType(name, age) {
	//inherit properties
	SuperType.call(this, name);
	this.age = age;
}
//inherit methods
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
	console.log(this.age);
};
var instance1 = new SubType('Nicholas', 29);
instance1.colors.push('black');
console.log(instance1.colors); //'red,blue,green,black'
instance1.sayName(); //'Nicholas';
instance1.sayAge(); //29
var instance2 = new SubType('Greg', 27);
console.log(instance2.colors); //'red,blue,green'
instance2.sayName(); //'Greg';
instance2.sayAge(); //27


//prototypal inheritance  ------
//Douglas Crockford 
function object(o) {
	function F() { }
	F.prototype = o;
	return new F();
}

var person = {
	name: 'Nicholas',
	friends: ['Shelby', 'Court', 'Van']
};
var anotherPerson = object(person);
anotherPerson.name = 'Greg';
anotherPerson.friends.push('Rob');
var yetAnotherPerson = object(person);
yetAnotherPerson.name = 'Linda';
yetAnotherPerson.friends.push('Barbie');
console.log(person.friends); //'Shelby,Court,Van,Rob,Barbie'

//object create
var person = {
	name: 'Nicholas',
	friends: ['Shelby', 'Court', 'Van']
};

var anotherPerson = Object.create(person, {
	name: {
		value: 'Greg'
	}
});

console.log(anotherPerson.name); //Greg

//Parasitic inheritance  -----------------------
//Crockford
function createAnother(original) {
	var clone = Object.create(original); //create a new object by calling a function
	clone.sayHi = function () { //augment the object in some way
		console.log('hi');
	};
	return clone; //return the object
}

//not reusing functions, similar to Constructor Pattern


//Parasitic combination inheritance  -------------------------
function inheritPrototype(subType, superType) {
	var prototype = Object.create(superType.prototype); //create object
	prototype.constructor = subType;   //augment object
	subType.prototype = prototype; //assign object
}