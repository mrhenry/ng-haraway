var Haraway = require("lib/index");
var ng = require("angular");
var app = ng.module('app', [Haraway.default]);

app.run(function(){
	console.log("Hello");
});
