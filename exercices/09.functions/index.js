//defining functions ********************************
//function declaration
function helloWorld(name) {
	console.log('hello world ' + name);
}

//function expression
var helloWorld = function (name) {
	console.log('hello world' + name);
};

//Function constructor
var helloWorld = new Function('name', 'console.log("hello world " + name)');

//function hoisting
helloWorld('John'); //hello world John
function helloWorld(name) {
	console.log('hello world ' + name);
}

helloWorld('John'); //error
var helloWorld = function (name) {
	console.log('hello world' + name);
};

//named function expressions
var f = function foo() {
	return typeof foo; // "foo" is available in this inner scope
};
typeof foo; // "undefined"
f(); // "function"

//as value
var f1 = function () { return 'hi'; };
var f2 = f1;   //pointer to function
var f3 = f1(); //hi


//factorial -- callee deprecated in strict mode
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee
var f = function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num - 1)
	}
}

var f1 = f;
var f2 = f;
console.log(f2(5));

f1 = function () { return 0; };
factorial = f1;
console.log(f2(5));

//if you try previous with a function declaration won't work!

//this
var game = 'double dragon';
var o = { game: 'shinobi' };
function getGame() {
	console.log(this.game);
}

getGame(); //double dragon

o.getGame = getGame;
o.getGame(); //shinobi

//another example
function getTitle() {
	console.log(this.title);
}
var game1 = {
	title: 'Pole Position',
	getTitle: getTitle
};
var game2 = {
	title: 'Arkanoid',
	getTitle: getTitle
};
var title = 'Super Sprint';
game1.getTitle(); // Pole Position
game2.getTitle(); // Arkanoid
getTitle(); // Super Sprint | if in strict mode: undefined

//call
var title = 'Super Sprint';
function getTitle(caller) { console.log(caller + ':' + this.title); }
var game1 = { title: 'Pole Position' };
var game2 = { title: 'Arkanoid' };

getTitle.call(game1, 'game1'); // game1 : Pole Position
getTitle.call(game2, 'game2'); // game2 : Arkanoid
getTitle.call(this, 'Global'); //Global : Super Sprint 

//En strict mode => Global, error: this is undefined.
(function () {
	'use strict';
	var title = 'Super Sprint';
	function getTitle(caller) { console.log(caller + ':' + this.title); }
	var game1 = { title: 'Pole Position' };
	var game2 = { title: 'Arkanoid' };

	getTitle.call(game1, 'game1'); // game1 : Pole Position
	getTitle.call(game2, 'game2'); // game2 : Arkanoid
	getTitle.call(this, 'Global'); //Global : Super Sprint 
	//En strict mode => this with no context is undefined, not window.
} ());

//apply
var title = 'Super Sprint';
function getTitle(caller) { console.log(caller + ':' + this.title); }
var game1 = { title: 'Pole Position' };
var game2 = { title: 'Arkanoid' };

getTitle.apply(game1, ['game1']); // game1 : Pole Position
getTitle.apply(game2, ['game2']); // game2 : Arkanoid
getTitle.apply(this, ['Global']); //Global : Super Sprint 

//apply & arguments example
function superGamer(label) {
	this.title = 'Phoenix';
	getTitle.apply(this, arguments);
}
superGamer('SuperGamer');

//bind
function Point(x, y) {
	this.x = x;
	this.y = y;
}
var o = {};
var p = Point.bind(o, 0/*x*/);
p(13);
console.dir(o); //x:0, y:13

//bind & new
function Point(x, y) {
	this.x = x;
	this.y = y;
}
var p = Point.bind(null, 0/*x*/);
var oo = new p(13);
console.dir(oo); //x:0, y:13

//bind example
function getTitle(caller) { console.log(caller + ':' + this.title); }
var game1 = { title: 'Pole Position' };
var game2 = { title: 'Arkanoid' };
var getGame1Title = getTitle.bind(game1);
var getGame2Title = getTitle.bind(game2, 'game2');

getGame1Title('game1'); //game1: Pole Position
getGame2Title(); //game2: Arkanoid

//custom bind function
function bind(fn, context) {
	return function () {
		return fn.apply(context, arguments);
	};
}

//function expressions
//never do this!
if (true) {
	function getGame() {
		return ('Livingstone supongo');
	}
} else {
	function getGame() {
		return ('Joust');
	}
}
getGame(); //depending on the browser it may not work as expected (chrome: Joust, firefox: Livingstone supongo)


//with expression
var getGame;
if (true) {
	getGame = function () {
		return ('Livingstone supongo');
	};
} else {
	getGame = function () {
		return ('Joust');
	};
}
getGame(); //Livingstone supongo


//closure and function expressions
function createComparisonFunction(propertyName) {
	return function (object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if (value1 < value2) {
			return -1;
		} else if (value1 > value2) {
			return 1;
		} else {
			return 0;
		}
	};
}

var compare = createComparisonFunction('title');
var result = compare({ title: 'Rampage' }, { title: 'Out Run' });


//IIFE
(function () { /*code here*/ })();
(function ($) { /*code here*/ })(jQuery);

//closures y this
var title = 'Bubble Bobble';
var game = {
	title: '1942',
	getTitle: function () {
		return function () {
			return this.title;
		};
	}
};
game.getTitle()(); // Bubble Booble

//fixing this assignation
var title = 'Bubble Bobble';
var game = {
	title: '1942',
	getTitle: function () {
		var self = this;
		return function () {
			return self.title;
		};
	}
};
game.getTitle()(); // Bubble Booble

//memory leaks in IE <= 8
function assignHandler() {
	var element = document.getElementById('element');
	element.onclick = function () {
		console.log(element.id);
	};
}

//fixing it
function assignHandler() {
	var element = document.getElementById('element'),
		id = element.id;
	element.onclick = function () {
		console.log(id);
	};
	element = null;
}


//mimicking block scope
function outputNumbers(count) {
	(function () {
		for (var i = 0; i < count; i++) {
			console.log(i);
		}
	})();
	console.log(i); //causes an error
}

//private variables
function Game(title) {
	this.getGame = function () {
		return title;
	};
}
var g = new Game('Donkey Kong');
g.getGame(); //Donkey Kong

//static private variables
(function (w) {
	var title = '';

	w.Game = function (value) {
		title = value;
	};

	w.Game.prototype.getTitle = function () {
		return title;
	};

	w.Game.prototype.setTitle = function (value) {
		title = value;
	};
})(window);

var game = new Game('Who dares wins');
game.getTitle(); //Who dares wins
game.setTitle('Cabal');
game.getTitle(); //Cabal

var game2 = new Game('Ninja Turtles');
game.getTitle(); //Ninja Turtles
game2.getTitle(); //Ninja Turtles


//module pattern
var singleton = {
	property: 1,
	method: function () {
		/*code here*/
	}
};

var singleton = (function () {
	var privateVar = 10;
	function privateFunc() {
		return privateVar;
	}
	return {
		publicProp: true,
		publicMethod: function () {
			privateVar++;
			return privateFunc();
		}
	};
})();