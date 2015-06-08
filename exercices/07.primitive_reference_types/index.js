//reference types  ********************************
var items = new Array();
var now = new Date();
var error = new Error("Something bad happened.");
var func = new Function("console.log('Hi');");
var obj = new Object();
var re = new RegExp('\\d+');

//literal form
var items = [];
var obj = {};
var re = /d+/;
var func = function func() { console.log('Hi'); };

//dynamic properties 
//for reference types
var person = new Object();
person.name = 'Rob';
console.log(person.name);
//primitive types
var name = 'Rob';
name.age = 38;
console.log(name.age); //undefined.

//primitive wrappers
var s = 'hello';
s.toString();
s.split('');

var s1 = new String('Rob');
var s2 = s1.substring(2); //b
s1 = null;

var name = 'Rob';
var count = 10;
var found = false;
console.log(name instanceof String); // false
console.log(count instanceof Number); // false
console.log(found instanceof Boolean); // false

//eval
eval('console.log("hola")'); //hola

//window
var game = 'pang';
function getGame() {
	console.log(window.game);
}
window.getGame(); //'pang'


//passing arguments
function setName(person){
	person.name = 'Rob';
}

var person = new Object();
setName(person);
console.log(person.name);  //Rob


function setName2(person){
	person = new Object();
	person.name = 'Rob';
}

var person = new Object();
setName2(person);
console.log(person.name);  //undefined