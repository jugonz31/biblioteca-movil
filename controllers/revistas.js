var mongoose = require('mongoose');
var Revista = mongoose.model('Revista');

//GET - Return all registers
exports.findAll = function(req, res) {
Revista.find(function(err, revistas) {
 if(err) res.send(500, err.message);
 console.log('GET /revistas')
 res.status(200).jsonp(revistas);
 });
};

//POST - Insert a new register
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var revista = new Revista({
    _id: req.body._id,
    datestamp: req.body.datestamp,
    fechaMod: req.body.fechaMod,
    title: req.body.title,
    subject: req.body.subject,
    espBlan1: req.body.espBlan1,
    publisher: req.body.publisher,
    type: req.body.type,
    clasification: req.body.clasification,
    NA: req.body.NA,
    language: req.body.language,
    tableOfContents: req.body.tableOfContents,
    description: req.body.description,
    matcodigo: req.body.matcodigo,
    idregistro: req.body.idregistro,
    coverage: req.body.coverage
 });
 revista.save(function(err, revista) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(revista);
 });
};