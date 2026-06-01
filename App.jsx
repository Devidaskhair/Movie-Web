import Favourite from "./Favourite";
import Home from "./Home";
import MovieCard from "./MovieCard";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { MovieProvider } from "./MovieContext";
import "./App.css";
function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}
export default App;
