var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');
var db = require('mongoose');
var methodOverride = require ('method-override');
var app = express();

// Conexión a la base de datos - MongoDB
db.connect("mongodb://biblioteca:bibliotecamovil7@ds149495.mlab.com:49495/biblioteca-movil", function(err, res){
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
var models = require('./models/libro')(app, db);
var models1 = require('./models/partitura')(app, db);
var models2 = require('./models/tesi')(app, db);
var models3 = require('./models/revista')(app, db);
var models4 = require('./models/video')(app, db);
var Libro = require('./controllers/libros');
var Partitura = require('./controllers/partituras');
var Tesi = require('./controllers/tesis');
var Revista = require('./controllers/revistas');
var Video = require('./controllers/videos');

var router = express.Router();

// Index - Route
app.get('/', function(req, res) { 
 res.send("Biblioteca Móvil EAFIT - Proyecto Integrador 1");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/partituras')
  .get(Partitura.findAll)
  .post(Partitura.add)

api.route('/tesis')
  .get(Tesi.findAll)
  .post(Tesi.add)

api.route('/revistas')
  .get(Revista.findAll)
  .post(Revista.add)

api.route('/videos')
  .get(Video.findAll)
  .post(Video.add)

api.route('/libros')
  .get(Libro.findAll)
  .post(Libro.add)

app.use('/eafit', api);

// Arrancar el servidor en Heroku App
app.listen(process.env.PORT, function() {
    console.log('Node app is running on port',process.env.PORT);
  });