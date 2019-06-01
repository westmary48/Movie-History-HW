import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getRating = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/userMovie.json`)
    .then((results) => {
      const ratingResults = results.data;
      const ratingArray = [];
      Object.keys(ratingResults).forEach((ratingId) => {
        ratingResults[ratingId].id = ratingId;
        ratingArray.push(ratingResults[ratingId]);
      });
      resolve(ratingArray);
    })
    .catch(err => reject(err));
});


// const addNewRating = ratingObject => axios.post(`${firebaseUrl}/userMovie.json`, ratingObject);

export default { getRating };
