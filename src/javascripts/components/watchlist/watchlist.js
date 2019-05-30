import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

import watchListData from '../../helpers/data/watchListData';
import movies from '../Movies/movies';


// function that adds watchlist to user movies collection and
// then reprints it to the movie stringBuilder
const createWatchlist = (e) => {
  const userId = firebase.auth().currentUser.uid;
  const newWatchlist = {
    isWatched: false,
    rating: 0,
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
