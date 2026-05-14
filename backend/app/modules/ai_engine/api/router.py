from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.common.database.session import get_db
from app.modules.ai_engine.service import AIEngineService
from app.api import deps

router = APIRouter()

@router.get("/explain/{prediction_id}")
def explain(
    prediction_id: int,
    db: Session = Depends(get_db),
    current_user = Depends(deps.get_current_active_user)
):
    service = AIEngineService(db)
    return service.get_prediction_explanation(prediction_id)
