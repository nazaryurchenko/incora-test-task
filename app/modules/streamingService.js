class StreamingService {
  name;
  shows = [];
  viewsByShowNames = new Map();

  constructor(name) {
    this.name = name;
  }

  addShow(show) {
    const isShowAlreadyAdded = this.shows.find((el) => el.name === show.name);

    if (isShowAlreadyAdded) {
      throw new Error('Show is already added');
    }

    this.viewsByShowNames.set(show.name, 0);
    this.shows.push(show);
  }

  getMostViewedShowsOfYear(year) {
    const showsWithViews = this.shows.map(show => {
      const views = this.viewsByShowNames.get(show.name);

      return { views, ...show };
    })

    return showsWithViews.filter(show => show.releaseDate.getFullYear() === year).sort((a, b) => b.views - a.views).slice(0, 10);
  }

  getMostViewedShowsOfGenre(genre) {
    const showsWithViews = this.shows.map(show => {
      const views = this.viewsByShowNames.get(show.name);

      return { views, ...show };
    })

    return showsWithViews.filter(show => show.genre === genre).sort((a, b) => b.views - a.views).slice(0, 10);
  }

  addViewToShow(showName) {
    const currentNumberViews = this.viewsByShowNames.get(showName);

    if (currentNumberViews === undefined) {
      throw new Error(`There isn't show with name: ${showName}`);
    }

    this.viewsByShowNames.delete(showName);
    this.viewsByShowNames.set(showName, currentNumberViews + 1);
  }
};

module.exports = StreamingService;