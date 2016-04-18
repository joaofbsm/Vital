var http = require('http'),
    express = require('express'),
    path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('<html><body><h1>Welcome to VITAL Supplier Server</h1><br /><a href="vitalDB.html">Vital Database</a></body></html>');
}); 

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
 
console.log('VITAL Supplier Server running on port 3000. \nGo to localhost:3000/vitalDB.html for database info\n');