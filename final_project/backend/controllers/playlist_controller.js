const Playlist = require('../models/playlist');

exports.getPlaylist = (req, res, next) => {
    res.json(Playlist.get(req.params.userToken))
}

exports.save = (req, res, next) => {
    res.json(Playlist.save(req.body));
}

exports.addSongToPlaylist = (req, res, next) => {
    res.json(Playlist.addSongToPlaylist(req.body));
}

exports.deleteSongFromPlaylist = (req, res, next) => {
    res.json(Playlist.deleteSongFromPlaylist(req.body));
}