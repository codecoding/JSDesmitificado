
//getScript (improved) *****************************************************
function getScript(url, callback) {
	if(document.querySelector('script[src="' + url + '"]')) {
		callback && callback();
		return;
	}
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	script.onload = function () {
		callback && callback();
	};
	document.getElementsByTagName('head')[0].appendChild(script);
}

//dynamic loading *****************************************
var script = document.createElement('script');
script.type='text/javascript';
script.src ='https://code.jquery.com/jquery-2.1.4.min.js';
script.onload = function(){console.log('loaded');};
document.getElementsByTagName('head')[0].appendChild(script);


//hack ******************************
location.href="javascript:var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='http://erkie.github.com/asteroids.min.js';void(0);";


//XHR *******************************
var xhr = new XMLHttpRequest();
xhr.open('get', 'myremotefile.js', true);
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4){
		if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.text = xhr.responseText;
			document.body.appendChild(script);
		}
	}
};
xhr.send(null);

//preloading **************************
//image beacon
function preload(src){
	new Image().src='https://code.jquery.com/jquery-2.1.4.min.js';
}

//object
var obj = document.createElement('object');
obj.data = 'https://code.jquery.com/jquery-2.1.4.min.js';
obj.height = obj.width = '0';
document.body.appendChild(obj);


//install http-server and use it for exercices
/*
npm install http-server -g
http-server .
let's make some exercices following the slides
1. dynamic loading
2. lazy loading
3. getScript
4. hack
5. XHR
*/