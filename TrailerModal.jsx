import "./TrailerModal.css";

function TrailerModal({ videoKey, onClose, movieTitle }) {
  if (!videoKey) {
    return (
      <div className="trailer-modal-overlay" onClick={onClose}>
        <div className="trailer-modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
          <div className="no-trailer">
            <p>Trailer not available for this movie</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="trailer-modal-overlay" onClick={onClose}>
      <div className="trailer-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <h2>{movieTitle}</h2>
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoKey}`}
          title={movieTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default TrailerModal;
