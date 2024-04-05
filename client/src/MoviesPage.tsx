import { useState, useEffect } from 'react';
import "./MoviesPage.css"

interface Movie {
  _id: string;
  title: string;
  plot: string;
  genres: string[];
  year: number;
  poster: string;
}

const MoviePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (!token) {
          window.location.href = '/'; 
          return;
        }

        const response = await fetch('http://localhost:8080/api/movies', {
          headers: {
            Authorization: token,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }

        const data = await response.json();
        setMovies(data || []);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="movie-container">
      <h1>Recommended Movies</h1>
      <button onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', margin: '10px', borderRadius: '5px' }}>Logout</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie._id} className="movie-card">
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
              <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>Year: {movie.year}</p>
                <p>Genres: {movie.genres.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviePage;
