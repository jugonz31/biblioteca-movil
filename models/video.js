var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videoSchema = new Schema({ 
    _id: {type: String },
    datestamp: { type: String },
    lastupdate: { type: String },
    title: { type: String },
    creator: { type: String },
    subject: { type: String },
    publisher: { type: String },
    type: { type: String },
    na: { type: String },
    identifier: { type: String },
    na2: { type: String },
    language: { type: String },
    abstract: { type: String },
    na3: { type: String },
    description: { type: String },
    tableOfContents: { type: String },
    periodicidad: { type: String },
    mat_codigo: { type: String },
    idregistro: { type: String },
    coverage: { type: String }
});

module.exports = mongoose.model('Video', videoSchema);