from datetime import datetime

from fastapi import APIRouter

router = APIRouter()


@router.get("/", tags=["Root"], summary="Root endpoint")
async def health():
    return {
        "message": "AE Solar API Service is up and running",
        "status": "ok",
        "error": False,
        "ts": datetime.now().isoformat(),
    }
