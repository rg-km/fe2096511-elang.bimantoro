const Song = require('./song')
const Playlist = require('./playlist')

module.exports = class MusicPlayer {
    constructor(playlist) {
        this.playlist = playlist
    }

    addSong(song) {
        this.playlist.songs.push(song)
        // TODO: answer here
    }

    play() {
        // TODO: answer here
        let result = ''
        for (let i = 0; i == this.playlist.songs.length; i++) {
            return result}
        for (let song of this.playlist.songs) {
            let result = "Now Playing " + song.singer + " - " + song.title;
            if(this.playlist.isRepeatable) {
                return result;
            }
        }
        for (let song of this.playlist.songs) {
            this.playlist.songs.shift();
            return "Now Playing " + song.singer + " - " + song.title;
        }
    }
}