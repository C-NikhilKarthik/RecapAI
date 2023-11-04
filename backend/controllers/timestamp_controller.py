from youtube_transcript_api import YouTubeTranscriptApi
from flask import Blueprint, request, jsonify

timestamp_controller = Blueprint("timestamp_controller", __name__)

@timestamp_controller.route('/timestamp', methods=['POST'])
def timestamp():
    data = request.get_json()
    video_url = data.get('videoURL')
    return jsonify({"timestamps": YouTubeTranscriptApi.get_transcript(video_url)}), 200