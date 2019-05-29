import movieData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

const moviePrint = (uid) => {
  movieData.getMovieByUid(uid).then((movie) => {
    let domString = `<h1>${movie.title}</h1>`;
    domString += `<img src=${movie.imageUrl} />`;
    domString += `<h2>${movie.genre}</h2>`;
    domString += `<h2>${movie.movieRatingId}</h2>`;
    domString += '<button class = "btn btn danger">Add Button</button>';
    util.printToDom('movies', domString);
  }).catch(err => console.error('could not get movie', err));
};

export default { moviePrint };
