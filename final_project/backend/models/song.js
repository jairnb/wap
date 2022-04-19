const songs = [
    { id: 1, title: 'Alicia Keys - City Of Gods', releaseDate: new Date(), src: "../songs/one.mp3"},
    { id: 2, title: 'Rick Ross - Port of Miami 2', releaseDate: new Date(), src: "../songs/two.mp3"},
    { id: 3, title: 'Rihanna - Loaver', releaseDate: new Date(), src: "../songs/three.mp3"},
];

module.exports = class Song {
    constructor(title, releaseDate, src) {
        this.id = songs.length + 1;
        this.title = title;
        this.releaseDate = releaseDate;
        this.src = src;
    }

    static getAll() {
        return songs;
    }
     
    static getById(id) {
        return songs.find( s => s.id == id);
    }
}