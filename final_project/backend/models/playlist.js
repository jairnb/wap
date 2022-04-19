const playlists = [{ id: 1, userToken: '123654', songs: [1, 2] }]


module.exports = class Playlist {
    constructor(userToken, songs = []) {
        this.id = playlists.length + 1;
        this.userToken = userToken;
        this.songs = songs;
    }

    static save(item) {
        let play = new Playlist(item);
        playlists.push(play);
    }

    static get(userToken) {
        return playlists.find(p => p.userToken == userToken);
    }

    static addSongToPlaylist(item) {
        let playlist = playlists.find(p => p.id == item.playlistId);
        let song = playlist != undefined ? playlist.songs.find(s => s == item.songId) : undefined;
        if (song == undefined) {
            playlist.songs.push(item.songId);            
        }
    }

    static deleteSongFromPlaylist(item) {
        let playlist = playlists.find(p => p.id == item.playlistId);  
        let song = playlist != undefined ? playlist.songs.findIndex(s => s == item.songId) : undefined;
        if (song > -1) {
            playlist.songs.splice(song, 1);            
        }
    }
}