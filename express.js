var express  = require("express"),
app      = express(),
http     = require("http"),
server   = http.createServer(app),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var TVShowCtrl = require('./controllers/tvshows');

// API routes
var tvshows = express.Router();

tvshows.route('/tvshows')
  .get(TVShowCtrl.findAllTVShows)
  .post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')
  .get(TVShowCtrl.findById)
  .put(TVShowCtrl.updateTVShow)
  .delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);

var router = express.Router();

router.get('/', function(req, res) {
res.send("Hello World!");
});

app.use(router);

mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
if(err) {
console.log('ERROR: connecting to Database. ' + err);
}else{
console.log("Connected to Database");
}
app.listen(3000, function() {
console.log("Node server running on http://localhost:3000");
});
});