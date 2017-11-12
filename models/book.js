var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({ 
    datestamp: { type: String },
    creator: { type: String },
    subject: { type: String },
    library: { type: String },
    publisher: { type: String },
    type: { type: String },
    isbn: { type: String },
    clasification: { type: String },
    language: { type: String },
    description: { type: String },
    mat_codigo: { type: String },
    idregistro: { type: String },
    coverage: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);