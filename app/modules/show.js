class Show {
	name;
	genre;
	releaseDate;
	durationInSeconds;

	constructor(name, genre, releaseDate, durationInSeconds) {
		this.name = name;
		this.genre = genre;
		this.releaseDate = releaseDate;
		this.durationInSeconds = durationInSeconds;
	}

	getDuration() { };
}

module.exports = Show;