var http = require('http')
var querystring  = require('querystring')

var postData = querystring.stringify({
    ctl32$ctl04$ctl03$txtValue:239
})

var options = {
	hostname:'dprmlocws1',
	prot:80,
	path:'/Reports/Pages/Report.aspx?ItemPath=%2fOTPReports%2fCaptureUploadingReport',
	method:'POST',
	headers:{
		 'postman-token': '29ba2f12-96ca-c8e8-c674-4429c83bd57c',
     	 'x-microsoftajax': 'Delta=true',
     	 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36',
	     referer: 'http://dprmlocws1/Reports/Pages/Report.aspx?ItemPath=%2fOTPReports%2fCaptureUploadingReport',
	     origin: 'http://dprmlocws1',
	     host: 'dprmlocws1',
	     'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
	     'content-length': postData.length,
	     connection: 'keep-alive',
	     'cache-control': 'no-cache',
	     'accept-language': 'en-US,en;q=0.8',
	     'accept-encoding': 'gzip, deflate',
	     accept: '*/*' }
	}

var req = http.request(options,function(res){
	console.log('Status: '+res.statusCode)
	console.log('Status: '+JSON.stringify(res.headers))

	res.on('data', function(chunk){
		console.log('data： '+chunk)
	})
	res.on('end',function(){
		console.log('end')
	})

	res.on('error',function(){
		console.log('!!!error!!!')
	})

})

req.write(postData)

req.end();