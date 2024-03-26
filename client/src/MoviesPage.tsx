import './MoviesPage.css';

const MoviesPage = () => {  
    const handleLogout = () => {
      console.log('Logging out...');
    };

  const favoriteGenre = 'Drama';

  const movies = [
    { id: 1, title: 'Inception', genre: 'Action', year: 2010, poster: 'https://via.placeholder.com/150' },
    { id: 2, title: 'The Dark Knight', genre: 'Action', year: 2008, poster: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Pulp Fiction', genre: 'Crime', year: 1994, poster: 'https://via.placeholder.com/150' },
    { id: 4, title: 'The Godfather', genre: 'Crime', year: 1972, poster: 'https://via.placeholder.com/150' },
    { id: 5, title: 'The Shawshank Redemption', genre: 'Drama', year: 1994, poster: 'https://via.placeholder.com/150' },
    { id: 6, title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003, poster: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Forrest Gump', genre: 'Drama', year: 1994, poster: 'https://via.placeholder.com/150' },
    { id: 8, title: 'The Matrix', genre: 'Sci-Fi', year: 1999, poster: 'https://via.placeholder.com/150' },
    { id: 9, title: 'The Avengers', genre: 'Action', year: 2012, poster: 'https://via.placeholder.com/150' },
    { id: 10, title: 'Jurassic Park', genre: 'Sci-Fi', year: 1993, poster: 'https://via.placeholder.com/150' },
    { id: 11, title: 'Titanic', genre: 'Drama', year: 1997, poster: 'https://via.placeholder.com/150' },
    { id: 12, title: 'Fight Club', genre: 'Drama', year: 1999, poster: 'https://via.placeholder.com/150' },
    { id: 13, title: 'Star Wars: Episode IV - A New Hope', genre: 'Sci-Fi', year: 1977, poster: 'https://via.placeholder.com/150' },
    { id: 14, title: 'The Silence of the Lambs', genre: 'Crime', year: 1991, poster: 'https://via.placeholder.com/150' },
    { id: 15, title: 'Goodfellas', genre: 'Crime', year: 1990, poster: 'https://via.placeholder.com/150' },
    { id: 16, title: 'The Departed', genre: 'Crime', year: 2006, poster: 'https://via.placeholder.com/150' },
    { id: 17, title: 'Inglourious Basterds', genre: 'War', year: 2009, poster: 'https://via.placeholder.com/150' },
    { id: 18, title: 'The Social Network', genre: 'Drama', year: 2010, poster: 'https://via.placeholder.com/150' },
    { id: 19, title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy', year: 2001, poster: 'https://via.placeholder.com/150' },
    { id: 20, title: 'Gladiator', genre: 'Action', year: 2000, poster: 'https://via.placeholder.com/150' },
    { id: 21, title: 'Saving Private Ryan', genre: 'War', year: 1998, poster: 'https://via.placeholder.com/150' },
    { id: 22, title: 'The Sixth Sense', genre: 'Thriller', year: 1999, poster: 'https://via.placeholder.com/150' },
    { id: 23, title: 'Avatar', genre: 'Sci-Fi', year: 2009, poster: 'https://via.placeholder.com/150' },
    { id: 24, title: 'The Green Mile', genre: 'Drama', year: 1999, poster: 'https://via.placeholder.com/150' },
    { id: 25, title: 'Interstellar', genre: 'Sci-Fi', year: 2014, poster: 'https://via.placeholder.com/150' }
]


  return (
    <div className="movies-container">
      <h2>Movies</h2>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <p className="favorite-genre">Favorite Movie Genre: {favoriteGenre}</p>
      <div className="movies-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-details">
              <p>Title: {movie.title}</p>
              <p>Genre: {movie.genre}</p>
              <p>Year: {movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
