const express = require('express');
const playlist_controller = require('../controllers/playlist_controller');

const router = express.Router();

router.get('/:userToken', playlist_controller.getPlaylist);

router.post('/add-song-to-playlist', playlist_controller.addSongToPlaylist);

router.delete('/delete-song-from-playlist', playlist_controller.deleteSongFromPlaylist);

router.post('/', playlist_controller.save);




module.exports = router;