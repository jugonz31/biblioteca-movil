var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partituraSchema = new Schema({ 
    _id: {type: String },
    datestamp: { type: String },
    fechaMod: { type: String },
    title: { type: String },
    creator: { type: String },
    subject: { type: String },
    publisher: { type: String },
    type: { type: String },
    clasification: { type: String },
    language: { type: String },
    abstract: { type: String },
    tableOfContents: { type: String },
    matcodigo: { type: String },
    idregistro: { type: String },
    coverage: { type: String }
});

module.exports = mongoose.model('Partitura', partituraSchema);