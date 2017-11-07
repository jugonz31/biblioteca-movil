var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// Index - Route
app.get('/', function(req, res) { 
 res.send("Proyecto Integrador 1 - Biblioteca Móvil EAFIT");
});

// Start server
app.listen(process.env.PORT, function() {
    console.log('Node app is running on port',process.env.PORT);
  });