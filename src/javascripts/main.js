import './styles/main.scss';
import auth from './components/Auth/auth';
import movies from './components/Movies/movies';

const init = () => {
  auth.authPrint();
  movies.moviePrint();
};

init();
