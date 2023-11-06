from flask import Blueprint, request, jsonify
import openai
from utilities.transcript import transcript
from dotenv import load_dotenv
import os

load_dotenv()

generative_controller = Blueprint("generative_controller", __name__)

def format_as_html(text):
    # Split the text into paragraphs based on double line breaks
    paragraphs = text.split('\n\n')

    # Generate HTML with <p> tags for each paragraph
    html_text = ''.join([f'<p>{paragraph}</p>' for paragraph in paragraphs])

    return html_text

openai_api_key = os.getenv("OPENAI_KEY")

# Initialize the OpenAI API client
openai.api_key = openai_api_key

# Initialize a variable to store the transcribed text
cached_transcript = None

@generative_controller.route('/anyPrompt', methods=['POST'])
def any_prompt():
    global cached_transcript  # Use the cached transcript from the global variable
    try:
        data = request.get_json()
        video_url = data.get('videoURL')
        prom = data.get('prom')

        if video_url is None or prom is None:
            return jsonify({"error": "Missing 'videoURL' or 'prom' parameter"}), 400

        # Check if the transcript is already cached, and if not, transcribe the video
        if cached_transcript is None:
            cached_transcript = transcript(video_url)

        user_message = cached_transcript + "Based on the above text, answer the following prompt: " + prom

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
    global cached_transcript  # Use the cached transcript from the global variable
    try:
        data = request.get_json()
        video_url = data.get('videoURL')

        if video_url is None:
            return jsonify({"error": "Missing 'videoURL' parameter"}), 400

        # Check if the transcript is already cached, and if not, transcribe the video
        if cached_transcript is None:
            cached_transcript = transcript(video_url)

        user_message = "Summarize the following text into 10 points: " + cached_transcript

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
    global cached_transcript  # Use the cached transcript from the global variable
    try:
        data = request.get_json()
        video_url = data.get('videoURL')

        if video_url is None:
            return jsonify({"error": "Missing 'videoURL' parameter"}), 400

        # Check if the transcript is already cached, and if not, transcribe the video
        if cached_transcript is None:
            cached_transcript = transcript(video_url)

        user_message = cached_transcript + "Based on the above text, create a 5 question MCQ quiz"

        chat_completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": user_message}],
        )

        response_text = chat_completion['choices'][0]['message']['content']

        return jsonify({"openaiAPIResult": response_text}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@generative_controller.route('/intro', methods=['POST'])
def intro():
    global cached_transcript  # Use the cached transcript from the global variable
    try:

        data = request.get_json()
        video_url = data.get('videoURL')

        if video_url is None:
            return jsonify({"error": "Missing 'videoURL' parameter"}), 400

            # Check if the transcript is already cached, and if not, transcribe the video
        if cached_transcript is None:
            cached_transcript = transcript(video_url)

        user_message = cached_transcript + "Extract five important sentences from the given transcript that would be valuable for a viewer and return them in a python list."

        chat_completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": user_message}],
        )

        response_text = chat_completion['choices'][0]['message']['content']

        # html_response = format_as_html(response_text)

        return jsonify({"openaiAPIResult": response_text}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    # Rest of the code for the 'intro' route

# The rest of your code...
