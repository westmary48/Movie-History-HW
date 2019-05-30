import firebase from 'firebase/app';
import 'firebase/auth';

import movies from '../../components/Movies/movies';
import userMovies from '../../components/UserMovies/userMovies';
import watchlist from '../../components/watchlist/watchlist';

const authDiv = document.getElementById('auth');
const moviesDiv = document.getElementById('movies');
const movieNavbar = document.getElementById('navbar-button-movies');
const authNavbar = document.getElementById('navbar-button-auth');
const logoutNavbar = document.getElementById('navbar-button-logout');
const addMovieBtn = document.getElementById('add-movies-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.classList.add('hide');
      moviesDiv.classList.remove('hide');
      movieNavbar.classList.remove('hide');
      authNavbar.classList.add('hide');
      logoutNavbar.classList.remove('hide');
      movies.moviePrint(user.uid);
      userMovies.showMovies();
      watchlist.newWatchListButton();
    } else {
      authDiv.classList.remove('hide');
      moviesDiv.classList.add('hide');
      movieNavbar.classList.add('hide');
      authNavbar.classList.remove('hide');
      logoutNavbar.classList.add('hide');
      addMovieBtn.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
