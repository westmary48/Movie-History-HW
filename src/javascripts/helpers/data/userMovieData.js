import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getUserMovieByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/userMovie.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const userMovieResults = results.data;
      const userMovies = [];
      Object.keys(userMovieResults).forEach((userMovieId) => {
        userMovieResults[userMovieId].id = userMovieId;
        userMovies.push(userMovieResults[userMovieId]);
      });
      resolve(userMovies);
    })
    .catch(error => reject(error));
});

const addNewMovie = movieObject => axios.post(`${firebaseUrl}/userMovie.json`, movieObject);


export default { addNewMovie, getUserMovieByUid };
