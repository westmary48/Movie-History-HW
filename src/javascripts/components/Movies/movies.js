// import firebase from 'firebase/app';
// import 'firebase/auth';

import movieData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import 'bootstrap';

const moviePrint = (uid) => {
  movieData.getMovieByUid(uid).then((movies) => {
    let domString = '';
    movies.forEach((movie) => {
      domString += '<div class="col-lg-4 col-md-3 col-sm-6">';
      domString += '<div class="card text-center">';
      domString += '<div class = "card-header">Movies</div>';
      domString += `<img  class = "card-img-top" src=${movie.imageUrl} />`;
      domString += `<div class = "card-title">${movie.title}</div>`;
      domString += '<div class="card-body">';
      domString += `<h2>${movie.genre}</h2>`;
      domString += `<h2>${movie.movieRatingId}</h2>`;
      domString += `<a href="#" id = "${movie.id}" class ="btn btn-info watchList">Watchlist</a>`;
      domString += `<a href="#" id = "${movie.id}" class ="btn btn-info rating">Add Rating</a>`;
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    });
    util.printToDom('movies', domString);
  }).catch(err => console.error('could not get movie', err));
};

export default { moviePrint };
