//objects ********************************

//factory pattern  *********
function createGame(title, year) {
	var o = new Object();
	o.title = title;
	o.year = year;
	o.getTitle = function () {
		return this.title;
	};
	return o;
}

var game1 = createGame('Karate Chan', 1988);
//we can't know what kind of object game is.



//constructor pattern  ********
function Game(title, year) {
	this.title = title;
	this.year = year;
	this.getTitle = function () {
		return this.title;
	};
}
var game = new Game('Moon Cresta', 1989);
console.log(game instanceof Game); //true
console.log(game instanceof Object); //true

//constructor called without new
var game = Game('Moon Cresta'); //will add all properties to window if not in strict mode.

//instance methods
var game1 = new Game('Galaxian', 1988);
var game2 = new Game('Froggy', 1989);
console.log(game1.getTitle === game2.getTitle); //false

//workaround... but clutters the global scope.
function Game(title, year) {
	this.title = title;
	this.year = year;
	this.getTitle = getTitle;
}

function getTitle() {
	return this.title;
};


//prototype pattern  ********
function Game() { }
Game.prototype.title = 'Galaxian';
Game.prototype.year = 1988;
Game.prototype.getTitle = function () {
	return this.title;
};

var game1 = new Game();
var game2 = new Game();
console.log(game1.getTitle === game2.getTitle); //true

//shadowing
game1.title = 'Guadalcanal';
delete game1.title; //check fx inspector.

//how to know if the property exists only in the prototype.
function hasPrototypeProperty(object, name) {
	return !object.hasOwnProperty(name) && (name in object);
}

//succint
function Game() { }
Game.prototype = {
	constructor: Game, //makes this enumerable!! use Object.defineProperty if ES5
	title: 'Galaxian',
	year: 1988,
	getTitle: function () {
		return this.title;
	}
};

//ECMAScript 5 only – restore the constructor
Object.defineProperty(Game.prototype, 'constructor', {
	enumerable: false,
	value: Game
});

//changing the prototype
function Person() { }
var friend = new Person();
Person.prototype = {
	constructor: Person,
	name: 'Nicholas',
	age: 29,
	job: 'Software Engineer',
	sayName: function () {
		alert(this.name);
	}
};
friend.sayName(); //err //195 professional js

//reference values problem
function Obj() { }
Person.prototype.items = [1, 2, 3];
var o1 = new Obj();
var o2 = new Obj();
o1.items.push(4);
console.log(o2.items); //1,2,3,4
	
	
//combination constructor/prototype pattern  ********
function Game(title, year) {
	this.title = title;
	this.year = year;
}

Game.prototype.getTitle = function () {
	return this.title;
};

//dynamic prototype pattern  *******************
function Game(title, year) {
	this.title = title;
	this.year = year;
	if (typeof this.getTitle != 'function') {
		Game.prototype.getTitle = function () {
			return this.title;
		};
	}
}
//prototype property is only created the first time we create an instance

//parasitic constructor pattern  *******************
//like factory pattern but using new... confusing. Don't use if possible
function SpecialArray() {
	//create the array
	var values = new Array();
	//add the values
	values.push.apply(values, arguments);
	//assign the method
	values.toPipedString = function () {
		return this.join('|');
	};
	//return it
	return values;
}
var colors = new SpecialArray('red', 'blue', 'green');
console.log(colors.toPipedString()); //'red|blue|green'

//durable constructor pattern  ***********************
//durable objects-> no public properties and method not referring this.
function Game(title, year) {
	var o = new Object();
	o.getTitle = function () {
		return title;
	};
	return o;
}

var game = Game('Karate Chan', 1988);