import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

import movies from '../Movies/movies';
import ratingsData from '../../helpers/data/ratingsData';

const createRating = (e) => {
  const userRatingId = firebase.auth().currentUser.uid;
  const newRating = {
    rating: 5,
    isWatched: true,
    uid: userRatingId,
    ratingId: e.target.id,
  };
  ratingsData.getRating(newRating)
    .then(() => {
      movies.moviePrint(userRatingId);
    })
    .catch(err => console.error('no rating', err));
};

const newRatingButton = () => {
  $('#movies').on('click', '.rating', createRating);
};

export default { newRatingButton };
