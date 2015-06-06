//unary ********************************
var n = 1;
var r = ++n;  // n = 2, r = 2

var n = 1;
var r = n++;  // n = 2, r = 1

var n = 1;
var r = --n;  // n = 0, r = 0

var n = 1;
var r = n--;  // n = 0, r = 1

+'01'; //1
+'1.1'; //1.1
+'blue'; //NaN
+true; //1

-'01'; //-1
-'1.1'; //-1.1
-'blue'; //NaN
-true; //-1


// bitwise *******************************
//NOT
var n = 25;
var r = ~n;    // -26
var r = -n-1;  //-26

//AND
var result = 25 & 3; //1

//OR
var result = 25 | 3; //27;

//XOR
var result = 25 ^ 3; //26

//LEFT SHIFT
var oldValue = 2; //equal to binary 10
var newValue = oldValue << 5; //equal to binary 1000000 which is decimal 64

//SIGNED RIGHT SHIFT
var oldValue = 64; //equal to binary 1000000
var newValue = oldValue >> 5; //equal to binary 10 which is decimal 2

//UNSIGNED RIGHT SHIFT
var oldValue = 64; //equal to binary 1000000
var newValue = oldValue >>> 5; //equal to binary 10 which is decimal 2

// boolean ***************************************
//&&
var obj = {
	f: function(){console.log('hello');}
};
obj.f && obj.f(); //this will execute de f() if it exists

//||
var person = {
	name: 'Rob'
};
var person2 = person || {}; // {}


//FALSY
!!false;
!!0;
!!'';
!!null;
!!undefined;
!!NaN;

//TRUTHY
//everything else


//arithmetic **********************
NaN * NaN; //NaN
Infinity * 0; //NaN
Infinity * 2; //Infinity
Infinity * Infinity; //Infinity

NaN / NaN; //NaN
0 / 0; //NaN
Infinity / Infinity; //NaN
Infinity / 0; //Infinity
Infinity * 2; //Infinity

5 + '5'; //'55'

//relational
'a' < 3; //false because 'a' becomes NaN
NaN < 3;  //false
NaN >= 3; //false
'Casa' < 'autobus'; //true
'casa' < 'autobus'; //false, C char code is lower than c char.
'23' < '3'; //true, comparing chars
'23' < 3; //false, converting 23 to number

//equality
'55' == 55; //true - equal because of conversion
'55' === 55; //false - not equal because different data types

//conditional
true ? 1 : 2;  //1
false ? 1 : 2; //2