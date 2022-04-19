const Song = require('../models/song');

exports.getAll = (req, res, next) => {
    res.json(Song.getAll());
}

exports.getById = (req, res, next) => {
    res.json(Song.getById(req.params.id));
}