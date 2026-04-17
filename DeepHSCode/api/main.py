from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from DeepHSCode.api.routers.hscode import router as hscode_router


_PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
load_dotenv(_PROJECT_ROOT / ".env", override=True)


app = FastAPI(
    title="DeepHSCode API",
    version="1.0.0",
    redirect_slashes=False,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(hscode_router, prefix="/api/v1", tags=["hscode"])


@app.get("/")
async def root() -> dict[str, str]:
    return {"message": "Welcome to DeepHSCode API"}


if __name__ == "__main__":
    from DeepHSCode.api.run_server import main as run_server_main

    run_server_main()
