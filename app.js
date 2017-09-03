const express = require('express');
var request = require('request');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){

var options = 
{

method:'GET',
url: 'https://jsonplaceholder.typicode.com/posts'

}

request(options, function (error, response, body) {
  
  var obj = JSON.parse(body);
 
  res.render('vista', {  "resultado" : obj } );

});
	
	 
	


})


app.listen('3000', ()=>{
	console.log("server started on port 3000");
});

