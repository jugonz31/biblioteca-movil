var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var libroSchema = new Schema({ 
    _id: {type: String },
    datestamp: { type: String },
    fechaMod: { type: String },
    title: { type: String },
    creator: { type: String },
    subject: { type: String },
    publisher: { type: String },
    type: { type: String },
    isbn: { type: String },
    clasification: { type: String },
    espBlanco: { type: String },
    language: { type: String },
    description: { type: String },
    tableOfContents: { type: String },
    espBlanco2: { type: String },
    description2: { type: String },
    matcodigo: { type: String },
    idregistro: { type: String },
    coverage: { type: String }
});

module.exports = mongoose.model('Libro', libroSchema);