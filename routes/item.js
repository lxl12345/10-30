var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var connection = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: '123456',
		database:'new'
	})
router.get('/list',function(req,res,next){
	connection.query('SELECT * FROM new_table',function(err,row
	,fields){
		res.header('Access-Control-Allow-Origin', "*")
		res.send(row)
	})
})
router.post('/detail',function(req,res,next){
	var id=req.body.id;
	connection.query(`SELECT * FROM new_table WHERE id=${id}`,function(err,row
	,fields){
		res.header('Access-Control-Allow-Origin', "*")
		res.send(row)
	})
})
module.exports = router;