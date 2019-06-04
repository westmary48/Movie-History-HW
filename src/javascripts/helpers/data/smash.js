const userMovieMovies = (userMovies, movies) => userMovies.map((userMovie) => {
  const um = userMovie;
  const movie = movies.find(r => r.userMovieId === um.id);
  if (movies) {
    um.movieId = movie.id;
  }

  return um;
});

export default { userMovieMovies };
