# Raga Meditation Player

The **Raga Meditation Player** is a web application that generates music based on user-provided prompts or pre-defined Raagas. It uses a Flask backend powered by the MusicGen model to generate music and a React frontend for user interaction.

---

## Features

- **AI-Powered Music Generation**: Generate music based on text prompts using the MusicGen model.
- **Pre-Defined Raagas**: Choose from 9 pre-defined Raagas for quick music generation.
- **Custom Prompts**: Enter your own mood, time of day, or emotion to generate personalized music.
- **Audio Playback**: Listen to the generated music directly in the browser.
- **Download Option**: Download the generated `.wav` file for offline use.

---

## Project Structure

```
IKS_PROJECT/
├── backend/
│   ├── flask_api.py       # Flask server for music generation
│   ├── requirements.txt   # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Composer.jsx  # Main React component for the app
│   │   │   ├── musicgen.json # JSON file containing pre-defined Raagas
│   │   ├── App.js           # React app entry point
│   ├── public/
│   │   ├── index.html       # HTML template
├── README.md               # Project documentation
```

---

## Prerequisites

### Backend
- Python 3.8 or higher
- CUDA-enabled GPU (for MusicGen model)

### Frontend
- Node.js 16 or higher
- npm or yarn

---

## Installation

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. Install the required Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask server:
   ```bash
   python flask_api.py
   ```

   The server will start at `http://localhost:5000`.

---

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

---

## Usage

1. Open the React app in your browser at `http://localhost:3000`.
2. Choose a Raaga from the pre-defined options or enter a custom prompt.
3. Click "Generate" to create music.
4. Listen to the generated music using the audio player or download it as a `.wav` file.

---

## API Endpoints

### `/generate-music` (POST)
- **Description**: Generates music based on the provided prompt.
- **Request Body**:
  ```json
  {
    "prompt": "Your text prompt here"
  }
  ```
- **Response**:
  - On success: Returns the generated `.wav` file.
  - On failure: Returns an error message.

---

## Technologies Used

### Backend
- Flask
- Flask-CORS
- PyTorch
- Audiocraft (MusicGen)
- Soundfile

### Frontend
- React
- Material-UI

---

## Example `musicgen.json`

```json
{
  "Raaga 1": "Peaceful and meditative morning raaga",
  "Raaga 2": "Energetic and uplifting afternoon raaga",
  "Raaga 3": "Calm and soothing evening raaga",
  "Raaga 4": "Joyful and celebratory raaga",
  "Raaga 5": "Romantic and emotional raaga",
  "Raaga 6": "Spiritual and devotional raaga",
  "Raaga 7": "Melancholic and reflective raaga",
  "Raaga 8": "Playful and lighthearted raaga",
  "Raaga 9": "Dynamic and powerful raaga"
}
```

---

## Troubleshooting

### Common Issues
1. **CORS Error**:
   - Ensure Flask-CORS is installed and enabled in `flask_api.py`.

2. **Failed to Connect to Server**:
   - Verify that the Flask server is running on `http://localhost:5000`.

3. **MusicGen Model Errors**:
   - Ensure you have a CUDA-enabled GPU and the correct PyTorch version installed.

---

## Future Enhancements

- Add more pre-defined Raagas.
- Allow users to adjust the duration of generated music.
- Add support for saving user-generated prompts.

## Acknowledgments

- [Audiocraft MusicGen](https://github.com/facebookresearch/audiocraft)
