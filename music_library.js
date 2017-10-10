class Track {
    constructor(title, rating, length) {
        this.title = title;
        this.rating = rating;
        this.length = length;
    }
}

const trackOne = new Track('This song', 8, 136);
console.log(trackOne);
const trackTwo = new Track('Is a really cool song', 8, 285);
console.log(trackTwo);

class Playlist {
    constructor(name) {
        this.name = name;
        this.tracks = [];
    }
    overallRating() {
        return this.tracks.reduce((a, b) => {
            return a.rating + b.rating;
        });
    }
    totalDuration() {
        return this.tracks.reduce((a, b) => {
            return a.length + b.length;
        });
    }
}

const newPlaylist = new Playlist('My Playlist');

class Library {
    constructor(name, creator) {
        this.name = name;
        this.creator = creator;
        this.playlists = [];
    }
}

const newLibrary = new Library('Library', 'Bob');

function addTrackToPlaylist(track, playlist) {
    playlist.tracks.push(track);
}

addTrackToPlaylist(trackOne, newPlaylist);
addTrackToPlaylist(trackTwo, newPlaylist);


function addPlaylist(library, playlist) {
    library.playlists.push(playlist);
}

addPlaylist(newLibrary, newPlaylist);