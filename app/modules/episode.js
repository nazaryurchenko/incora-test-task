const Show = require('../modules/show');

class Episode extends Show {
    constructor(name, genre, releaseDate, durationInSeconds) {
        super(name, genre, releaseDate, durationInSeconds);
    }

    getDuration() {
        return this.durationInSeconds;
    }
}

module.exports = Episode;