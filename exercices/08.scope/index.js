//scope & closures ********************************
function add(num1, num2) {
	var sum = num1 + num2;
	return sum;
}

function assignEvents() {
	var id = 'xdi9592';
	document.getElementById('save-btn').onclick = function (event) {
		saveDocument(id);
	};
}

//activation object of assignEvents doesn't get destroyed because a reference from the closure.

//no block scope
if (true) {
	var game = 'bomb jack';
}

console.log(game); //bomb jack

//closures and variables
function createFunctions() {
	var result = [];
	for (var i = 0; i < 10; i++) {
		result[i] = function () {
			return i; //this will be always the same value 10
		};
	}
	return result;
}

//solving it with another closure
function createFunctions() {
	var result = [];
	for (var i = 0; i < 10; i++) {
		result[i] = (function (num) {
			return function(){
				return num;
			};
		}(i));
	}
	return result;
}

//var hoisting
var varOut = 1;
function hello(){
	console.log(varOut); //undefined
	var varOut;
	varOut = 2;
	console.log(varOut);  //2
}
hello();