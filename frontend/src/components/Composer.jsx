import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Card, CardContent, Typography, Button } from "@mui/material";
import "./Composer.css";
import musicgen from "./musicgen.json"; 

const Composer = () => {
  const [prompt, setPrompt] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async (selectedPrompt) => {
    setLoading(true);
    setError("");
    setAudioUrl(null);

    try {
      const response = await fetch("http://localhost:5000/generate-music", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: selectedPrompt }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setAudioUrl(url); // Set the audio URL for playback
      } else {
        const errorData = await response.json();
        setError(errorData.error || "An error occurred while generating music.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
      console.error("Request failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="composer-page">
      <div className="composer-box">
        <h1>AI Raaga Composer</h1>
        <p className="subtitle">
          Select a Raaga or type a mood, time of day, or emotion to generate music.
        </p>

        <input
          type="text"
          className="composer-input"
          placeholder="e.g., Peaceful night, Morning energy, Healing"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="raaga-buttons">
          {Object.entries(musicgen).map(([buttonName, promptValue]) => (
            <Button
              key={buttonName}
              variant="contained"
              sx={{
                backgroundColor: "darkorange",
                color: "white",
                margin: "5px",
                borderRadius: "10px",
                "&:hover": { backgroundColor: "#e67e22" },
              }}
              onClick={() => handleGenerate(promptValue)}
            >
              {buttonName}
            </Button>
          ))}
        </div>

        <div style={{ marginBottom: "20px" }}></div>

        <button
          className="generate-button"
          onClick={() => handleGenerate(prompt)}
          disabled={loading || !prompt.trim()}
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <CircularProgress
              sx={{ color: "darkorange" }}
              thickness={5} 
              size={60} 
            />
          </Box>
        )}

        {error && <div className="error-message">{error}</div>}

        {audioUrl && (
          <Card
            sx={{
              backgroundColor: "#2c2c2c",
              color: "white",
              marginTop: "20px",
              padding: "20px",
              borderRadius: "30px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "darkorange", marginBottom: "10px" }}
              >
                Your Generated Music
              </Typography>
              <audio controls style={{ width: "100%" }}>
                <source src={audioUrl} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
              <a
                href={audioUrl}
                download="generated_music.wav"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  color: "darkorange",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Download Music
              </a>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Composer;