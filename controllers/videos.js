var mongoose = require('mongoose');
var Video = mongoose.model('Video');

//GET - Return all registers
exports.findAll = function(req, res) {
Video.find(function(err, videos) {
 if(err) res.send(500, err.message);
 console.log('GET /videos')
 res.status(200).jsonp(videos);
 });
};

//POST - Insert a new register
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var video = new Video({
    _id: req.body._id,
    datestamp: req.body.datestamp,
    lastupdate: req.body.lastupdate,
    title: req.body.title,
    creator: req.body.creator,
    subject: req.body.subject,
    publisher: req.body.publisher,
    type: req.body.type,
    na: req.body.na,
    identifier: req.body.identifier,
    na2: req.body.na2,
    language: req.body.language,
    abstract: req.body.abstract,
    na3: req.body.na3,
    description: req.body.description,
    tableOfContents: req.body.tableOfContents,
    periodicidad: req.body.periodicidad,
    mat_codigo: req.body.mat_codigo,
    idregistro: req.body.idregistro,
    coverage: req.body.coverage
 });
 video.save(function(err, video) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(video);
 });
};