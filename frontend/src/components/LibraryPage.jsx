import React, { useState } from "react";
import ragaData from "../data/ragas"; // we'll create this
import "./LibraryPage.css";



const LibraryPage = () => {
    const [selectedRaga, setSelectedRaga] = useState(null);
    
    return (
        <div className="container py-5">
        <h2 className="text-center mb-4">Raga Library</h2>

        {!selectedRaga ? (
            <div className="row g-4">
                {ragaData.map((raga, index) => (
                <div key={index} className="col-md-4">
                    <div
                    className="card raga-card"
                    onClick={() => setSelectedRaga(raga)}
                    >
                    <img src={raga.image} className="card-img-top" alt={raga.name} />
                    <div className="card-body">
                        <h5 className="card-title">{raga.name}</h5>
                        <p className="card-text">{raga.shortDescription}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            ) : (
            <div className="raga-detail mx-auto" style={{ maxWidth: "700px" }}>
                <button
                className="btn btn-outline-dark mb-4 back-button"
                onClick={() => setSelectedRaga(null)}
                >
                ← Back to Library
                </button>
                <h3 className="mb-3">{selectedRaga.name}</h3>
                <img
                src={selectedRaga.image}
                alt={selectedRaga.name}
                className="img-fluid"
                />
                <p className="mt-3">{selectedRaga.description}</p>

                <div className="conatainer mt-4">
                <p className="mb-1"><strong>Swar:</strong> {selectedRaga.swar}</p>
                <p className="mb-1"><strong>Jati:</strong>{selectedRaga.jati}</p>
                <p className="mb-1"><strong>Thaat:</strong> {selectedRaga.thaat}</p>
                <p className="mb-2"><strong>Time:</strong> {selectedRaga.time}</p>
                <p className="mb-2"><strong>Vishranti_sthan:</strong> {selectedRaga.vishranti_sthan}</p>
                <p className="mb-2"><strong>Mukhya_ang:</strong> {selectedRaga.mukhya_ang}</p>
                <p className="mb-2"><strong>Aaroh_avroh:</strong> {selectedRaga.aaroh_avroh}</p>
                    <audio controls className="w-100 mt-4">
                    <source src={selectedRaga.audio} type="audio/mp3" />
                    Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
            )}

        </div>
    );
};

export default LibraryPage;
