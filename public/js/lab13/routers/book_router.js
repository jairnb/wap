const express = require('express');
const book_controller = require('../controllers/book_controller');

const router = express.Router();

router.get('/', book_controller.getAll);

router.get('/:id', book_controller.get);

router.post('/', book_controller.save);

router.put('/:id', book_controller.update);

router.delete('/:id', book_controller.delete);

module.exports = router;