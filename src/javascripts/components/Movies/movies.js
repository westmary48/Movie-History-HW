import movieData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import 'bootstrap';

const moviePrint = (uid) => {
  movieData.getMovieByUid(uid).then((movies) => {
    let domString = '';
    movies.forEach((movie) => {
      domString += `<h1>${movie.title}</h1>`;
      domString += `<img src=${movie.imageUrl} />`;
      domString += `<h2>${movie.genre}</h2>`;
      domString += `<h2>${movie.movieRatingId}</h2>`;
      domString += '<button class ="btn btn-info">Add Button</button>';
      domString += '<button class ="btn btn-info">Add Rating</button>';
    });
    util.printToDom('movies', domString);
  }).catch(err => console.error('could not get movie', err));
};

export default { moviePrint };
