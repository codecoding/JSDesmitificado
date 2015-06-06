//function  ********************************
function hello() {
	console.log('hello world!');
}

function sum(num1, num2) {
	return num1 + num2;
	console.log('hello world!'); //never executed
}

//several return
function diff(num1, num2) {
	if (num1 < num2) {
		return num2 - num1;
	} else {
		return num1 - num2;
	}
}

//automatic ; insertion example
function f() {
	var obj = 2;
	return
	obj;
}

//https://www.youtube.com/watch?v=hQVTIJBZook
//32:39

//arguments
function f(val) {
	console.log(arguments);
	console.log(typeof arguments);
	console.log(arguments.length);
}
f(1, 2);

//enum like ... arguments
var F;
(function (F) {
    F[F["one"] = 0] = "one";
    F[F["two"] = 1] = "two";
})(F || (F = {}));

//overloading -- doesn't exist
function addSomeNumber(num) {
	return num + 100;
}
function addSomeNumber(num) {
	return num + 200;
}
addSomeNumber(100); //300