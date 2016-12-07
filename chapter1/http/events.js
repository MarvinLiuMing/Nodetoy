var EventEmitter = require('events').EventEmitter

var life = new EventEmitter();


life.on('hit',function(name){
	console.log(name+'crap!');
})

life.addListener('hit',function(name){
	console.log(name+'cra!!!');
})

life.emit('hit','O!')