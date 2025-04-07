import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <div className="overlay">
        <header className="navbar">
          <div className="logo">Raaga Bliss</div>
          <nav>
          </nav>
        </header>

        <section className="hero-section">
          <h1>Raaga Meditation Player</h1>
          <p>
            Experience the calming frequencies of traditional Indian raagas.
            Perfect for meditation, sleep, and inner peace.
          </p>
        </section>

        
        <section className="quote-section">
            <blockquote>
                “Raaga is not just sound — it's the soul's path to stillness, a bridge between time and timelessness.”
            </blockquote>
        <cite>— Ancient Indian Music Philosophy</cite>
        </section>
        <section className="cta-section">
        <button onClick={() => navigate("/library")}>Library</button>
        <button onClick={() => navigate("/Composer")}>AI Composer</button>
        </section>
        <section className="tags-section">
          <p>
            RAGA YAMAN • RAGA BHAIRAVI • RAGA KIRWANI • RAGA CHARUKESHI • RAGA DARBARI • RAGA
            JHINJHOTI • RAGA BASANT MUKHARI • RAGA MALKAUNS • RAGA MARWA
          </p>
        </section>

        <section className="healing-section">
          <h2>The HEALING RAGAS Collection</h2>
          <p>
            Along the years, a collection of instrumental-only music based on Indian Ragas has
            developed, to share the feel and depth of meditative, mystical, emotional India. Manish on
            composition, Santoor, Keyboards and Tabla accompanied on Bansuri by Bikramjit and Milind
            Date. Together they create the most pure sound of ragas from India, reflecting the power and
            magic of Indian music and its magic expressed through ragas. Each raga is an array of
            melodic structures considered in the Indian tradition to affect emotions and balance mind
            and body.
          </p>
        </section>

        <footer className="footer">
          <p>&copy; 2025 Raaga Bliss. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;