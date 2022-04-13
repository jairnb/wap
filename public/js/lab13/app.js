const express = require('express');
const book_router = require('./routers/book_router');

const app = express();

app.use(express.json());

app.use('/books', book_router);


app.listen(3000, () => {
    console.log('Listening at 3000')
})