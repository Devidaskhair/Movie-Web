import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecommendations } from "./services/api";
import RecommendedMovies from "./RecommendedMovies";
import "./MovieDetail.css";

function MovieDetail() {
  const { movieId } = useParams();
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecommendations = async () => {
      if (!movieId) return;

      setLoading(true);
      try {
        const recs = await getRecommendations(movieId);
        setRecommendations(recs);
      } catch (error) {
        console.error("Failed to fetch recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRecommendations();
  }, [movieId]);

  return (
    <div className="movie-detail-container">
      <RecommendedMovies movies={recommendations} loading={loading} />
    </div>
  );
}

export default MovieDetail;
