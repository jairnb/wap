const express = require('express');
const cors = require('cors');
const path = require('path');
const user_router = require('./routers/user_router');
const song_router = require('./routers/song_router');
const playlist_router = require('./routers/playlist_router');
const loginUser = require('./models/user');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, 'songs')));

app.use('/login', (req, res, next) => {
    res.status(200).json(loginUser.login(req.body));
});

app.use((req, res, next) => {
    let check_token = loginUser.users_arr.find(u => u.token == req.headers.token);
    if(check_token != undefined){
        next('route');
    }else{
        res.status(500).json({msg: 'error'});
    }
});

app.use('/users', user_router);

app.use('/songs', song_router);

app.use('/playlists', playlist_router);



app.listen(3000, () => { 
    console.log('Running in port 3000');
})