var c = 0;
function print(){
	console.log(c)
}

function plus(callback){
	setTimeout(function(){
		c += 1
        callback()
	},5000)
}

plus(print)