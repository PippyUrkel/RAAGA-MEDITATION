import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="homepage bg-light">
        <div className="container py-5 text-center">
            <div className="hero-section bg-warning-subtle p-4 rounded-4 mb-5">
            <h1 className="display-5 fw-bold">Raaga Meditation Player</h1>
            <p className="lead mt-3">
                Experience the calming frequencies of traditional Indian raagas. Perfect for meditation,
                sleep, and inner peace.
            </p>
            </div>

            <div className="row g-4 justify-content-center mb-4">
            <div className="col-md-5">
                <img
                src="src/assets/raga1.jpg"
                alt="Instrument"
                className="img-fluid rounded-4 shadow"
                />
            </div>
            <div className="col-md-5">
                <img
                src="src/assets/raga2.png"
                alt="Artists"
                className="img-fluid rounded-4 shadow"
                />
            </div>
            </div>

            <div className="mb-5">
            <button className="btn btn-danger me-3 px-4 py-2 rounded-pill" onClick={() => navigate("/library")}>Explore Music</button>
            <button className="btn btn-info text-white px-4 py-2 rounded-pill">AI Composer</button>
            </div>

            <div className="raga-tags mb-5">
            <strong>
                RAGA YAMAN - RAGA BHAIRAVI - RAGA KIRWANI - RAGA CHARUKESHI - RAGA DARBARI - RAGA
                JHINJHOTI - RAGA BASANT MUKHARI - RAGA MALKAUNS - RAGA MARWA
            </strong>

            </div>

            <div className="healing-section bg-white shadow-sm p-4 rounded-4 text-start mx-auto mb-5">
            <div class="title-text text-center">The HEALING RAGAS Collection</div>
            <p>
            Along the years, a collection of instrumental-only music based on Indian Ragas has developed, to share the feel and depth of meditative, mystical, emotional India. Manish on composition, Santoor, Keyboards and Tabla accompanied on Bansuri by Bikramjit on the first three releases and by Milind Date on Bansuri on the most recent release. Together they create the most pure sound of ragas from India, reflecting the power and magic of Indian music and its magic expressed through ragas, which are melodic modes or scales which bring different emotions, feelings, moods when played.

    Each raga is an array of melodic structures with musical motifs, considered in the Indian tradition to have the ability to "color the mind" and affect the emotions of the performer and the audience. There are hundreds of Ragas in the Indian music system, which have developed since ancient times. Some are associated with specific times of the day, seasons, and even emotional states, believed to create specific vibrations that help balance the listener's mind and body.
            </p>
            </div>
        </div>
        </div>
    );
};

export default HomePage;
