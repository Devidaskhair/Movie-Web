import "./StreamingLinks.css";

function StreamingLinks({ providers }) {
  if (!providers || Object.keys(providers).length === 0) {
    return (
      <div className="streaming-links">
        <p className="no-providers">Not available for streaming</p>
      </div>
    );
  }

  const platformLogos = {
    8: "https://www.themoviedb.org/t/p/original/8z7K8g4GjAzA9X1JZsruJbLm1zG.png",
    119: "https://www.themoviedb.org/t/p/original/peURlLlr8jlrzj2eyjMQc97b7uc.png",
    337: "https://www.themoviedb.org/t/p/original/aqwIzeBVqpXKtsFhRoxjEOWNAJu.png",
    386: "https://www.themoviedb.org/t/p/original/p3Z12gHJ4il3jMXEJfo97enxChH.png",
    189: "https://www.themoviedb.org/t/p/original/rJPdFxYk161ZzepicKDBRwhaHeJ.png",
    15: "https://www.themoviedb.org/t/p/original/AwW5X0Smu2Bx4wXlGLhb6VhC6Gq.png",
  };

  const platformNames = {
    8: "Netflix",
    119: "Prime Video",
    337: "Disney+",
    386: "Peacock",
    189: "Disney Plus",
    15: "Hulu",
  };

  const getPlatformLink = (providerId) => {
    const links = {
      8: "https://www.netflix.com",
      119: "https://www.primevideo.com",
      337: "https://www.disneyplus.com",
      386: "https://www.peacocktv.com",
      189: "https://www.disneyplus.com",
      15: "https://www.hulu.com",
    };
    return links[providerId] || "#";
  };

  return (
    <div className="streaming-links">
      <p className="streaming-label">Watch on:</p>
      <div className="providers-list">
        {providers.flatrate &&
          providers.flatrate.map((provider) => (
            <a
              key={provider.provider_id}
              href={getPlatformLink(provider.provider_id)}
              target="_blank"
              rel="noopener noreferrer"
              className="provider-link"
              title={platformNames[provider.provider_id] || "Watch"}
            >
              <img
                src={platformLogos[provider.provider_id] || provider.logo_path}
                alt={platformNames[provider.provider_id] || "Provider"}
                className="provider-logo"
              />
              <span className="provider-name">
                {platformNames[provider.provider_id] || "Watch"}
              </span>
            </a>
          ))}
      </div>
    </div>
  );
}

export default StreamingLinks;
