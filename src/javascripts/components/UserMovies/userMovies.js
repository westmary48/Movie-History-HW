import firebase from 'firebase/app';
import 'firebase/auth';

import userMovieData from '../../helpers/data/userMovieData';

import util from '../../helpers/util';

const createNewMovie = (e) => {
  e.preventDefault();
  const newMovie = {
    name: document.getElementById('name').value,
    uid: firebase.auth().currentUser.uid,
  };
  userMovieData.addNewMovie(newMovie)
    .then(() => {
      document.getElementById('name').value = '';
      document.getElementById('movies').classList.remove('hide');
      document.getElementById('new-movie').classList.add('hide');
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
