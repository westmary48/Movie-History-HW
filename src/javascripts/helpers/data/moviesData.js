import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getMovieByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const movieResults = results.data;
      const moviesArray = [];
      Object.keys(movieResults).forEach((movieId) => {
        movieResults[movieId].id = movieId;
        moviesArray.push(movieResults[movieId]);
      });
      console.error('....', movieResults);
      resolve(moviesArray);
    })
    .catch(err => reject(err));
});

export default { getMovieByUid };
