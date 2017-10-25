var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Connection to DB
mongoose.connect('mongodb://localhost/clients', function(err, res) {
 if(err) throw err;
 console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());

// Import Models and Controllers
var models = require('./models/book')(app, mongoose);
var ClientCtrl = require('./controllers/books');

var router = express.Router();

// Index - Route
router.get('/', function(req, res) { 
 res.send("Hello World!");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/books') 
 .get(ClientCtrl.findAll)
 .post(ClientCtrl.add);

api.route('/books/:id') 
 .get(ClientCtrl.findById)
 .put(ClientCtrl.update)
 .delete(ClientCtrl.delete);

app.use('/eafit', api);


// Start server
app.listen(3000, function() {
 console.log("Node server running on http://localhost:3000");
});