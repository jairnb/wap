const express = require('express');
const path = require('path');
const productsRoute = require('./routers/products');
const usersRoute = require('./routers/users');
const app = express();
const my_exception = require('./exception');


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/products', productsRoute);
app.use('/users', usersRoute);


app.use('/', (req, res, next) => {
    req.url === '/' ?
        res.sendFile(path.join(__dirname, 'views', 'index.html')) :
        res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


// app.get('/', (req, res) => { 
//     throw new Error('Eror') // Express will catch this on its own.
// });
// app.use(my_exception);


app.use(function (err, req, res, next) {
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('Listem at 3000')
})
