//objects ********************************

//properties

//data properties
var book = {};

Object.defineProperty(book, 'name', {
	configurable: true, //default false
	enumerable: true,  //default false
	writable: true,     //default false
	value: 'Ulises'
});

//accesor properties
var book = {
	__year: 2004
};

Object.defineProperty(book, 'year', {
	get: function () {
		return 'year: ' + this.__year;
	},
	set: function (newValue) {
		this.__year = newValue;
	}
});


//augmented accesor
var book = {};

Object.defineProperty(book, {
	__year: {
		value: 2004
	},
	year: {
		get: function () {
			return 'year: ' + this.__year;
		},
		set: function (newValue) {
			this.__year = newValue;
		}
	}
});

//descriptors
var descriptor = Object.getOwnPropertyDescriptor(book, '_year');
console.log(descriptor.value); //2004
console.log(descriptor.configurable); //false
console.log(typeof descriptor.get); //'undefined'

var descriptor = Object.getOwnPropertyDescriptor(book, 'year');
console.log(descriptor.value); //undefined
console.log(descriptor.enumerable); //false
console.log(typeof descriptor.get); //'function'

Object.defineProperty(book, 'name', {
	writable: false,
	value: 'Rob'
});

for (var p in book) {
	console.log(p);
}

//detecting properties
//unreliable. falsy won't work ok.
if (book.year) {
	/*code here */
}

//correct
if ('year' in book) {
	/*code here */
}

if (book.hasOwnProperty('year')) {
	/*code here */
}

//preventing extension
//not extensible but the properties are configurable.
var book={ title: 'Lord of the rings'};
Object.preventExtensions(book);
book.k=1;
book.k; //undefined
Object.isExtensible(book); //false

//sealed
var book={ title: 'Lord of the rings'};
Object.seal(book);
Object.isSealed(book); //true
Object.isExtensible(book); //false
// not extensible nor configurable