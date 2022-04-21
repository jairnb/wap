const express = require('express');
const song_controller = require('../controllers/song_controller');

const router = express.Router();

router.get('/search', song_controller.search);

router.get('/get-title/:id', song_controller.getTitle);

router.get('/:id', song_controller.getById);

router.get('/play/:id', song_controller.playSong);

router.get('/', song_controller.getAll);

module.exports = router;