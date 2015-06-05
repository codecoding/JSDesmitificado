/// <reference path="../typings/node/node.d.ts"/>
'use strict';
var utils = require('./utils'),
	echo = utils.echo;

var o = {
	k: '',
	a: [1, 2, 3, 4]
};

function create2(parent) {
	function F() { };
	F.prototype = parent;
	return new F();
}

var oo = Object.create(o);
var ooo = create2(o);

echo(oo == ooo);
echo(oo === ooo);


(function () {
	'use strict';
	function test() {
		message = 'hola'; //local variable
	}
	test();
	alert(message); //error!
} ());
