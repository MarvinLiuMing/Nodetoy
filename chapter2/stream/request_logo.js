var http = require('http')
var fs = require('fs')
var request = require('request')

http.
	createServer(function(req,res){
		// fs.readFile('Capture.png'function(err, data){
		// 	if(err){
		// 		res.end('file not exist')
		// 	}
		// 	else{
		// 		res.writeHeader(200,{'Cibtext_type':'text/html'})
		// 		res.end(data)
		// 	}
		// })
		// fs.createReadStream('Capture.png').pipe(res)
	request('http://www.imooc.com/static/img/index/logo.png').pipe(res)
	})
	.listen(8090)