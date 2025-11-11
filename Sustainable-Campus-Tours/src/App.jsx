import React from "react";
import "./App.css";
import CampusMap from "./Map"; // 👈 import your Leaflet map

function App() {
  return (
    <>
      <header className="navbar">
        <div className="logo">Sustainable Campus Tours</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#map">Map</a>
        </nav>
        <button className="btn-primary">Login</button>
      </header>

      {/* 🏠 Home Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Explore Your Campus</h1>
          <p>
            Discover eco-friendly initiatives and innovative green designs at
            campuses worldwide.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start a Tour</button>
          </div>
        </div>
        <img
          src="manipal_university_jaipur_cover.jpeg"
          alt="Campus"
          className="hero-image"
        />
      </section>

      {/* 🌱 About Section */}
      <section id="about" className="features">
        <div className="feature">
          <h3>Green Energy</h3>
          <p>Discover how campuses use solar and wind energy effectively.</p>
        </div>
        <div className="feature">
          <h3>Recycling Systems</h3>
          <p>Learn about advanced waste management and sustainability drives.</p>
        </div>
      </section>

      {/* 🗺️ Map Section */}
      <section id="map" className="map-section">
        <h2>Campus Map</h2>
        <div className="map-container">
          <CampusMap />
        </div>
      </section>

      {/* 🌍 Call to Action */}
      <section className="cta">
        <h2>
          “Like wildflowers, you must allow yourself to grow in all the places
          people thought you never would.” — E.V.
        </h2>
        <p>Explore how education and innovation can build a better planet.</p>
        <button
          className="btn-primary"
          onClick={() => window.open("https://saveplants.org/", "_blank")}
        >
          Learn More
        </button>
      </section>

      <footer className="footer">
        <p>© 2025 Sustainable Tours. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
