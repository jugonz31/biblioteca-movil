var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var revistaSchema = new Schema({ 
    _id: {type: String },
    datestamp: { type: String },
    fechaMod: { type: String },
    title: { type: String },
    subject: { type: String },
    espBlan1: { type: String },
    publisher: { type: String },
    type: { type: String },
    clasification: { type: String },
    NA: { type: String },
    language: { type: String },
    tableOfContents: { type: String },
    description: { type: String },
    matcodigo: { type: String },
    idregistro: { type: String },
    coverage: { type: String }
});

module.exports = mongoose.model('Revista', revistaSchema);