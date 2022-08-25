const Episode = require('./app/modules/episode');
const Movie = require('./app/modules/movie');
const Series = require('./app/modules/series')
const StreamingService = require('./app/modules/StreamingService');
const Subscription = require('./app/modules/subscription');
const User = require('./app/modules/user');

// movies
const harryPoter = new Movie('Harry Poter', 'Fantasy', new Date(Date.now() - 12000 * 65420 * 1000), 6000);
const theGodfather = new Movie('The Godfather', 'Thriller', new Date(Date.now() - 12000 * 1000 * 1000), 7400);
const resurrection = new Movie('Resurrection', 'Action', new Date(Date.now() - 12000 * 90000 * 1000), 6050);
const goodFellas = new Movie('GoodFellas', 'Drama', new Date(Date.now() - 12000 * 68000 * 1000), 6200);
const cityLights = new Movie('City Lights', 'Thriller', new Date(Date.now() - 12000 * 68000 * 1000), 8000);
const theShining = new Movie('The Shining', 'Action', new Date(Date.now() - 12000 * 37000 * 1000), 7600);

// series
const breakingBad = new Series('Breaking Bad', 'Thriller', new Date(Date.now() - 12000 * 52300 * 1000), 3000);
const peakyBlinders = new Series('Peaky Blinders', 'Action', new Date(Date.now() - 12000 * 46400 * 1000), 2800);
const theLastKingdom = new Series('The last Kingdom', 'Drama', new Date(Date.now() - 12000 * 68600 * 1000), 3020);
const ozark = new Series('Ozark', 'Fantasy', new Date(Date.now() - 12000 * 9100 * 1000), 3500);
const anatomyOfScandal = new Series('Anatomy of a scandal', 'Drama', new Date(Date.now() - 12000 * 12000 * 1000), 2000);

// episodes
const goalOfTheSeason = new Episode('Goal of the season', 'Sport', new Date(Date.now() - 12000 * 500 * 1000), 120);
const bestJoke = new Episode('The best joke', 'Comedy', new Date(Date.now() - 12000 * 46330 * 1000), 35);
const horrorMoment = new Episode('The horror moment', 'Horror', new Date(Date.now() - 12000 * 68110 * 1000), 125);
const explosion = new Episode('Explosion', 'Action', new Date(Date.now() - 12000 * 220 * 1000), 100);

// streaming services
const netflix = new StreamingService('netflix');
const youtube = new StreamingService('youtube');
const megogo = new StreamingService('megogo');
const ollTV = new StreamingService('Oll TV');
const appleTV = new StreamingService('Apple TV');

// users
const nazar = new User('Nazar');
const ostap = new User('Ostap');
const katya = new User('Katya');

// subscriptions
const netflixPremium = new Subscription('netflixPremium', netflix);
const youtubePremium = new Subscription('youtubePremium', youtube);
const megogoPlus = new Subscription('megogoPlus', megogo);
const megogoStandard = new Subscription('megogoStandard', megogo);
const netflixStudent = new Subscription('netflixStudent', netflix);
const ollTVMovies = new Subscription('ollTVMovies', ollTV);
const youtubeStandard = new Subscription('youtubeStandard', youtube);
const ollTVFamily = new Subscription('ollTVFamily', ollTV);
const appleTVPlus = new Subscription('appleTVPlus', appleTV);
const appleTVStudent = new Subscription('appleTVStudent', appleTV);

// netflix list
netflix.addShow(harryPoter);
netflix.addShow(theGodfather);
netflix.addShow(goalOfTheSeason);
netflix.addShow(ozark);

// youtube list
youtube.addShow(peakyBlinders);
youtube.addShow(ozark);
youtube.addShow(explosion);

// megogo list
youtube.addShow(theShining);
youtube.addShow(anatomyOfScandal);

// olltv list
ollTV.addShow(bestJoke);
ollTV.addShow(theShining);

// appletv list
appleTV.addShow(breakingBad);
appleTV.addShow(horrorMoment);

// method subscribe(streamingService)
nazar.subscribe(netflixPremium);
nazar.subscribe(megogoStandard);
katya.subscribe(ollTVFamily);
ostap.subscribe(megogoPlus);

// method watch(showName)
netflixPremium.watch('Harry Poter');
console.log(netflix.viewsByShowNames); //  'Harry Poter' => 1
netflixPremium.watch(goalOfTheSeason.name);
netflixPremium.watch(goalOfTheSeason.name);
console.log(netflix.viewsByShowNames); // 'Goal of the season' => 2

// method getRecommendationTrending()
console.log(netflixPremium.getRecommendationTrending()); // releaseDate: 2022

// method getRecommendationByGenre(genre)
console.log(appleTVPlus.getRecommendationByGenre('Thriller')); // 'Breaking Bad'

// method getMostViewedShowsOfYear(year)
console.log(netflix.getMostViewedShowsOfYear(1997)); // views: 1,  name: 'Harry Poter'

// method getMostViewedShowsOfGenre(genre)
console.log(netflix.getMostViewedShowsOfGenre('Fantasy'));

// method getDuration()
console.log(harryPoter.getDuration()); // 6000

// Have a good day :)
