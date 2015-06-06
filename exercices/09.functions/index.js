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