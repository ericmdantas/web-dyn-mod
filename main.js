;(function() {
	"use strict";
	
	import('./mod1.js')
		.then((mod1) => mod1.go1())
		.then(() => import('./mod2.js'))
		.then((mod2) => mod2.go2())
		.then(() => import('./mod3.js'))
		.then((mod3) => mod3.go3())
}())

