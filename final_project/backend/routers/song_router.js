const express = require('express');
const song_controller = require('../controllers/song_controller');

const router = express.Router();

router.get('/:id', song_controller.getById);

router.get('/', song_controller.getAll);

router.get('/play/:id', song_controller.playSong);

module.exports = router;