const express = require('express');
const path = require('path');

options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'products', 'index.html'));
});

router.get('/add', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'products', 'add.html'))
});

router.post('/add', (req, res, next) => {
    console.log(req.body);
    res.redirect('/products');
})

module.exports = router;