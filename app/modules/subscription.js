class Subscription {
	streamingService;
	typeOfSubscription;

	constructor(typeOfSubscription, streamingService) {
		this.typeOfSubscription = typeOfSubscription;
		this.streamingService = streamingService;
	}

	watch(showName) {
		this.streamingService.addViewToShow(showName);

		return this.streamingService.shows.find(show => show.name === showName);
	}

	getRecommendationTrending() {
		const shows = this.streamingService.getMostViewedShowsOfYear(new Date(Date.now()).getFullYear());
		const randomNumber = Math.ceil(Math.random() * shows.length - 1);

		return shows[randomNumber];
	}

	getRecommendationByGenre(genre) {
		const shows = this.streamingService.getMostViewedShowsOfGenre(genre);
		const randomNumber = Math.ceil(Math.random() * shows.length - 1);

		return shows[randomNumber];
	}
}

module.exports = Subscription;