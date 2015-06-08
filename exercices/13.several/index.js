//generic currying
function curry(fn) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function () {
		var innerArgs = Array.prototype.slice.call(arguments),
			finalArgs = args.concat(innerArgs);
		return fn.apply(null, finalArgs);
	};
}

//throttle
function throttle(method, context) {
	clearTimeout(method.tId);
	method.tId = setTimeout(function () {
		method.call(context);
	}, 1000);
}