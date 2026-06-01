import "./Favourites.css";
import MovieCard from "./MovieCard";
import { useMovieContext } from "./MovieContext";

function Favourite() {
  const { favourites } = useMovieContext();
  if (favourites.length > 0) {
    return (
      <div className="favourites-container">
       <h2>Your Favourite Movies</h2>
        {favourites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
  return (
    <div className="favourites-empty">
      <h3>No favourite Movies yet</h3>
      <p>
        Start adding to your favourites by clicking the heart icon on any movie!
      </p>
    </div>
  );
}
export default Favourite;
