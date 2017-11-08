var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var methodOverride = require ('method-override');
var app = express();

// Conexión a la base de datos - MongoDB
MongoClient.connect('mongodb://biblio:bibliotecamovil7@ds149495.mlab.com:49495/biblioteca-movil', function(err, res){
  if (err) { 
    console.log (err);
  } else {
    console.log ('Connected to Database');
  }
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

// Importar modelos y controladores
var models = require('./models/book')(app, MongoClient);
var Book = require('./controllers/books');

var router = express.Router();
// Index - Route
router.get('/', function(req, res) { 
 res.send("[" + 
          "{" +
          "" + "\"__v\""+":"+ "\"0\""+"," +
          "" + "\"datestamp\"" + ":" + "\"19000101\""+"," + 
          "" + "\"title\"" + ":" + "\"Reloj de sol Gabriel Zaid\""+ "," + 
          "" + "\"creator\""+ ":" + "\"CADENA SILVA, CLAUDIA editor\""+"," + 
          "" + "\"subject\"" + ":" + "\"POESIA MEXICANA\"" +  
          "}"+ "," +
          "{" +
          "" + "\"__v\""+":"+ "\"1\""+"," +
          "" + "\"datestamp\"" + ":" + "\"19000102\""+"," + 
          "" + "\"title\"" + ":" + "\"El mago lo hizo otra vez\""+ "," + 
          "" + "\"creator\""+ ":" + "\"El mago Juan Pablo\""+"," + 
          "" + "\"subject\"" + ":" + "\"POESIA PAISA\"" +  
          "}"+ "," +
          "{" +
          "" + "\"__v\""+":"+ "\"2\""+"," +
          "" + "\"datestamp\"" + ":" + "\"19000103\""+"," + 
          "" + "\"title\"" + ":" + "\"El mago lo hizo otra vez 2.0\""+ "," + 
          "" + "\"creator\""+ ":" + "\"El mago Stiven\""+"," + 
          "" + "\"subject\"" + ":" + "\"POESIA PAISA\"" +  
          "}"+ 
          "]");
});

app.use(router);

// API routes

var api = express.Router();

api.route('/books')
  .get(Book.findAll)
  .post(Book.add)

api.route('/books/:id')
  .get(Book.findById)
  .put(Book.update)
  .delete(Book.delete)

app.use('/eafit', api);

// Start server
app.listen(process.env.PORT, function() {
    console.log('Node app is running on port',process.env.PORT);
  });