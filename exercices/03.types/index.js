//typeof ********************************
typeof NaN; //number
typeof null; //object
typeof []; //object
typeof /s/; //object
typeof function(){}; //function

//undefined  *******************************
var game;
console.log(game === undefined);  //true

//undefined vs undeclared
var game; //undefined
//var device; //not declared
console.log(game); //undefined
console.log(device); //error

//null  *************************************
null == undefined;
null === undefined;

//null vs undefined
var game; //this will work because of coercion
if(game != null){
	console.log('do something');
}

var game; //but check out this one...
if(game !== null){
	console.log('do something');
}

var game = null; //this will work no matter what operator you use to compare == or ===
if(game != null){
	console.log('do something');
}

//boolean **********************************
console.log(!!'blue'); //true

var game = 'golden axe';
if(game){
	console.log('do something');
}

//number  ***********************************
0.1 + 0.2 == 0.3; //0.30000000000000004 JS, C#, Java... IEEE-754 rounding issue.
var result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result));  // false

NaN*10; //NaN
NaN == NaN; //false
isNaN(NaN); //true
isNaN('blue'); //true

//casting
var num1 = Number('Hello world!'); //NaN
var num2 = Number(''); //0
var num3 = Number('000011'); //11
var num4 = Number(true); //1

+'1'; //1
+'blue'; //NaN

//radix
var num1 = parseInt('10', 2); //2 - parsed as binary
var num2 = parseInt('10', 8); //8 - parsed as octal
var num3 = parseInt('10', 10); //10 - parsed as decimal
var num4 = parseInt('10', 16); //16 - parsed as hexadecimal

//string ****************************************
var age = 11;
var ageAsString = age.toString(); //the string “11”
var found = true;
var foundAsString = found.toString(); //the string “true”

var num = 10;
alert(num.toString()); //”10”
alert(num.toString(2)); //”1010”
alert(num.toString(8)); //”12”
alert(num.toString(10)); //”10”
alert(num.toString(16)); //”a”


var value1 = 10;
var value2 = true;
var value3 = null;
var value4;
alert(String(value1)); //”10”
alert(String(value2)); //”true”
alert(String(value3)); //”null”
alert(String(value4)); //”undefined”

//object **************************************
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString examples of toLocaleString();