import firebase from 'firebase/app';
import 'firebase/auth';

import moviesData from '../../helpers/data/moviesData';

import util from '../../helpers/util';
import movies from '../Movies/movies';

const createNewMovie = (e) => {
  e.preventDefault();
  const newMovie = {
    name: document.getElementById('name').value,
    uid: firebase.auth().currentUser.uid,
  };
  moviesData.addNewMovie(newMovie)
    .then(() => {
      document.getElementById('name').value = '';
      document.getElementById('movies').classList.remove('hide');
      document.getElementById('new-movie').classList.add('hide');
      movies.moviePrint(newMovie);
    })
    .catch(err => console.error('no new movie for you', err));
};

const newMovieButton = () => {
  document.getElementById('movies').classList.add('hide');
  document.getElementById('new-movie').classList.remove('hide');
  document.getElementById('saveNewMovie').addEventListener('click', createNewMovie);
};

const showMovies = () => {
  const domString = '<button id="add-movies-button" class="btn btn-info">Add Movie</button>';
  util.printToDom('userMovie', domString);
  document.getElementById('add-movies-button').addEventListener('click', newMovieButton);
};

export default { showMovies };
