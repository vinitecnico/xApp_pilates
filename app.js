var express = require('express');
var app = express();

app.use(express.static(__dirname + '/view'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/js',  express.static(__dirname + '/js'));
app.use('/image',  express.static(__dirname + '/image'));
app.use('/css',  express.static(__dirname + '/css'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/view/cadastrarUser.html', function (req, res) {
   res.sendFile( __dirname + "/view/" + "cadastrarUser.html" );
})

app.get('/view/cadastrarAtividade.html', function (req, res) {
   res.sendFile( __dirname + "/view/" + "cadastrarAtividade.html" );
})

var server = app.listen(8081, function () {
   var host = 'localhost';
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})