const Song = require('../models/song');

exports.getAll = (req, res, next) => {
    res.json(Song.getAll());
}

exports.getById = (req, res, next) => {
    res.json(Song.getById(req.params.id));
}

exports.playSong = (req, res, next) => {
    let song = Song.find(s => s.id == req.params.id)
    res.sendFile(path.join(__dirname, '..', 'songs', song.src))
}