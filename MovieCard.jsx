import { useState } from "react";
import "./MovieCard.css";
import { useMovieContext } from "./MovieContext";
import { getMovieVideos, getMovieProviders } from "./services/api";
import TrailerModal from "./TrailerModal";
import StreamingLinks from "./StreamingLinks";

function MovieCard({ movie }) {
  const { addToFavourites, removeFromFavourites, isFavourite } =
    useMovieContext();
  const favourite = isFavourite(movie.id);
  const [showTrailer, setShowTrailer] = useState(false);
  const [videoKey, setVideoKey] = useState(null);
  const [providers, setProviders] = useState(null);
  const [loadingTrailer, setLoadingTrailer] = useState(false);
  const [loadingProviders, setLoadingProviders] = useState(false);

  function handlefavouritebtn(e) {
    e.preventDefault();
    if (favourite) {
      removeFromFavourites(movie.id);
    } else {
      addToFavourites(movie);
    }
  }

  const handleWatchTrailer = async (e) => {
    e.preventDefault();
    if (videoKey) {
      setShowTrailer(true);
      return;
    }

    setLoadingTrailer(true);
    try {
      const videos = await getMovieVideos(movie.id);
      const trailer = videos.find(
        (v) => v.type === "Trailer" && v.site === "YouTube",
      );
      if (trailer) {
        setVideoKey(trailer.key);
        setShowTrailer(true);
      } else {
        setShowTrailer(true);
      }
    } catch (error) {
      console.error("Failed to fetch trailer:", error);
      setShowTrailer(true);
    } finally {
      setLoadingTrailer(false);
    }
  };

  const handleShowProviders = async (e) => {
    e.preventDefault();
    if (providers) {
      return;
    }

    setLoadingProviders(true);
    try {
      const result = await getMovieProviders(movie.id);
      if (result && result["US"]) {
        setProviders(result["US"]);
      }
    } catch (error) {
      console.error("Failed to fetch providers:", error);
    } finally {
      setLoadingProviders(false);
    }
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favourite-btn ${favourite ? "active" : ""}`}
            onClick={handlefavouritebtn}
          >
            {favourite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <div className="action-buttons">
          <button
            className="trailer-btn"
            onClick={handleWatchTrailer}
            disabled={loadingTrailer}
          >
            {loadingTrailer ? "Loading..." : "🎬 Trailer"}
          </button>
          <button
            className="watch-btn"
            onClick={handleShowProviders}
            disabled={loadingProviders}
          >
            {loadingProviders ? "Loading..." : "📺 Watch"}
          </button>
        </div>
        {providers && <StreamingLinks providers={providers} />}
      </div>

      {showTrailer && (
        <TrailerModal
          videoKey={videoKey}
          onClose={handleCloseTrailer}
          movieTitle={movie.title}
        />
      )}
    </div>
  );
}

export default MovieCard;
