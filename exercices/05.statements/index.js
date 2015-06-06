//if ********************************
var b = true;
if (b) {
	console.log('true');
} else {
	console.log('false');
}

var n = 1;
if (n === 1) {
	console.log('1');
} else if (n === 2) {
	console.log('2');
} else {
	console.log('other');
}

//do-while  ****************************
var i = 0;
do {
    i += 2;
} while (i < 10);

//while  ****************************
var i = 0;
while (i < 10) {
	i += 2;
}

//for ****************************
var count = 10;
for (var i = 0; i < count; i++) {
	console.log(i);
}

var count = 10, i = 0;
for (i = 0; i < count; i++) {
	console.log(i);
}

for (var i = 0, len = 10; i < len; i++) {
	console.log(i);
}

for (; ;) { //infinite loop
	console.log('infinite loop running');
}

var count = 10;
var i = 0;
for (; i < count;) { //like a while
	console.log(i);
	i++;
}

//for in  ******************************
for (var propName in window) {
	console.log(propName);
}

for (var propName in window) {
	console.log(window[propName]);
}

//labels  ************************
start: for (var i = 0; i < 10; i++) {
	console.log(i);
}

//break ****************************
var num = 0;
for (var i = 1; i < 10; i++) {
	if (i % 5 == 0) {
		break;
	}
	num++;
}
console.log(num); //4

//continue ****************************
var num = 0;
for (var i = 1; i < 10; i++) {
	if (i % 5 == 0) {
		continue;
	}
	num++;
}
console.log(num); //8

//labels & break
var num = 0;
outermost:
for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if (i == 5 && j == 5) {
			break outermost;
		}
		num++;
	}
}
console.log(num); //55 instead of exiting to outer loop we exit outside the loops.

//with
with (location) {
	var qs = search.substring(1);
	var hostName = hostname;
	var url = href;
}

//switch
var i = 45;
switch (i) {
	case 25:
		console.log('25');
		break;
	case 35:
		console.log('35');;
		break;
	case 45:
		console.log('45');
		break;
	default:
		console.log('other');
}