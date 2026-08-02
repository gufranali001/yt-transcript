from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from youtube_transcript_api import YouTubeTranscriptApi
import traceback

app = FastAPI(title="YT Tube Transcript API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "success": True,
        "message": "YT Tube Transcript API Running 🚀"
    }


@app.get("/transcript")
def transcript(video_id: str):

    try:
        api = YouTubeTranscriptApi()

        transcript_list = api.list(video_id)

        transcript = None

        # 1. English manual
        try:
            transcript = transcript_list.find_transcript(["en"])
        except:
            pass

        # 2. English auto
        if transcript is None:
            try:
                transcript = transcript_list.find_generated_transcript(["en"])
            except:
                pass

        # 3. Hindi manual
        if transcript is None:
            try:
                transcript = transcript_list.find_transcript(["hi"])
            except:
                pass

        # 4. Hindi auto
        if transcript is None:
            try:
                transcript = transcript_list.find_generated_transcript(["hi"])
            except:
                pass

        # 5. First available transcript
        if transcript is None:
            transcript = next(iter(transcript_list))

        data = transcript.fetch()

        text = " ".join(item.text for item in data)

        return {
            "success": True,
            "language": transcript.language,
            "transcript": text
        }

    except Exception as e:
        error_trace = traceback.format_exc()

        print("=" * 80)
        print("TRANSCRIPT ERROR")
        print(error_trace)
        print("=" * 80)

        return {
            "success": False,
            "error": str(e),
            "exception_type": type(e).__name__,
            "traceback": error_trace
        }