import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewWatchList = watchlistObject => axios.post(`${firebaseUrl}/userMovie.json`, watchlistObject);

export default { addNewWatchList };
