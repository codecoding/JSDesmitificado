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
(function(){
   'use strict';
	var title = 'Super Sprint';
	function getTitle(caller) { console.log(caller + ':' + this.title); }
	var game1 = { title: 'Pole Position' };
	var game2 = { title: 'Arkanoid' };
	
	getTitle.call(game1, 'game1'); // game1 : Pole Position
	getTitle.call(game2, 'game2'); // game2 : Arkanoid
	getTitle.call(this, 'Global'); //Global : Super Sprint 
	//En strict mode => this with no context is undefined, not window.
}());

//apply
var title = 'Super Sprint';
function getTitle(caller) { console.log(caller + ':' + this.title); }
var game1 = { title: 'Pole Position' };
var game2 = { title: 'Arkanoid' };

getTitle.apply(game1, ['game1']); // game1 : Pole Position
getTitle.apply(game2, ['game2']); // game2 : Arkanoid
getTitle.apply(this, ['Global']); //Global : Super Sprint 

//apply & arguments example
function superGamer(label){
	this.title='Phoenix';
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