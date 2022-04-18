const express = require('express');
const user_controller = require('../controllers/user_controller');

const router = express.Router();


router.post('/', user_controller.save);

router.get('/', user_controller.getAll);


module.exports = router;