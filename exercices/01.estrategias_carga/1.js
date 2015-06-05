
//getScript mejorada *****************************************************
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

//carga manual *****************************************
var script = document.createElement('script');
script.type='text/javascript';
script.src ='https://code.jquery.com/jquery-2.1.4.min.js';
script.onload = function(){console.log('loaded');};
document.getElementsByTagName('head')[0].appendChild(script);


//hack ******************************
location.href="javascript:var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='http://erkie.github.com/asteroids.min.js';void(0);";

//instalar http-server y usarlo para pruebas
/*
npm install http-server -g
http-server .
hacer pruebas siguiendo los slides
1. carga dinámica
2. lazy loading
3. getScript
4. hack
*/