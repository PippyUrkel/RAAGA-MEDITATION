from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import soundfile as sf
import torch
from audiocraft.models import musicgen
import tempfile
import os

app = Flask(__name__)
CORS(app) 

print("Loading MusicGen model...")
torch.cuda.empty_cache()
model = musicgen.MusicGen.get_pretrained('facebook/musicgen-small', device='cuda')
model.set_generation_params(duration=25)  

@app.route('/generate-music', methods=['POST'])
def generate_music():
    try:
        data = request.json
        if not data or 'prompt' not in data:
            return jsonify({'error': 'Missing prompt in request'}), 400

        prompt = data['prompt']
        print(f"Generating music for prompt: {prompt}")

        res = model.generate([prompt], progress=True)

        audio = res[0].cpu().numpy()
        audio = audio.squeeze()  

        with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as temp_file:
            temp_file_path = temp_file.name
            sf.write(temp_file_path, audio, 32000)

        return send_file(temp_file_path, as_attachment=True, download_name="generated_music.wav")

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 500

    finally:
        if 'temp_file_path' in locals() and os.path.exists(temp_file_path):
            os.remove(temp_file_path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)