from typing import Any, List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas, models
from app.db.session import get_db

router = APIRouter()

@router.get("/", response_model=List[schemas.match.Match])
def read_matches(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
) -> Any:
    matches = db.query(models.match.Match).offset(skip).limit(limit).all()
    return matches
