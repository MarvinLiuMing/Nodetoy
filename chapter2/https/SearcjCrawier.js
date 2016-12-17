var http = require('http');

var cheerio = require('../../chapter1/http/node_modules/cheerio');

var Promise = require('../promise/node_modules/bluebird/js/browser/bluebird');

var base = 'http://tieba.baidu.com/f?kw=dota2&ie=utf-8&pn='

var seachthing = '中国' 

var pageID = [0,50,100,150,200]

var htmlArr = [];
pageID.forEach(function(id)
{
	htmlArr.push(getPages(base + id))
})

Promise
	.all(htmlArr)
	.then(function(pagehtmlArr){

		var elements = []
		pagehtmlArr.forEach(function(pagehtml)
		{
			var element = filter(pagehtml)
			elements.push(element);
		})

		printCourseInfo(elements);
	})


function getPages(url)
{
	return new Promise
	(
		function(resolve,reject)
		{
			console.log('正在爬取...'+url);
			http.get(url,function(res)
			{
				var html = '';
				res.on('data',function(data){
					html += data;
				})

				res.on('end',function(){
					resolve(html)
				})

				res.on('error',function(e){
					resolve(e)
					console.log('-------error-------')
				})
			});
		}
	);
}

function filter(pagehtml)
{
	var $ = cheerio.load(pagehtml)
	var results = $('a[title*='+seachthing+']');
	var courseData = []
	// console.log(results)
	results.each(function(item){
		var elementInfo = {

	        title: $(this).attr('title'),

	        href: $(this).attr('href')

	    };

	    courseData.push(elementInfo)
	})
	// console.log('-----------------------------')
	// console.log(courseData)
	return courseData;
}

function printCourseInfo(courseData)
{
	// courseData.forEach(function(elementInfo)
	// {
	// 	console.log(elementInfo)
	// 	console.log('title:'+elementInfo.title)	
	// 	console.log('href:'+elementInfo.href+'\n')	
	// })

	courseData.forEach(function(elementInfo)
	{
		elementInfo.forEach(function(element){
			console.log('title:'+element.title)	
			console.log('href:'+base+element.href+'\n')	
		})
		
	})
}
