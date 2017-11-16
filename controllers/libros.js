var mongoose = require('mongoose');
var Libro = mongoose.model('Libro');

//GET - Return all registers
exports.findAll = function(req, res) {
Libro.find(function(err, libros) {
 if(err) res.send(500, err.message);
 console.log('GET /libros')
 res.status(200).jsonp(libros);
 });
};

//POST - Insert a new register
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var libro = new Libro({
    _id: req.body._id,
    datestamp: req.body.datestamp,
    fechaMod: req.body.fechaMod,
    title: req.body.title,
    creator: req.body.creator,
    subject: req.body.subject,
    publisher: req.body.publisher,
    type: req.body.type,
    isbn: req.body.isbn,
    clasification: req.body.clasification,
    espBlanco: req.body.espBlanco,
    language: req.body.language,
    description: req.body.description,
    tableOfContents: req.body.tableOfContents,
    espBlanco2: req.body.espBlanco2,
    description2: req.body.description2,
    matcodigo: req.body.matcodigo,
    idregistro: req.body.idregistro,
    coverage: req.body.coverage
 });
 libro.save(function(err, libro) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(libro);
 });
};