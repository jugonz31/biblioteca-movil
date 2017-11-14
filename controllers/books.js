var mongoose = require('mongoose');
var Book = mongoose.model('Book');

//GET - Return all registers
exports.findAll = function(req, res) {
 Book.find(function(err, books) {
 if(err) res.send(500, err.message);
 console.log('GET /books')
 res.status(200).jsonp(books);
 });
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
 Book.findById(req.params.id, function(err, book) {
 if(err) return res.send(500, err.message);
 console.log('GET /books/' + req.params.id);
 res.status(200).jsonp(book);
 });
};

//POST - Insert a new register
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var book = new Book({
    datestamp: req.body.datestamp,
    creator: req.body.creator,
    subject: req.body.subject,
    library: req.body.library,
    creator: req.body.creator,
    publisher: req.body.publisher,
    type: req.body.type,
    isbn: req.body.isbn,
    clasification: req.body.clasification,
    description: req.body.description,
    mat_codigo: req.body.mat_codigo,
    idregistro: req.body.idregistro,
    coverage: req.body.coverage
 });
 book.save(function(err, book) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(book);
 });
};

//PUT - Update a register already exists
exports.update = function(req, res) {
 Book.findById(req.params.id, function(err, book) {
 book.datestamp = req.body.datestamp;
 book.creator = req.body.creator;
 book.subject = req.body.subject;
 book.library = req.body.library;
 creator = req.body.creator;
 publisher = req.body.publisher;
 type = req.body.type;
 isbn = req.body.isbn;
 clasification = req.body.clasification;
 description = req.body.description;
 mat_codigo = req.body.mat_codigo;
 idregistro = req.body.idregistro;
 coverage = req.body.coverage;
 book.save(function(err) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(book);
 });
 });
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
 Book.findById(req.params.id, function(err, book) {
 book.remove(function(err) {
 if(err) return res.send(500, err.message);
 res.json({ message: 'Book successfully deleted' });
 });
 });
};