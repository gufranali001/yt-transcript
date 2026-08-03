import os
import requests

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="YT Tube Transcript API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")
HF_API_KEY = os.getenv("HF_API_KEY")

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
            "language": data.get("language", "Unknown"),
            "transcript": data.get("transcript", "")
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }


# ===========================================
# Translation
# ===========================================

class TranslateRequest(BaseModel):
    text: str
    target: str


@app.post("/translate")
def translate(req: TranslateRequest):

    try:

        API_URL = (
            "https://router.huggingface.co/"
            "hf-inference/models/facebook/nllb-200-distilled-600M"
        )

        headers = {
            "Authorization": f"Bearer {HF_API_KEY}",
            "Content-Type": "application/json"
        }

        payload = {
            "inputs": req.text,
            "parameters": {
                "target_lang": req.target
            }
        }

        response = requests.post(
            API_URL,
            headers=headers,
            json=payload,
            timeout=60
        )

        try:
            result = response.json()
        except:
            result = response.text

        return {
            "success": response.status_code == 200,
            "status_code": response.status_code,
            "response": result
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }


# ===========================================
# Translation Test
# ===========================================

@app.get("/translate-test")
def translate_test():

    try:

        API_URL = "https://api-inference.huggingface.co/models/facebook/nllb-200-distilled-600M"

        headers = {
            "Authorization": f"Bearer {HF_API_KEY}",
            "Content-Type": "application/json"
        }

        payload = {
            "inputs": "Hello my friend. How are you?",
            "parameters": {
                "target_lang": "hin_Deva"
            }
        }

        response = requests.post(
            API_URL,
            headers=headers,
            json=payload,
            timeout=60
        )

        try:
            result = response.json()
        except:
            result = response.text

        return {
            "success": response.status_code == 200,
            "status_code": response.status_code,
            "response": result
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }