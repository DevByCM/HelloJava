from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from app.api.v1.api import api_router
from app.core.config import settings
from app.common.database.session import engine, Base
from app.core.socket.server import socket_app, sio
from app.common.security.rate_limit import init_rate_limiting
from app.common.logging import setup_logging, logger

# Initialize Logging
setup_logging()

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Enterprise AI Football Betting Platform",
    version="2.0.0",
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Initialize Rate Limiting
init_rate_limiting(app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_V1_STR)

# Mount Socket.IO app
app.mount("/ws", socket_app)

@app.on_event("startup")
async def startup_event():
    logger.info("platform_startup", version="2.0.0", env="production")

@app.get("/health")
def health_check():
    return {"status": "healthy", "version": "2.0.0"}

async def broadcast_match_update(match_id: int, data: dict):
    await sio.emit("match_update", data, room=f"match_{match_id}")
