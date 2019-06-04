import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

import watchListData from '../../helpers/data/watchListData';
import movies from '../Movies/movies';

const createWatchlist = (e) => {
  const userId = firebase.auth().currentUser.uid;
  const newWatchlist = {
    title: document.getElementById('title').value,
    genre: document.getElementById('genre').value,
    imageUrl: document.getElementById('imageUrl').value,
    movieRatingId: document.getElementById('movieRatingId').value,
    // uid: firebase.auth().currentUser.uid,
    rating: 0,
    isWatched: false,
    uid: userId,
    watchListId: e.target.id,
  };
  watchListData.addNewWatchList(newWatchlist)
    .then(() => {
      movies.moviePrint(userId);
    })
    .catch(err => console.error('no new movie for you', err));
};

const newWatchListButton = () => {
  $('#movies').on('click', '.watchList', createWatchlist);
};

export default { newWatchListButton };
