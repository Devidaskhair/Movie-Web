const API_KEY = "f0f3633d368c57099ef60a61bfce42d1";
const BASE_URL = "https://api.themoviedb.org/3";

export const getpopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );
  const data = await response.json();
  return data.results;
};

export const getMovieVideos = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`,
  );
  const data = await response.json();
  return data.results;
};

export const getMovieProviders = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`,
  );
  const data = await response.json();
  return data.results;
};

export const getRecommendations = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`,
  );
  const data = await response.json();
  return data.results;
};
