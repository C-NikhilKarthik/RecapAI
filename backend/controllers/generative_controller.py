from flask import Blueprint, request, jsonify
import openai
from utilities.transcript import transcript
from dotenv import load_dotenv
import os

load_dotenv()

generative_controller = Blueprint("generative_controller", __name__)

openai_api_key = os.getenv("OPENAI_KEY")

# Initialize the OpenAI API client
openai.api_key = openai_api_key

@generative_controller.route('/anyPrompt', methods=['POST'])
def any_prompt():
    try:
        data = request.get_json()
        video_url = data.get('videoURL')
        prom = data.get('prom')

        if video_url is None or prom is None:
            return jsonify({"error": "Missing 'videoURL' or 'prom' parameter"}), 400

        transcribed_text = transcript(video_url)

        user_message = transcribed_text + "Based on the above text, answer the following prompt: " + prom

        chat_completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": user_message}],
        )

        response_text = chat_completion['choices'][0]['message']['content']

        return jsonify({"openaiAPIResult": response_text}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@generative_controller.route('/summarize', methods=['POST'])
def summarize_text():
    try:
        data = request.get_json()
        video_url = data.get('videoURL')

        if video_url is None:
            return jsonify({"error": "Missing 'videoURL' parameter"}), 400

        transcribed_text = transcript(video_url)

        user_message = "Summarize the following text into 10 points: " + transcribed_text

        chat_completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": user_message}],
        )

        response_text = chat_completion['choices'][0]['message']['content']

        return jsonify({"openaiAPIResult": response_text}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@generative_controller.route('/quiz', methods=['POST'])
def generate_quiz():
    try:
        data = request.get_json()
        video_url = data.get('videoURL')

        if video_url is None:
            return jsonify({"error": "Missing 'videoURL' parameter"}), 400

        transcribed_text = transcript(video_url)

        user_message = transcribed_text + "Based on the above text, create a 5 question MCQ quiz"

        chat_completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": user_message}],
        )

        response_text = chat_completion['choices'][0]['message']['content']

        return jsonify({"openaiAPIResult": response_text}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
