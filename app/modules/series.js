const Show = require('../modules/show');

class Series extends Show {
  episodes;

  constructor(name, genre, releaseDate, durationInSeconds) {
    super(name, genre, releaseDate, durationInSeconds);
  }

  getDuration() {
    return this.durationInSeconds;
  }
}

module.exports = Series;