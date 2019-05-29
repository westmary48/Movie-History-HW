import firebase from 'firebase/app';
import 'firebase/auth';

import friendsData from '../../helpers/data/userMovieData';

import util from '../../helpers/util';

const createNewMovie = (e) => {
  e.preventDefault();
  const newMovie = {
    name: document.getElementById('name').value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewMovie(newMovie)
    .then(() => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('movies').classList.remove('hide');
      document.getElementById('new-movie').classList.add('hide');
    })
    .catch(err => console.error('no new movie for you', err));
};

const newMovieButton = () => {
  document.getElementById('movie').classList.add('hide');
  document.getElementById('new-movie').classList.remove('hide');
  document.getElementById('saveNewMovie').addEventListener('click', createNewMovie);
};

const showMovies = () => {
  const domString = '<button id="add-movie-button" class="btn btn-info">Add Movie</button>';
  util.printToDom('movies', domString);
  document.getElementById('add-movie-button').addEventListener('click', newMovieButton);
};

export default { showMovies };
