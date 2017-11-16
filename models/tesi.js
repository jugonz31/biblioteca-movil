var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tesiSchema = new Schema({ 
    _id: {type: String },
    datestamp: { type: String },
    fechaMod: { type: String },
    title: { type: String },
    publisher: { type: String },
    type: { type: String },
    clasification: { type: String },
    language: { type: String },
    description: { type: String },
    tableOfContents: { type: String },
    espBlanco: { type: String },
    language: { type: String },
    description: { type: String },
    tableOfContents: { type: String },
    description2: { type: String },
    matcodigo: { type: String },
    idregistro: { type: String },
    coverage: { type: String }
});

module.exports = mongoose.model('Tesi', tesiSchema);