import firebase from 'firebase/app';

import './styles/main.scss';
import auth from './components/Auth/auth';
// import movies from './components/Movies/movies';
import authData from './helpers/data/authData';
import MyNavbar from './components/myNavbar/myNavbar';
import AddMovie from './components/UserMovies/userMovies';

import apiKeys from './helpers/apiKeys.json';

const init = () => {
  console.error('keys', apiKeys.firebaseKeys);
  firebase.initializeApp(apiKeys.firebaseKeys);
  MyNavbar.navbarEvents();
  authData.checkLoginStatus();
  auth.authPrint();
  AddMovie.showMovies();
};

init();
