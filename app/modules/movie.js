const Show = require('../modules/show')

class Movie extends Show {
  constructor(name, genre, releaseDate, durationInSeconds) {
    super(name, genre, releaseDate, durationInSeconds);
  }

  getDuration() {
    return this.durationInSeconds;
  }
}

module.exports = Movie;