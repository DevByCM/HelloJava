import socketio
import os

mgr = socketio.AsyncRedisManager(os.getenv("REDIS_URL", "redis://localhost:6379/0"))
sio = socketio.AsyncServer(async_mode='asgi', client_manager=mgr, cors_allowed_origins='*')
socket_app = socketio.ASGIApp(sio)

@sio.event
async def connect(sid, environ):
    pass

@sio.event
async def disconnect(sid):
    pass
