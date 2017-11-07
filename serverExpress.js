var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// Index - Route
app.get('/', function(req, res) { 
 res.send("{" +
          "" + "__v"+":"+ "0"+"," +
          "" + "datestamp" + ":" + "19000101"+"," + 
          "" + "title" + ":" + "Reloj de sol /Gabriel Zaid"+ "," + 
          "" + "creator"+ ":" + "CADENA SILVA, CLAUDIA editor"+"," + 
          "" + "subject" + ":" + "POESIA MEXICANA" + "," + 
          "}");
});

// Start server
app.listen(process.env.PORT, function() {
    console.log('Node app is running on port',process.env.PORT);
  });