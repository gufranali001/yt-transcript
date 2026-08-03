import os
import requests

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="YT Tube Transcript API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")
RAPIDAPI_HOST = "youtube-transcript3.p.rapidapi.com"


@app.get("/")
def home():
    return {
        "success": True,
        "message": "YT Tube Transcript API Running 🚀"
    }


@app.get("/transcript")
def transcript(video_id: str):

    try:
        url = "https://youtube-transcript3.p.rapidapi.com/api/transcript-with-url"

        querystring = {
            "url": f"https://www.youtube.com/watch?v={video_id}",
            "flat_text": "true"
        }

        headers = {
            "x-rapidapi-key": RAPIDAPI_KEY,
            "x-rapidapi-host": RAPIDAPI_HOST,
            "Content-Type": "application/json"
        }

        response = requests.get(
            url,
            headers=headers,
            params=querystring,
            timeout=30
        )

        data = response.json()

        if response.status_code != 200:
            return {
                "success": False,
                "error": data
            }

        if not data.get("success", False):
            return {
                "success": False,
                "error": data.get("error", "Transcript not available")
            }

        return {
            "success": True,
            "transcript": data.get("transcript", "")
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }