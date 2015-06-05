//scope - local
function test() {
	var message = 'hola'; //local variable
}
test();
alert(message); //error!


//scope - global - error prone
function test() {
	message = 'hola'; //local variable
}
test();
alert(message); //hola!


//strict mode to the rescue
function test() {
	'use strict';
	message = 'hola'; //local variable
}
test();
alert(message); //error!


//multiple variable declaration
var position = 1,
	color = 'red',
	game = {
		cover: 123,
		name: 'double dragon'
	};
