const express = require('express');
const user_router = require('./routers/user_router')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.use('/users', user_router);




app.listen(3000, () => {
    console.log('Running in port 3000');
})