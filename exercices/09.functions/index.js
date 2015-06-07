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
function sayNameForAll() {
	console.log(this.name);
}
var person1 = {
	name: 'Nicholas',
	sayName: sayNameForAll
};
var person2 = {
	name: 'Greg',
	sayName: sayNameForAll
};
var name = 'Michael';
person1.sayName(); // outputs 'Nicholas'
person2.sayName(); // outputs 'Greg'
sayNameForAll(); // outputs 'Michael'
