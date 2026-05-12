from app.worker.celery_app import celery_app
from app.db.session import SessionLocal
from app.services.etl import ETLService
from app.services.prediction_engine import PredictionEngine
from app.services.ticket_generator import TicketGenerator
from datetime import datetime, timedelta

@celery_app.task
def sync_and_predict():
    db = SessionLocal()
    try:
        etl = ETLService(db)
        today = datetime.now().strftime("%Y-%m-%d")
        next_week = (datetime.now() + timedelta(days=7)).strftime("%Y-%m-%d")

        # 1. Sync data
        etl.sync_upcoming_matches(today, next_week)

        # 2. Generate predictions
        engine = PredictionEngine(db)
        engine.generate_predictions_for_upcoming()

        # 3. Generate tickets
        generator = TicketGenerator(db)
        generator.create_daily_ticket(target_odds=2.0, is_premium=False)
        generator.create_daily_ticket(target_odds=3.5, is_premium=True)

    finally:
        db.close()

@celery_app.task
def send_telegram_alert(message: str):
    # Placeholder for Telegram API integration
    print(f"TELEGRAM ALERT: {message}")
