var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views','./views')
app.set('view engine','jade')
app.listen(port)

app.get('/',function(req,res){
	res.render('index',{title:'Marvin index'})
})

app.get('/movie/:id',function(req,res){
	res.render('detail',{title:'Marvin detail'})
})

app.get('/admin/movie',function(req,res){
	res.render('admin',{title:'Marvin admin'})
})

app.get('/admin/list',function(req,res){
	res.render('list',{title:'Marvin list'})
})