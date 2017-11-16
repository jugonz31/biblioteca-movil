var mongoose = require('mongoose');
var Tesis = mongoose.model('Tesis');

//GET - Return all registers
exports.findAll = function(req, res) {
 Tesis.find(function(err, tesis) {
 if(err) res.send(500, err.message);
 console.log('GET /tesis')
 res.status(200).jsonp(tesis);
 });
};

//POST - Insert a new register
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var tesis = new Tesis({
    _id: req.body._id,
    datestamp: req.body.datestamp,
    fechaMod: req.body.fechaMod,
    title: req.body.title,
    publisher: req.body.publisher,
    type: req.body.type,
    clasification: req.body.clasification,
    language: req.body.language,
    description: req.body.description,
    tableOfContents: req.body.tableOfContents,
    description2: req.body.description2,
    matcodigo: req.body.matcodigo,
    idregistro: req.body.idregistro,
    coverage: req.body.coverage
 });
 tesis.save(function(err, tesis) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(tesis);
 });
};