from app.worker.celery_app import celery_app
from celery.schedules import crontab

celery_app.conf.beat_schedule = {
    "sync-every-hour": {
        "task": "app.worker.tasks.sync_and_predict",
        "schedule": crontab(minute=0, hour="*/1"),
    },
}
