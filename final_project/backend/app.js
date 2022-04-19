const express = require('express');
const cors = require('cors');
const user_router = require('./routers/user_router');
const song_router = require('./routers/song_router');
const playlist_router = require('./routers/playlist_router');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.use('/users', user_router);

app.use('/songs', song_router);

app.use('/playlists', playlist_router);



app.listen(3000, () => {
    console.log('Running in port 3000');
})