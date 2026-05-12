from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to AI Football Betting Intelligence API"}

def test_login_fail():
    response = client.post("/api/v1/auth/login/access-token", data={"username": "test@example.com", "password": "wrongpassword"})
    assert response.status_code == 400
