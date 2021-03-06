import firebase from 'firebase/app';
import 'firebase/auth';

import moviesData from '../../helpers/data/moviesData';
import userMovieData from '../../helpers/data/userMovieData';

import util from '../../helpers/util';
import movies from '../Movies/movies';

const createNewMovie = (e) => {
  e.preventDefault();
  const newMovie = {
    title: document.getElementById('title').value,
    genre: document.getElementById('genre').value,
    imageUrl: document.getElementById('imageUrl').value,
    movieRatingId: document.getElementById('movieRatingId').value,
    uid: firebase.auth().currentUser.uid,
  };
  moviesData.addNewMovie(newMovie)
    .then(() => {
      document.getElementById('genre').value = '';
      document.getElementById('imageUrl').value = '';
      document.getElementById('title').value = '';
      document.getElementById('movieRatingId').value = '';
      document.getElementById('movies').classList.remove('hide');
      document.getElementById('new-movie').classList.add('hide');
      movies.moviePrint(newMovie);
      console.error('mary', movies.moviePrint(newMovie));
    })
    .catch(err => console.error('no new movie for you', err));
};

const newMovieButton = () => {
  document.getElementById('movies').classList.add('hide');
  document.getElementById('new-movie').classList.remove('hide');
  document.getElementById('saveNewMovie').addEventListener('click', createNewMovie);
};


const deleteMoviesEvent = (e) => {
  const getMovieByUid = moviesData.getMovieByUid();
  const movieId = e.target.id;
  moviesData.deleteMovie(movieId)
    .then(() => getMovieByUid(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
    .catch(error => console.error('delete does not work', error));
};

const addEvents = () => {
  document.getElementById('add-movies-button').addEventListener('click', newMovieButton);
  const deleteButtons = document.getElementsByClassName('delete-friend');
  for (let i = 0; i < deleteButtons.length; i += 1) {
    deleteButtons[i].addEventListener('click', deleteMoviesEvent);
  }
};
const showMovies = () => {
  const domString = '<button id="add-movies-button" class="btn btn-info">Add Movie</button>';
  util.printToDom('userMovie', domString);
  document.getElementById('add-movies-button').addEventListener('click', newMovieButton);
};


const getMovies = (uid) => {
  userMovieData.getUserMoviesByUid(uid)
    .then((userMovies) => {
      movies.getMovieByUid(uid).then((userMovie) => {
        showMovies(userMovie.id);
      });
    })
    .catch(err => console.error('no friends', err));
};

export default { showMovies, getMovies };
