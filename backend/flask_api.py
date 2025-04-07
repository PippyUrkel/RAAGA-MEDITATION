from flask import Flask, request, jsonify, send_file
import torch
from audiocraft.models import MusicGen
import tempfile
import os

app = Flask(__name__)

# Load the MusicGen model (small model)
print("Loading MusicGen model...")
model = MusicGen.get_pretrained("small")
model.set_generation_params(duration=10)  # Default duration for generated music

@app.route('/generate-music', methods=['POST'])
def generate_music():
    try:
        # Get the input prompt from the request
        data = request.json
        if not data or 'prompt' not in data:
            return jsonify({'error': 'Missing prompt in request'}), 400

        prompt = data['prompt']
        print(f"Generating music for prompt: {prompt}")

        # Generate music
        wav = model.generate([prompt])

        # Save the generated music to a temporary file
        with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as temp_file:
            temp_file_path = temp_file.name
            model.save_wav(wav[0], temp_file_path)

        # Send the file to the frontend
        return send_file(temp_file_path, as_attachment=True, download_name="generated_music.wav")

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 500

    finally:
        # Clean up temporary files
        if 'temp_file_path' in locals() and os.path.exists(temp_file_path):
            os.remove(temp_file_path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
