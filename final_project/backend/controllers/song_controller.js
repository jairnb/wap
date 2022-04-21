const path = require('path');
const fs = require('fs');
const Song = require('../models/song');

exports.getAll = (req, res, next) => {
    res.json(Song.getAll());
}

exports.getById = (req, res, next) => {
    res.json(Song.getById(req.params.id));
}

exports.getTitle = (req, res, next) => {
    res.json(Song.getTitle(req.params.id));
}

exports.search = (req, res, next) => {
    res.json(Song.search(req.query.title));
}

exports.playSong = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'songs', Song.getById(req.params.id).src));
    const src = fs.createReadStream(path.join(__dirname, '..', 'songs', Song.getById(req.params.id).src));
    src.pipe(res);
}

