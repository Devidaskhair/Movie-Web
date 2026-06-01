import "./RecommendedMovies.css";
import MovieCard from "./MovieCard";

function RecommendedMovies({ movies, loading }) {
  if (loading) {
    return (
      <div className="loading-recommendations">Loading recommendations...</div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="no-recommendations">
        <p>No recommendations available</p>
      </div>
    );
  }

  return (
    <div className="recommended-section">
      <h2 className="recommended-title">Similar Movies</h2>
      <div className="recommended-grid">
        {movies.slice(0, 6).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedMovies;
