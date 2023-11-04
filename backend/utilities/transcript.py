from youtube_transcript_api import YouTubeTranscriptApi

def transcript(video_url):
    try:
        transcript = YouTubeTranscriptApi.get_transcript(video_url)
        complete_text = ' '.join(entry['text'] for entry in transcript)
        return complete_text
    except Exception as error:
        # Handle exceptions, e.g., video not found, network issues, etc.
        return str(error)

# Example usage:
# video_url = "https://www.youtube.com/watch?v=your_video_id_here"
# transcript_text = fetch_transcript(video_url)
# print(transcript_text)
