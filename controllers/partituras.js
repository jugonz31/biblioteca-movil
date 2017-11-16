var mongoose = require('mongoose');
var Partitura = mongoose.model('Partitura');

//GET - Return all registers
exports.findAll = function(req, res) {
    Partitura.find(function(err, partituras) {
 if(err) res.send(500, err.message);
 console.log('GET /partituras')
 res.status(200).jsonp(partituras);
 });
};

//POST - Insert a new register
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var partitura = new Partitura({
    _id: req.body._id,
    datestamp: req.body.datestamp,
    fechaMod: req.body.fechaMod,
    title: req.body.title,
    creator: req.body.creator,
    subject: req.body.subject,
    publisher: req.body.publisher,
    type: req.body.type,
    clasification: req.body.clasification,
    language: req.body.language,
    abstract: req.body.abstract,
    tableOfContents: req.body.tableOfContents,
    matcodigo: req.body.matcodigo,
    idregistro: req.body.idregistro,
    coverage: req.body.coverage
 });
 partitura.save(function(err, partitura) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(partitura);
 });
};